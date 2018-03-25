import React from 'react';
import UserOutput from '../UserOutput/UserOutput';

class UserInput extends React.Component {
    state = {
        theUserName: "vero.bil"
    }


    onChangeHandler = (event) =>{
        this.setState({
            theUserName:event.target.value,
        })
    }
    render(){
        const style = {
            width: "20%",
            margin: "12px",
            color: "red",
            border: "3px solid #aaa",
            padding: "30px",
        }

    return (
        <div>
            <div style={style}>
            <p>Provide your userName: </p>
            <input onInput={this.onChangeHandler} type="text" value={this.state.theUserName}></input>
            </div>
            <UserOutput usrName={this.state.theUserName}/>
        </div>
        )
    }
}

export default UserInput;