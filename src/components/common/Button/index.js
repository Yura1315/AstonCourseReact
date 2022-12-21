import React from 'react';
import './index.css';

class Button extends React.PureComponent {
	componentDidMount() {
		console.log('componentDidMount Button');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate Button');
	}

	render() {
		return (
			<button
				className='button'
				type='submit'>
				Отправить
			</button>
		);
	}
}

export default Button;
