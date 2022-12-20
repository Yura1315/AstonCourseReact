import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

class PageWrapper extends React.Component {
	render() {
		return (
			<div className='layout'>
				<Header />
				<div className='content'>
					<div>{this.props.children}</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default PageWrapper;
