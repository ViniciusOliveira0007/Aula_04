import {useState} from 'react';


function Condicional(){

    const [userEmail, setEmail] = useState();
    const [email, setUserEmail] = useState ();


    function enviarEmail(event){
        
        event.preventDefault()

        setUserEmail(email)
        alert({UserEmail})
    }

    function limparEmail (){
        setUserEmail('')
    }



    return (
        <div>
            <h2>Cadastre um E-mail:</h2>
            <form action="">
                <input type="text" placeholder="Digite seu e-mail..."
                    onChange={()=> setUserEmail(event.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>


                {userEmail && (
                    <div>
                        <p></p>
                        <button onClick={limparEmail}>Apagar E-mail</button>
                    </div>

                )}





            </form>
        </div>
    )
}

export default Condicional