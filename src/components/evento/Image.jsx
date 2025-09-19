function Image({ event, imageUrl }) {
    return (
        <div className="m-2">
            <button 
                onClick={event}
                className="btn"
                
            >
                 Imagem 1
            </button>
            {imageUrl && (
                <div className="mt-2">
                    <img 
                        src={imageUrl} 
                        alt="Imagem colocada" 
                       
                    />
                </div>
            )}
        </div>
    );
}


export default Image