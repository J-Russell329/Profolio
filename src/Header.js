import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header({ screenSize }) {
	const styles =
		screenSize >= 1
			? { flexDirection: 'row' }
			: { flexDirection: 'column' };
	return (
		<div id="header" style={styles}>
			<div className="col">
				<h1>
					Hi, i am <span style={{ color: 'lightGreen' }}>Jacob</span>!
				</h1>
				<p>Turning ideas into a reality</p>
				<div className="dual-icons" style={{ flex: 0 }}>
					<div className="icons">
						<a
							target="_blank"
							href="https://github.com/J-Russell329"
						>
							<i className="fab fa-github fa-3x"></i>
						</a>
					</div>
					<div className="icons">
						<a
							target="_blank"
							href="https://www.linkedin.com/in/jacob-t-russell/"
						>
							<i className="fab fa-linkedin-in fa-3x"></i>
						</a>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default Header;
