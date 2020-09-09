import React, { Component } from 'react';


export class Login extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            userName: "",
            password: ""
        };
    }

    getUserName = (event) => {
        this.setState({
            userName: event.target.value,
        })
    }

    getPassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    login(event) {
        event.preventDefault();
        if(this.state.userName === 'demo' && this.state.password === 'demo'){
            localStorage.setItem("Login", "true")
            window.location.href = '/'
        }
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-ld-4 mx-auto">
                        <form className="mt-5" onSubmit={ (event)=> this.login(event) }>
                            <div className="form-group">
                                <label htmlFor="email">Username:</label>
                                <input type="text" className="form-control" placeholder="Username" id="username" onChange={ (event) => this.getUserName(event)}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" className="form-control" placeholder="Password" id="pwd" onChange={ (event) => this.getPassword(event)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
