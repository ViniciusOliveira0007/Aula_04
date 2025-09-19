import {useState} from 'react';

function Condicional(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function enviarEmail(event){
        event.preventDefault();
        setUserEmail(email);
        alert(`Email enviado: ${email}`);
    }

    function enviarPassword(event){
        event.preventDefault();
        setUserPassword(password);
        alert(`Senha enviada: ${password}`);
    }

    function limparEmail(){
        setUserEmail(''); 
        setEmail('');     
    }

    function limparPassword(){
        setUserPassword(''); 
        setPassword('');     
    }

    function Concluido(){
        alert('Concluído');
    }

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <h2 className="sub-titulo">Cadastre-se aqui:</h2>
            
            <div className="space-y-4">
                <div className="bloco-email">
                    <input 
                        type="email" 
                        placeholder="Digite seu e-mail..."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="label-info"
                    />
                    <button 
                        type="button" 
                        onClick={enviarEmail}
                        className="btn-envio"
                    >
                        Enviar E-mail
                    </button>
                </div>

                <div className="bloco-senha">
                    <input 
                        type="password" 
                        placeholder="Digite sua senha..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="label-info"
                        
                    />
                    <button 
                        type="button" 
                        onClick={enviarPassword}
                        className="btn-envio"
                    >
                        Enviar Senha
                    </button>
                </div>

                <button 
                    type="button"
                    onClick={Concluido}
                    className="btn-envio"
                    
                >
                    Concluído
                </button>

                {(userEmail || userPassword) && (
                    <div className="mt-6 p-4 bg-gray-100 rounded">
                        {userEmail && (
                            <div className="mb-4">
                                <p className="font-semibold">Seu e-mail: {userEmail}</p>
                                <button 
                                    onClick={limparEmail}
                                    className="btn-limpa"
                                >
                                    Apagar E-mail
                                </button>
                            </div>
                        )}
                        
                        {userPassword && (
                            <div>
                                <p className="font-semibold">Sua senha: {userPassword}</p>
                                <button 
                                    onClick={limparPassword}
                                    className="btn-limpa"
                                >
                                    Apagar Senha
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Condicional;