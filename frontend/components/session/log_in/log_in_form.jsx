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

  handleGuestLogin(e) {
    e.preventDefault();
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
		this.props.login(user);
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
            <form onSubmit={this.handleSubmit} className="login-form">
              <div className="login-form-inputs">
                <div className="login-input-container">
                  <div className="login-input-label">Email</div>
                  <div>
                    <input type="text"
                      className="login-input"
                      value={this.state.email}
                      onChange={this.update("email")}
                      />
                  </div>
                </div>

                <div className="login-input-container">
                  <div className="login-input-label">Password</div>
                  <div>
                    <input type="password"
                      className="login-input"
                      value={this.state.password}
                      onChange={this.update("password")}
                      />
                  </div>
                </div>
              </div>

              <div className="login-buttons">
                <input className="session-submit" type="submit" value="Log In" />
                <button onClick={this.handleGuestLogin} className="session-submit" type="submit">Guest</button>
              </div>
            </form>
          </nav>
        </header>
			</div>
		);
	}
}

export default LogIn;
