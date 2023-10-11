function Person ({name, age, hobbies}) {
    const goVote = age >= 18 ? "Please go vote!" : "you must be 18";
    return (<div>
            <p>Learn some information about {name}</p>
            <ul>
                <li>Name: {name.slice(0,5)}</li>
                <li>Age: {age}</li>
                <ul>Hobbies: {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
         </ul>
         <h3>{goVote}</h3>
     </div>
)}


export default Person