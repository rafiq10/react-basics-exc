import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
    <div className="UserOutput">
        <p>Your userName is:</p>
        <p>{props.usrName}</p>
        <p>Your email address is:</p>
        <p>{props.usrName}@mammamia.com</p>
    </div>
    )
}

export default UserOutput;