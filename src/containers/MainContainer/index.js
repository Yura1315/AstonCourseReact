import React from 'react';
import MainPage from '../../pages/MainPage';

class MainContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			deleteBtn: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSumbit = this.handleSumbit.bind(this);
	}

	componentDidMount() {
		console.log('componentDidMount MainContainer');
	}

	shouldComponentUpdate() {
		console.log('ShouldComponentUpdate Maincontainer');
		return true;
	}

	componentDidUpdate() {
		console.log('componentDidUpdate MainContainer');
	}

	handleChange(e) {
		this.setState({
			value: e.target.value,
		});
	}

	handleSumbit(e) {
		e.preventDefault();
		console.log(this.state.value);
		this.setState({
			value: '',
		});
	}

	render() {
		return (
			<MainPage
				value={this.state.value}
				handleSumbit={this.handleSumbit}
				handleChange={this.handleChange}
			/>
		);
	}
}

export default MainContainer;
