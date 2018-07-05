import React from 'react';
import PictureListItem from './picture_list_item';

const PictureList = (props) => {
	const PictureItem = props.astronomy.map((picture, i) => {
		console.log(picture);
		return <PictureListItem key ={ i } picture={ picture } />
	})
	return (
		<ul className="col-md-4 list-group">
		{ PictureItem }
		</ul>
	);
};

export default PictureList