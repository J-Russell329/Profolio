import React from 'react';
import './AButton.css';

function AButton({ link = '#', name = 'Name?' }) {
	return (
		<a href={link} rel="noreferrer" target="_blank">
			<button type="submit">{name}</button>
		</a>
	);
}

export default AButton;
