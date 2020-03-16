import React from 'react';
import './App.scss';

const Title = () => {
	return (
		<div className="title">
			Site 2
		</div>
	);
};

const Content = () => {
	return (
		<div className="content">
			<div>
				<div>Test of react app hosted on github</div>
				<a href="https://github.com/jkristia/site1-demo">https://github.com/jkristia/site2-demo</a>
			</div>
		</div>
	)
}

const App = () => {
	return (
		<div className="main">
			<Title></Title>
			<Content></Content>
		</div>
	);
}

export default App;
