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
            <h2 className="text-2xl font-bold mb-4 text-center">Cadastre-se aqui:</h2>
            
            <div className="space-y-4">
                <div className="bloco-email">
                    <input 
                        type="email" 
                        placeholder="Digite seu e-mail..."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <button 
                        type="button" 
                        onClick={enviarEmail}
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
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
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <button 
                        type="button" 
                        onClick={enviarPassword}
                        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                    >
                        Enviar Senha
                    </button>
                </div>

                <button 
                    type="button"
                    onClick={Concluido}
                    className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
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
                                    className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
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
                                    className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
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