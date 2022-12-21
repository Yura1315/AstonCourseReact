import React from 'react';
import Form from '../../components/common/Form';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Info from '../../components/Info';
import './index.css';
class MainPage extends React.Component {
	componentDidMount() {
		console.log('componentDidMount MainPage');
	}
	shouldComponentUpdate() {
		console.log('ShouldComponentUpdate MainPage');
		return true;
	}
	componentDidUpdate() {
		console.log('componentDidUpdate MainPage');
	}
	render() {
		return (
			<div className='main__wrapper'>
				<div className='form__wrapper'>
					<Form handleSumbit={this.props.handleSumbit}>
						<Input
							handleChange={this.props.handleChange}
							value={this.props.value}
						/>
						<Button />
					</Form>
				</div>
				<div className='info__wrap'>
					<span className='info__header'>Введите "unmount", чтобы увидеть как работает componentWillUnmount</span>
					{this.props.value === 'unmount' ? null : <Info value={this.props.value} />}
				</div>
			</div>
		);
	}
}

export default MainPage;
