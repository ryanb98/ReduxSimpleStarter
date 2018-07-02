import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';
import PictureList from './components/picture_list';

class App extends Component {

	constructor(props){
		super(props)

		this.state = { astronomy: []}
	

	axios.get('https://images-api.nasa.gov/search?q=apollo11&media_type=image')
	.then(responce => {
		this.setState({
			astronomy: responce.data.collection.items[0].links[0].href
		})

		
		responce.data.collection.items[0].links.map(function(imgs){
				console.log(imgs.href);
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