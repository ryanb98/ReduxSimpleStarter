import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';

class App extends Component {

	constructor(props){
		super()

		this.state = {
			astronomy: [],
		}
	}

	componentDidMount() {

	axios.get('https://images-api.nasa.gov/search?q=apollo%2011')
	.then(responce => {
		this.setState({
			astronomy: responce.data
		})
		console.log(responce.data.collection);
	})
	.catch(error => {
		console.log(error, 'Failed to get data');
	})

}

	render() {
		const { astronomy } = this.state
		return (
		<div>
			<SearchBar />
		</div>
		)
 	}
}

ReactDOM.render(<App />, document.querySelector('.container'));