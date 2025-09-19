function Button({ event, text }) {
    return (
        <button 
            onClick={event}
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-blue-600"
        >
            {text}
        </button>
    );
}

export default Button;