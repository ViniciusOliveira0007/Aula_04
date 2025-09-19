function Image({ event, imageUrl }) {
    return (
        <div className="m-2">
            <button 
                onClick={event}
                
            >
                Colocar Imagem
            </button>
            {imageUrl && (
                <div className="mt-2">
                    <img 
                        src={imageUrl} 
                        alt="Imagem adicionada" 
                       
                    />
                </div>
            )}
        </div>
    );
}


export default Image