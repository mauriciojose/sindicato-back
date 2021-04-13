const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv/config');

//const EmailService = require('../services/EmailService');
const User = require('../models/user');

module.exports = {
    async register(req, res) {

        const { email } = req.body;
        try {

            if (await User.findOne({ email })) {
                return res.status(400).json({ error: 'User already exists' });
            }

            req.body.isChecked = true;
            let user = await User.create(req.body);

            user.password = undefined;
            user.createdAt = undefined;
            user.isChecked = undefined;
            
            /*const sendEmail = await EmailService.sendMail(user.email, user.codigoVerificador);

            user.codigoVerificador = undefined;

            user.statusEmail = sendEmail.status;*/

            return res.json({ user });

        } catch (error) {
            return res.status(400).json({ error: error });
        }
    },
    async test(req, res){
        return res.json('success');
    },
    async authenticate(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email }).select('+password');

            if (!user)
            return res.status(400).send({ error: 'User not found' });

            if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Invalid password' });

            if (!user.isChecked)
            return res.status(403).send({ error: 'User not authorized' });

            user.password = undefined;
            user.isChecked = undefined;
            user.codigoVerificador = undefined;

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 21600
            });

            res.send({ user, token });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ erro: 'Erro ao fazer login' });
        }
    },
    async confirmLogin(req, res) {
        const { email, codigoVerificador } = req.params;

        const user = await User.findOne({ email, codigoVerificador });

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        if (user.isChecked)
            return res.status(400).send({ error: 'User already checked' });

        try {
            await User.findOneAndUpdate({ email: email }, { isChecked: true });
            res.send({ msg: 'Validated user' });
        } catch (error) {
            return res.status(500).send({ error: 'Error ao processar solicita��o' });
        }
    }
};
