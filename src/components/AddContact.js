import React from "react";

class AddContact extends React.Component{
    render(){
        return(
            <div className="ui main">
                <div className="ui container">
                    <h2>Add Contact</h2>
                    <form className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <button className="ui button blue">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;