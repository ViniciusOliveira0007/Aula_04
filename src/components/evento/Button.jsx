function Button({ event, text }) {
    return (
        <button 
            onClick={event}
            className="btn"
        >
            {text}
        </button>
    );
}

export default Button;