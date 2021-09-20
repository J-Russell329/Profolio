import React from 'react';
import './Footer.css';
import resume from './resume/jacob-resume.pdf';

function Footer() {
	return (
		<div id="footer">
			<div className="dual-icons" style={{ flex: 0 }}>
				<div className="icons">
					<a target="_blank" href="https://github.com/J-Russell329">
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
				<div className="icons">
					<a target="_blank" href={resume}>
						<i class="fas fa-file fa-3x"></i>
					</a>
				</div>
			</div>
			<div>
				<a target="_blank" href="mailto:jtr.russell329@gmail.com">
					<i class="fas fa-at fa-3x"></i>
				</a>
			</div>
			<div>© 2021 - Jacob Russell</div>
		</div>
	);
}

export default Footer;
