import React from 'react';
import { Link, hashHistory } from 'react-router';

class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password: "",
			email: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuestLogin = this.handleGuestLogin.bind(this);
	}

  handleGuestLogin() {
    const user = {password: "password", email: "guest@email.com"};
    this.props.login(user);
  }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.login({user});
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="session-form-container">
        <header className="logged-out-header">
          <nav className="logged-out-nav">
            <h1 className="large-logo">fbclone</h1>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="login-form">

                <ul className="email-input">
                  <li>Email</li>
                  <li>
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      />
                  </li>
                </ul>

                <ul className="password-input">
                  <li>Password</li>
                  <li>
                    <input type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    />
                  </li>
                </ul>

                <input className="session-submit" type="submit" value="Log In" />
              </div>
            </form>
            <button onClick={this.handleGuestLogin} className="session-submit" type="submit">Guest</button>
          </nav>
        </header>
			</div>
		);
	}
}

export default LogIn;
