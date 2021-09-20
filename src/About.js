import React from 'react';
import './AboutMe.css';
import AButton from './AButton';
import me from './images/IMG_5123-square-min.jpg';
import resume from './resume/jacob-resume.pdf';

function About({ screenSize, btnName, btnLink = resume }) {
	const clipPath =
		screenSize >= 2
			? { clipPath: 'polygon(2% 0%,90% 0 , 98% 80%,  6% 100%)' }
			: {};
	const rowStyles =
		screenSize >= 1
			? {
					flexDirection: 'row',
			  }
			: { flexDirection: 'column' };
	return (
		<div id="about-me" style={clipPath}>
			<h2>About Me</h2>
			<div className="rows" style={rowStyles}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<img alt="Jacob, your next team member" src={me} />
				</div>
				<div className="text">
					<p>
						I am a recent full-stack engineering bootcamp graduate
						looking for a career change. I focus on JavaScript and
						Python frameworks such as React, Node and Flask. I enjoy
						writing functional code that is fast, clean, and easy to
						read.
					</p>
					<p>
						I am moving from a career in pharmacy to the engineering
						side. There are more opportunities for growth and all
						together is more metally engaging. I also have some
						skills with social media marketing, ad campaigns, photo
						editing, and making phone calls.
					</p>
					<p>
						Enough about the business talk. I am an easy going
						adventure seeking individual. I love to learn about new
						things and how they operate. From there I love to see if
						I can improve the process from there.
					</p>
					{btnName ? <AButton name={btnName} link={btnLink} /> : null}
				</div>
			</div>
		</div>
	);
}

export default About;
