import { useState } from 'react';
import Image from './evento/Image';
import Button from './evento/Button'

// Componentes simulados para demonstração




function Evento(){
    const [imageUrl, setImageUrl] = useState('');

    function meuPrimeiro(){
        alert(`Ativado men`);       
    }

    function meuSegundo(){
        alert(`Fera de mais`);       
    }

    function ColocaImagem(){
        const imagemSimples = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49nsN24fTM3P4UGC-FRqvRKj-QAS0m4eYfQ&s';
        setImageUrl(imagemSimples);
        alert('Imagem adicionada!');
    }

    return (
        <div className="p-6 max-w-md mx-auto">
            <p className="mb-4 text-lg">Clique aqui para deixar tudo queizy:</p>
            
            <div className="space-y-2">
                <Button event={meuPrimeiro} text='Primeiro disparo' />
                <Button event={meuSegundo} text='Segundo disparo' />
                <Image event={ColocaImagem} imageUrl={imageUrl} />
            </div>
        </div>
    );
}

export default Evento;