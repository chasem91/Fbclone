
import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password: "",
			email: "",
			verificationEmail: "",
      gender: "",
      birthMonth: "",
      birthDay: "",
      birthYear: "",
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
		let user = this.state;
    user.birthday = `${user.birthMonth}-${user.birthDay}-${user.birthYear}`;
    user.email = user.email === user.verificationEmail ? user.email : "match_error";
    this.props.signup({ user });
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

  render() {
    return (
      <div className="sign-up group">
        <div className="sign-up-content">
          <section className="sign-up-messages">
            <div className="sign-up-errors">
              {this.renderErrors()}
            </div>
            <h1 className="sign-up-connect-message">Connect with friends and the world around you on Fbclone.</h1>
            <div className="sign-up-bullet">
              <img className="iconImage" src={window.signupImages.seePhotosImage}/>
              <span>See photos and updates </span> from friends in News Feed.
            </div>
            <div className="sign-up-bullet">
              <img className="iconImage" src={window.signupImages.shareImage}/>
              <span>Share what's new </span> in your life on your Timeline.
            </div>
            <div className="sign-up-bullet">
              <img className="iconImage" src={window.signupImages.findMoreImage}/>
              <span>Find more </span> of what you're looking for with Fbclone Search.
            </div>
          </section>
          <section className="form-and-header">
            <header className="sign-up-header">
              <h1>Sign Up</h1>
              <h3>It's free and always will be.</h3>
            </header>

            <input type="text"
              placeholder="First name"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="sign-up-input" />
            <input type="text"
              placeholder="Last name"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="sign-up-input" />
            <input type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")}
              className="sign-up-input" />
            <input type="text"
              placeholder="Re-enter email"
              value={this.state.verificationEmail}
              onChange={this.update("verificationEmail")}
              className="sign-up-input" />
            <input type="password"
              placeholder="New password"
              value={this.state.password}
              onChange={this.update("password")}
              className="sign-up-input" />

            <h3>Birthday</h3>
            <select onChange={this.update("birthMonth")} name="month" id="month" size="1">
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select onChange={this.update("birthDay")} name="day" id="day" size="1">
              <option value="01">01</option>
            </select>
            <select onChange={this.update("birthYear")} name="year" id="year" size="1">
              <option value="2016">2016</option>
            </select>

            <input className="sign-up-submit" type="submit" value="Sign Up" />

          </section>
        </div>
      </div>
    );
  }
}

export default SignUp;
