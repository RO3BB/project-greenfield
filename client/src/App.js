import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

export class App extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            password:''
        }

        this.handleChange = this.handleChange.bind(this); 
        this.register = this.register.bind(this);     
    }

    handleChange(e){
        console.log(e.target.value)
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    register(e){
        e.preventDefault();
        console.log(this.state)
        axios.post('http://127.0.0.1:3500/register', 
                   this.state
        ).then ((response) => {
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <label>name :</label>
                    <input type='text' id='name' value={this.state.name} onChange={this.handleChange}></input>
                    <label>email :</label>
                    <input type='text' id='email' value={this.state.email} onChange={this.handleChange}></input>
                    <label>password :</label>
                    <input type='text' id='password' value={this.state.password} onChange={this.handleChange}></input>
                    <button onClick={this.register}>Submit</button>
            </div>
        )
    }
}

export default App;
