import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';
import PictureList from './components/picture_list';

class App extends Component {

	constructor(props){
		super(props);

		this.state = { astronomy: []}
	

	axios.get('https://images-api.nasa.gov/search?q=apollo11&media_type=image')
	.then(response => {
		this.setState({
			astronomy: response.data.collection.items[0].links[0].href
		});

		
		response.data.collection.items.map(function(imgs){
				console.log(imgs.links[0].href);
			})
		})


	.catch(error => {
		console.log(error, 'Failed to get data');
	});
}
	render() {
		return (
		<div>
			<SearchBar />
			<PictureList astronomy={this.state.astronomy} />
		</div>
		);
 	}
}
ReactDOM.render(<App />, document.querySelector('.container'));