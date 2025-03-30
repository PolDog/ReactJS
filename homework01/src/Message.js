function Message({title,text}) {
    return ( 
        <div className="message">
            <h1 className="title">{title}</h1>
            <p className="text">{text}</p>
        </div>
     );
}

export default Message;