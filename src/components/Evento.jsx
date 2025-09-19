import { useState } from 'react';
import Image from './evento/Image';
import Button from './evento/Button';
import AlteraImg from './evento/AlteraImg';
import AlteraImg2 from './evento/AlteraImg2';
import AlteraImg3 from './evento/AlteraImg3';
import AlteraImg4 from './evento/AlteraImg4';

// Componentes simulados para demonstração




function Evento(){
    const [imageUrl, setImageUrl] = useState('');

    function meuPrimeiro(){
        alert(`Foi criado pelo desenvolvedor: Vinicius`);       
    }

    function meuSegundo(){
        alert(`Feito com o intuito de explorar ações do React + Vite`);       
    }

    function ColocaImagem(){
        const imagemSimples = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49nsN24fTM3P4UGC-FRqvRKj-QAS0m4eYfQ&s';
        setImageUrl(imagemSimples);
        alert('Imagem adicionada!');
    }

    function TrocaImagem(){
        const imagemSimples = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQpqzx152vscgXGgy6esUtFZdLgjEUSeWwPbz0a9Ron7bL5vO8GqRzWqj4Vz2o62VVoA&usqp=CAU';
        setImageUrl(imagemSimples);
        alert('Imagem adicionada!');
    }

    

    function TrocaImagem2(){
        const imagemSimples = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0mb0DjM3OOFkC79_OvVSf7so7h3yW4xVdQ&s';
        setImageUrl(imagemSimples);
        alert('Imagem adicionada!');
    }

    function TrocaImagem3(){
        const imagemSimples = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEb63yATLXn0pvjUFzLX_6rtApcKs9hU0dag&s';
        setImageUrl(imagemSimples);
        alert('Imagem adicionada!');
    }

    function TrocaImagem4(){
        const imagemSimples = 'https://media.istockphoto.com/id/959512078/pt/foto/girl-is-jumping-with-snowboard.jpg?s=612x612&w=0&k=20&c=64qEqHBzZoVWP386yRm0G39AVOXc_iYsr1IyZA2pjgs=';
        setImageUrl(imagemSimples);
        alert('Imagem adicionada!');
    }

    return (
        <div className="p-6 max-w-md mx-auto">
            <p className="legenda">Clique aqui para ver mais informações:</p>
            
            <div className="space-y-2">
                <Button event={meuPrimeiro} text='Nome do criador' />
                <Button event={meuSegundo} text='Intuito do site' />
                <Image event={ColocaImagem} imageUrl={imageUrl} />
                <AlteraImg event={TrocaImagem}/>
                <AlteraImg2 event={TrocaImagem2}/>
                <AlteraImg3 event={TrocaImagem3}/>
                <AlteraImg4 event={TrocaImagem4}/>
            </div>
        </div>
    );
}

export default Evento;