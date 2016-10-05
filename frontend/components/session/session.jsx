import React from 'react';
import { Link, hashHistory } from 'react-router';
import SignUpFormContainer from './sign_up/sign_up_form_container';
import LogInFormContainer from './log_in/log_in_form_container';

class Session extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
      <div className="session-form-container">
        <header className="logged-out-header">
          <LogInFormContainer />
        </header>
        <SignUpFormContainer />
			</div>
		);
	}
}

export default Session;
