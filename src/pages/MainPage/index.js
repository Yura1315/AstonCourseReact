import React from 'react';
import Form from '../../components/common/Form';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Info from '../../components/Info';
import ListComponent from '../../components/ListComponent';
import './index.css';
class MainPage extends React.Component {
	render() {
		return (
			<>
				<div className='main__wrapper'>
					<div className='form__wrapper'>
						<Form>
							<Input
								handleChange={this.props.handleChange}
								value={this.props.value}
								refInput={this.props.refInput}
							/>
							<div className='btn__wrap'>
								<Button
									handle={this.props.handleSumbit}
									isDisabled={this.props.value === 'react' ? true : false}
									title='Отправить'
								/>
								<Button
									title='фокус'
									handle={this.props.handleFocus}
								/>
							</div>
						</Form>
					</div>
					<div className='info__wrap'>
						<span className='info__header'>Введите "unmount", чтобы увидеть как работает componentWillUnmount</span>
						{this.props.value === 'unmount' ? null : <Info value={this.props.value} />}
					</div>
				</div>
				<div className='list__wrap'>
					<ListComponent />
				</div>
			</>
		);
	}
}

export default MainPage;
