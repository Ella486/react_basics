function Card(props) {
    const { title, backgroundColor, children} = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            <img 
                alt="사람이미지"
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                }}
            />
            {title && <h1>{title}</h1>}
            {children}
            <p>현재 시간: {new Date().toLocaleTimeString()}</p>
        </div>
    );
}

export default Card;