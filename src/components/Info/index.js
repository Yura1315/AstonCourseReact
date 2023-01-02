import React from 'react';
import './index.css';

class Info extends React.Component {
	render() {
		return <div className='info'>{this.props.value}</div>;
	}
}

export default Info;
