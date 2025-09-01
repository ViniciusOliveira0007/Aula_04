import { useState} from "react"


function Form(){


    function cadastrarUsuario(event){
        event.preventDefault()
        
        console.log(`Parabens ${name}, sua senha é ${password}`)
        console.log("Cadastrou Usuário")
    }


    const [name, setName]= useState()
    const [password, setPassword]= useState()



    return(
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                <label htmlFor="nome">Nome:</label>
                    <input type="text"  id='name' placeholder="Digite seu nome..."
                    onChange={(event) => setName(event.target.value)}
                    
                    
                    />
                    
                </div>

                <div>
                <label htmlFor="password">Senha:</label>
                    <input type="text" id='password' placeholder="digite sua senha..."
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                    <input type="submit" placeholder="digite sua senha..."
                    value='Cadastrar'
                    />

            </form>



        </>
    )
}


export default Form