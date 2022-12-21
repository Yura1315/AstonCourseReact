import React from 'react';
import './index.css';

class Input extends React.Component {
	componentDidMount() {
		console.log('componentDidMount Input');
	}
	shouldComponentUpdate() {
		console.log('ShouldComponentUpdate Input');
		return true;
	}
	componentDidUpdate() {
		console.log('componentDidUpdate Input');
	}

	render() {
		return (
			<input
				className='input'
				type='text'
				placeholder='введите имя...'
				onChange={this.props.handleChange}
				value={this.props.value}
			/>
		);
	}
}

export default Input;
