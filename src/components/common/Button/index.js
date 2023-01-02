import React from 'react';
import './index.css';

class Button extends React.PureComponent {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	render() {
		return (
			<button
				disabled={this.props.isDisabled}
				className='button'
				type='submit'
				onClick={this.props.handle}>
				{this.props.title}
			</button>
		);
	}
}

export default Button;
