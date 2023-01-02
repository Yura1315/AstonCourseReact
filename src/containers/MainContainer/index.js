import React from 'react';
import MainPage from '../../pages/MainPage';

class MainContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			deleteBtn: false,
		};
		this.focusInput = React.createRef();
		this.handleFocus = this.handleFocus.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSumbit = this.handleSumbit.bind(this);
	}

	handleChange(e) {
		this.setState({
			value: e.target.value,
		});
	}

	handleSumbit(e) {
		e.preventDefault();
		if (!this.state.value) {
			console.log('Форма пустая, не отправляем');
		}
		this.setState({
			value: '',
		});
	}

	handleFocus(e) {
		e.preventDefault();
		this.focusInput.current.focus();
	}

	render() {
		return (
			<MainPage
				value={this.state.value}
				handleSumbit={this.handleSumbit}
				handleChange={this.handleChange}
				handleFocus={this.handleFocus}
				refInput={this.focusInput}
			/>
		);
	}
}

export default MainContainer;
