import React from 'react';

const PictureListItem = (picture) => {
		const imgUrl = picture;
	return (
		<li className="list-group-item">
		  <div className="picture-list media"> 
			<div className="media-left"> 
				<img className="media-object" src={imgUrl} />
			</div>
			</div>
		</li>
	);
};

export default PictureListItem