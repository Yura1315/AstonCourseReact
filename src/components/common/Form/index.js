import React from 'react';

class Form extends React.Component {
	render() {
		return <form onSubmit={this.props.handleSumbit}>{this.props.children}</form>;
	}
}

export default Form;
