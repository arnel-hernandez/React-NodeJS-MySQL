import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// const formValid = formErrors => {
//   let valid = true;

//   Object.values(formErrors).forEach(value => {
//     value.length > 0 && (valid = false)
//   });
//   return valid;
// }

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            formErrors: {
              email: '',
              password: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // let target = e.target;
        // let value = target.type === 'checkbox' ? target.checked : target.value;
        // let name = target.name;

        this.setState({
          [e.target.id]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        // if (formValid(this.state.formErrors)){
        //   console.log('valid')
        // }
        // else
        // {
        //   console.log("not vlaid")
        // }

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        
        <div className="container">
        <div className="center">
        <h3>Welcome</h3>
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField_Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField_Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
              <button className="FormField__Button mr-20">Sign In</button>
                  <h5>Don't have an Account?</h5>
                  <Link to="/signup" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
          </div>
          </div>
        );
    }
}

export default Login;
