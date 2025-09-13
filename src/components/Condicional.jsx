import {useState} from 'react';


function Condicional(){


    const [email, setUserEmail] = useState ();


    function enviarEmail(event){
        
        event.preventDefault()
        setUserEmail(email)
        alert('Funcionou')
    }



    return (
        <div>
            <h2>Cadastre um E-mail:</h2>
            <form action="">
                <input type="text" placeholder="Digite seu e-mail..."
                    onChange={()=> setUserEmail(event.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>
            </form>
        </div>
    )
}

export default Condicional