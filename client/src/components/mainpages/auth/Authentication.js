import React, { Component } from 'react'
import Login from './Login.js'
import Register from './Register.js'

export class Authentication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentView: 'Authentication'
        }
        this.toggleView = this.toggleView.bind(this)

    }

    toggleView(view) {
        this.setState({
            currentView: view
        })
    }
    render() {
        return (
            <div>
                <Login loginToggle={this.toggleView('ProductList')} />
                <Register registerToggle={this.toggleView('ProductList')} />
            </div>
        )
    }
}

export default Authentication
