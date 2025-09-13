
import Button from "./evento/BUtton";


function Evento(){
    

    function meuPrimeiro(){
      alert(`Ativado men`)       
    }


    function meuSegundo(){
      alert(`Fera de mais`)       
    }

    return (

            <div>

                <p>CLique aqui para deixar tudo queizy: </p>
                <Button event={meuPrimeiro} text='Primeiro disparo' />
                <Button event={meuSegundo} text='Segundo disparo' />

            </div>
    )
}

export default Evento