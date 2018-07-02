import React from 'react';

const PictureList = (props) => {
	return (
		<ul className="col-md-4 list-group">
		{props.astronomy.length}
		</ul>
	);
};

export default PictureList