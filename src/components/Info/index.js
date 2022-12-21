import React from 'react';
import './index.css';

class Info extends React.Component {
	componentDidMount() {
		console.log('componentDidMount Info');
	}

	shouldComponentUpdate() {
		console.log('ShouldComponentUpdate Info');
		return true;
	}
	componentDidUpdate() {
		console.log('componentDidUpdate Info');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount Info');
	}
	render() {
		return <div className='info'>{this.props.value}</div>;
	}
}

export default Info;
