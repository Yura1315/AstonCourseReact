import React from 'react';
import './index.css';

class Input extends React.Component {
	render() {
		return (
			<input
				ref={this.props.refInput}
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
