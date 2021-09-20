import React from 'react';
import './Cards.css';
import AButton from './AButton.js';

function Card({
	screenSize,
	altText = 'alt text goes here',
	p1 = '',
	p2 = '',
	p3 = '',
	header = 'header goes here',
	imgSrc = '',
	btn1 = null,
	btn1Name = '',
	btn1Link = '',
	btn2 = null,
	btn2Name = '',
	btn2Link = '',
	btn3 = null,
	btn3Name = '',
	btn3Link = '',
}) {
	const cardStyles =
		screenSize >= 1
			? {
					marginRight: '10rem',
					marginLeft: '10rem',
			  }
			: {};
	const flexStyles =
		screenSize >= 1
			? { flexDirection: 'row' }
			: { flexDirection: 'column-reverse' };
	return (
		<div className="cards" style={cardStyles}>
			<h2>{header}</h2>
			<div className="rows" style={flexStyles}>
				<div className="text">
					<p>{p1}</p>
					<p>{p2}</p>
					<p>{p3}</p>
					<div className="btns">
						{btn1 ? (
							<AButton link={btn1Link} name={btn1Name} />
						) : null}
						{btn2 ? (
							<AButton link={btn2Link} name={btn2Name} />
						) : null}
						{btn3 ? (
							<AButton link={btn3Link} name={btn3Name} />
						) : null}
					</div>
				</div>
				<div style={{ alignItems: 'end' }}>
					<img alt={altText} src={imgSrc} />
				</div>
			</div>
		</div>
	);
}

export default Card;
