import React from 'react';

const UserInput =(props) => {
    const style = {
        width: "56%",
        border: "1px solid #aaa"
    } 
    return (
        <div>
            <div style={style}>
            <p>Provide your userName: </p>
            <input type="text" onInput={props.changed} value={props.userName}></input>
            </div>
        </div>
        )
}

export default UserInput;