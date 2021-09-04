const nodemailer = require('nodemailer');
const configuration = require('../config/ConfigurationEmail.json');

const templatesEmails = require('../templates/EmailsTemplates');

module.exports = {
    async sendMail(email, dados){
        try {

            return new Promise((resolve,reject)=>{
                var transporter = nodemailer.createTransport({
                    service: configuration.service,
                    auth: {
                        user: configuration.user,
                        pass: configuration.pass
                    }
                });

                var destinatario = email;

                var html = "";
                switch (dados.tipo) {
                    case '1':
                            html = templatesEmails.templateTres(dados);
                        break;
                    case '2':
                            html = templatesEmails.templateDois(dados);
                        break;
                    case '3':
                            html = templatesEmails.templateQuatro(dados);
                        break;
                
                    default:
                        break;
                }

                var mailOptions = {
                    from: configuration.user,
                    to: destinatario,
                    subject: configuration.typeCreateUser.subject,
                    text: "",
                    html: html
                }

                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        resolve({
                            status: 400,
                            msg: error
                        });
                    } else {
                        resolve({
                            status: 200,
                            msg: 'Email enviado: ' + info.response
                        });
                    }
                });
            });

        } catch (error) {
            return {
                status: 400,
                msg: error
            };
        }
    }
}