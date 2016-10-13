
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
    user.birthday = `${user.birthDay}-${user.birthMonth}-${user.birthYear}`;
    user.email = user.email === user.verificationEmail ? user.email : "match_error";
    delete user.birthDay;
    delete user.birthMonth;
    delete user.birthYear;
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

  birthdayInputs() {
    const days = [];
    const years = [];
    for(let i = 1; i <= 31; i++){
      days.push(<option key={i} value={`${i}`}>{i}</option>);
    }
    for(let i = 2016; i >= 1900; i-= 1){
      years.push(<option key={i} value={`${i}`}>{i}</option>);
    }

    return (
      <div>
        <select defaultValue="default" onChange={this.update("birthMonth")} name="month" id="month" size="1">
          <option value="default">Month</option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
        <select defaultValue="default" onChange={this.update("birthDay")} name="day" id="day" size="1">
          <option value="default">Day</option>
          {days}
        </select>
        <select defaultValue="default" onChange={this.update("birthYear")} name="year" id="year" size="1">
          <option value="default">Year</option>
          {years}
        </select>
      </div>
    );
  }

  formAndHeader() {
    return (
      <section className="form-and-header">
        <header className="sign-up-header">
          <h1>Sign Up</h1>
          <h3>It's free and always will be.</h3>
        </header>

        <div className="sign-up-name-inputs">
          <input type="text"
            placeholder="First name"
            value={this.state.first_name}
            onChange={this.update("first_name")}
            className="sign-up-name-input" />
          <input type="text"
            placeholder="Last name"
            value={this.state.last_name}
            onChange={this.update("last_name")}
            className="sign-up-name-input" />
        </div>
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

        <div className="birthday-title">Birthday</div>
        {this.birthdayInputs()}

        <div className="gender-inputs">
          <div className="gender-input">
            <input
              type="radio"
              value="female"
              onChange={this.update("gender")}
              className="gender-radio-input"
              name="gender"/>
            <div className="gender-input-text">Female</div>
          </div>

          <div className="gender-input">
            <input
              type="radio"
              value="male"
              onChange={this.update("gender")}
              className="gender-radio-input"
              name="gender"/>
            <div className="gender-input-text">Male</div>
          </div>
        </div>
        <input onClick={this.handleSubmit}
          className="sign-up-submit"
          type="submit"
          value="Sign Up" />
      </section>
    );
  }

  signupMessages() {
    return (
      <section className="sign-up-messages">
        <div className="sign-up-errors">
          {this.renderErrors()}
        </div>
        <h1 className="sign-up-connect-message">Connect with friends and the <br/> world around you on Fbclone.</h1>
        <div className="sign-up-bullets">
          <div className="sign-up-bullet">
            <div className="icon-image">
              <img src={window.signupImages.seePhotosImage}/>
            </div>
            <div className="bullet-message">
              <div className="bullet-message-bold">See photos and updates</div>
              <div className="bullet-message-normal">from friends in News Feed.</div>
            </div>
          </div>
          <div className="sign-up-bullet">
            <div className="icon-image">
              <img src={window.signupImages.shareImage}/>
            </div>
            <div className="bullet-message">
              <div className="bullet-message-bold">Share what's new</div>
              <div className="bullet-message-normal">in your life on your Timeline.</div>
            </div>
          </div>
          <div className="sign-up-bullet">
            <div className="icon-image">
              <img src={window.signupImages.findMoreImage}/>
            </div>
            <div className="bullet-message">
              <div className="bullet-message-bold">Find more</div>
              <div className="bullet-message-normal">of what you're looking for with Fbclone Search.</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <div className="sign-up group">
        <div className="sign-up-background"/>
        <div className="sign-up-content">
          {this.signupMessages()}
          {this.formAndHeader()}
        </div>
        <div className="sign-up-white-background"/>
      </div>
    );
  }
}

export default SignUp;
