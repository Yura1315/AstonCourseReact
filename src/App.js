import React from 'react';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';

class App extends React.Component {
	render() {
		return (
			<PageWrapper>
				<MainContainer />
			</PageWrapper>
		);
	}
}

export default App;
