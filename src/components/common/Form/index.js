import React from 'react';

class Form extends React.Component {
	componentDidMount() {
		console.log('componentDidMount Form');
	}

	shouldComponentUpdate() {
		console.log('ShouldComponentUpdate From');
		return true;
	}

	componentDidUpdate() {
		console.log('componentDidUpdate Form');
	}

	render() {
		return <form onSubmit={this.props.handleSumbit}>{this.props.children}</form>;
	}
}

export default Form;
