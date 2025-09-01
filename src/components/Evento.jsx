
function Evento({numero}){


    

    function meuEvento(){
      alert(`${numero}`)       
    }



    return (

            <div>

                <p>CLique aqui para deixar tudo queizy: </p>
                <button onClick={meuEvento}>deixa o like</button>



            </div>
    )
}

export default Evento