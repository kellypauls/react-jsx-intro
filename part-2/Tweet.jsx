function Tweet( {username, name, date, message }) {
    return (
        <div className="tweet">
            <h1>{username}</h1>
            <h2>{name}</h2>
            <span>{date}</span>
            <p>{message}</p>
        </div>
    )
}

export default Tweet;