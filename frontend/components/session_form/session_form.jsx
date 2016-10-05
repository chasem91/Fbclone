import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: "",
      gender: "",
      birthday: "",
      first_name: "",
      last_name: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn) {
			hashHistory.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
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

  // <label> First Name:
  //   <input type="text"
  //     value={this.state.first_name}
  //     onChange={this.update("first_name")}
  //     className="login-input" />
  // </label>
  //
  // <label> Last Name:
  //   <input type="text"
  //     value={this.state.last_name}
  //     onChange={this.update("last_name")}
  //     className="login-input" />
  // </label>
  //
  // <label> Gender:
  //
  //   <input type="text"
  //     value={this.state.gender}
  //     onChange={this.update("gender")}
  //     className="login-input" />
  // </label>
  // <label> Birthday:
  //   <input type="text"
  //     value={this.state.birthday}
  //     onChange={this.update("birthday")}
  //     className="login-input" />
  // </label>
  //
  // <label> Username:
  //   <input type="text"
  //     value={this.state.username}
  //     onChange={this.update("username")}
  //     className="login-input" />
  // </label>
  // Please {this.props.formType} or {this.navLink()}

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
          </nav>
        </header>
			</div>
		);
	}

}

export default SessionForm;
