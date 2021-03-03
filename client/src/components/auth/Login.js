import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
    });

    const { email, password, password2 } = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2) {
            console.log('Passwords do not match')
        } else {
            console.log("Success!")
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Log-In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" value={email} onChange={e => onChange(e)} name="email" required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
            required
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Log-In" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Register an account</Link>
      </p>
        </Fragment>
    )
}

export default Login;