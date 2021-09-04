module.exports = {
    templateUm(link){
        return `
                    <style>

                        div.container-email div.body-email div.button-confirm button:hover{
                            background-color: lightseagreen;
                            color: white;
                            border: 1px solid #e7e6e6;
                        }
                        
                    </style>
                <div style='font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; font-weight: 400; font-size: 15px; background: #f0f0f5; -webkit-font-smoothing: antialiased; width: 100%; height: 100vh; display: block; align-items: center; justify-content: center;'>
                    <div style='margin: 0 auto;width: 50%; height: 100%; background-color: white; -webkit-box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75); -moz-box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75); box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75);'>
                        <div style='width: 100%; display: block; block-direction: column; align-items: center; justify-content: center; padding: 30px 0 0 0;'>
                            <div style='width: 100%; font-size: 30px; color: lightseagreen; display: block; align-items: center; justify-content: center;'>
                                <span style='    margin-left: 19%;'>Verificação de E-mail</span>
                            </div>
                            <div style='width: 100%; font-size: 30px; color: lightseagreen; display: block; align-items: center; justify-content: center; padding: 7% 0% 1% 29%;'>
                                <img src="https://lh3.google.com/u/2/d/1Uq4jUcwDTtIyFfzS_m8_VUjCYt_bgvZ6=w1366-h664-iv1" alt="" style='width: 42%;'>
                            </div>
                            <div style='width: 409px; display: block; align-items: center; justify-content: center; padding: 4% 7% 0 7%;text-align: center;'>
                                <span style='width: 409px; font-size: 32px; color: #222222; text-align: center; line-height: 30px;'>Por favor, confirme o seu endereço de e-mail</span>
                            </div>
                            <div style='width: 409px; display: block; align-items: center; justify-content: center; padding: 4% 7% 0 7%;text-align: center;'>
                                <span style='width: 409px; font-size: 18px; color: #222222; text-align: center; line-height: 20px; color: #4F4F4F;'>Para verificar que este endereço de e-mail pertence a você, clique no botão abaixo:</span>
                            </div>
                            <div style='width: 409px; display: block; align-items: center; justify-content: center; padding: 4% 30%;'>
                                <a href="http://www.google.com.br" target="_blank" rel="noopener noreferrer">
                                    <button style='cursor: pointer;background-color: lightseagreen; color: white; border: 1px solid #e7e6e6; padding: 10px 20px; font-size: 20px; border-radius: 5px; transition: background-color 0.3s linear 0.1s, color 0.3s linear 0.1s;'>Confirmar E-mail</button>
                                </a>
                            </div>
                        </div>
                        <div style='height: 100%;width: 100%; border-top: 1px solid #cdcdcd; margin-top: 7%; background-color: #f0eeee; display: block; justify-content: center; align-items: center;'>
                            <div style='width: 50%;float:left; display: block; justify-content: center; align-items: center; block-direction: column;'>
                                <h3 style='text-align: center;'>Sobre</h3>
                                <span style='color: #4F4F4F;'>Verificação de endereço de e-mail.</span>
                            </div>
                            <div style='width: 50%;float:left; display: block; justify-content: center; align-items: center; block-direction: column;'>
                                <h3 style='text-align: center;'>Contato</h3>
                                <span style='color: #4F4F4F;'>mauricio.si.servico@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    },
    templateDois(dados){
        return `
        <style>

        div.container-email div.body-email div.button-confirm button:hover{
            background-color: lightseagreen;
            color: white;
            border: 1px solid #e7e6e6;
        }

        th, td{
            padding: 2px 3px;
        }
    
    </style>
    <div style='font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; font-weight: 400; font-size: 15px; background: #f0f0f5; -webkit-font-smoothing: antialiased; width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center;'>
        <div style='margin: 0 auto;width: 50rem; height: 100%; background-color: white; -webkit-box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75); -moz-box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75); box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75);'>
            <div style='width: 100%; display: block; block-direction: column; align-items: center; justify-content: center; padding: 30px 0 0 0;'>
                <div style='width: 100%; font-size: 30px; color: lightseagreen; display: block; text-align: center;'>
                    Nova Solicitação
                </div>
                <div style='width: 100%; font-size: 30px; color: lightseagreen; display: block;text-align: center;margin-top: 4%'>
                    <img src="https://lh3.google.com/u/2/d/1Uq4jUcwDTtIyFfzS_m8_VUjCYt_bgvZ6=w1366-h664-iv1" alt="" style='width: 22%;'>
                </div>
                <div style='margin-top: 4%;width: 100%; display: flex; align-items: center; justify-content: center;text-align: center;'>
                    <span style='width: 100%; font-size: 32px; color: #222222; text-align: center; line-height: 30px;'>Segue abaixo os dados:</span>
                </div>
                <div style='margin-top: 4%;width: 100%; display: block;text-align: center;'>
                    <div style='width: 100%;'>
                        <span style='width: 100%; font-size: 25px; color: #222222; text-align: center; line-height: 30px;'>Cliente:</span>
                    </div>
                    <div style='width: 100%;'>
                        <table style='width: 100%;margin-top: 20px;'>
                            <thead>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Whatsapp</th>
                                <th>Menssagem</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${dados.name}</td>
                                    <td>${dados.email}</td>
                                    <td>${dados.phone}</td>
                                    <td>${dados.message}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    },
    templateTres(dados){
        return `
        <style>

        div.container-email div.body-email div.button-confirm button:hover{
            background-color: lightseagreen;
            color: white;
            border: 1px solid #e7e6e6;
        }

        th, td{
            padding: 2px 3px;
        }
    
    </style>
    <div style='font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; font-weight: 400; font-size: 15px; background: #f0f0f5; -webkit-font-smoothing: antialiased; width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center;'>
        <div style='margin: 0 auto;width: 50rem; height: 100%; background-color: white; -webkit-box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75); -moz-box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75); box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75);'>
            <div style='width: 100%; display: block; block-direction: column; align-items: center; justify-content: center; padding: 30px 0 0 0;'>
                <div style='width: 100%; font-size: 30px; color: lightseagreen; display: block; text-align: center;'>
                    Nova Solicitação
                </div>
                <div style='width: 100%; font-size: 30px; color: lightseagreen; display: block;text-align: center;margin-top: 4%'>
                    <img src="https://lh3.google.com/u/2/d/1Uq4jUcwDTtIyFfzS_m8_VUjCYt_bgvZ6=w1366-h664-iv1" alt="" style='width: 22%;'>
                </div>
                <div style='margin-top: 4%;width: 100%; display: flex; align-items: center; justify-content: center;text-align: center;'>
                    <span style='width: 100%; font-size: 32px; color: #222222; text-align: center; line-height: 30px;'>Segue abaixo os dados:</span>
                </div>
                <div style='margin-top: 4%;width: 100%; display: block;text-align: center;'>
                    <div style='width: 100%;'>
                        <span style='width: 100%; font-size: 25px; color: #222222; text-align: center; line-height: 30px;'>Cliente:</span>
                    </div>
                    <div style='width: 100%;'>
                        <table style='width: 100%;margin-top: 20px;'>
                            <thead>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Whatsapp</th>
                                <th>Plano</th>
                                <th>Cidade</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${dados.name}</td>
                                    <td>${dados.email}</td>
                                    <td>${dados.phone}</td>
                                    <td>${dados.plano}</td>
                                    <td>${dados.cidade}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    },
    templateQuatro(dados){
        console.log(dados);
        return `
        <style>

        div.container-email div.body-email div.button-confirm button:hover{
            background-color: lightseagreen;
            color: white;
            border: 1px solid #e7e6e6;
        }

        th, td{
            padding: 2px 3px;
        }
    
    </style>
    <div style='font-family: Candara, Calibri, Segoe, "Segoe UI", Optima, Arial, sans-serif; font-weight: 400; font-size: 15px; background: #f0f0f5; -webkit-font-smoothing: antialiased; width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center;'>
        <div style='margin: 0 auto;width: 50rem; height: 100%; background-color: white; -webkit-box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75); -moz-box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75); box-shadow: 2px 2px 78px -35px rgba(0,0,0,0.75);'>
            <div style='width: 100%; display: block; block-direction: column; align-items: center; justify-content: center; padding: 30px 0 0 0;'>
                <div style='width: 100%; font-size: 30px; color: lightseagreen; display: block; text-align: center;'>
                    Nova Solicitação
                </div>
                <div style='width: 100%; font-size: 30px; color: lightseagreen; display: block;text-align: center;margin-top: 4%'>
                    <img src="https://lh3.google.com/u/2/d/1Uq4jUcwDTtIyFfzS_m8_VUjCYt_bgvZ6=w1366-h664-iv1" alt="" style='width: 22%;'>
                </div>
                <div style='margin-top: 4%;width: 100%; display: flex; align-items: center; justify-content: center;text-align: center;'>
                    <span style='width: 100%; font-size: 32px; color: #222222; text-align: center; line-height: 30px;'>Segue abaixo os dados:</span>
                </div>
                <div style='margin-top: 4%;width: 100%; display: block;text-align: center;'>
                    <div style='width: 100%;'>
                        <span style='width: 100%; font-size: 25px; color: #222222; text-align: center; line-height: 30px;'>Cliente:</span>
                    </div>
                    <div style='width: 100%;'>
                        <table style='width: 100%;margin-top: 20px;'>
                            <thead>
                                <th>Nome</th>
                                <th>Cpf</th>
                                <th>Whatsapp</th>
                                <th>Cidade</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${dados.name_cliente}</td>
                                    <td>${dados.cpf_cliente}</td>
                                    <td>${dados.phone_cliente}</td>
                                    <td>${dados.cidade_cliente}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style='margin-top: 4%;width: 100%; display: block;text-align: center;'>
                    <div style='width: 100%;'>
                        <span style='width: 100%; font-size: 25px; color: #222222; text-align: center; line-height: 30px;'>Amigo:</span>
                    </div>
                    <div style='width: 100%;'>
                        <table style='width: 100%;margin-top: 20px;'>
                            <thead>
                                <th>Nome</th>
                                <th>Whatsapp</th>
                                <th>Email</th>
                                <th>Cidade</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${dados.name_amigo}</td>
                                    <td>${dados.phone_amigo}</td>
                                    <td>${dados.email_amigo}</td>
                                    <td>${dados.cidade_amigo}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
        `;
    }
}