import { useState, useEffect } from 'react';
import About from './About';
import './App.css';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import '@fortawesome/fontawesome-free';

function App() {
	const [screenSize, setScreenSize] = useState(
		window.innerWidth > 670 ? 1 : 0
	);

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);
	const updateDimensions = () => {
		if (window.innerWidth < 900) setScreenSize(0);
		else if (window.innerWidth >= 900 && window.innerWidth < 1300)
			setScreenSize(1);
		else setScreenSize(2);
	};

	return (
		<div className="App">
			<Header screenSize={screenSize} />
			<main>
				<About screenSize={screenSize} btnName="Resume" />
				<Card
					screenSize={screenSize}
					p1="A personal project of mine designed to help readers find books based on their preferences rather than the popularity of books. This is still a work in progress that I would love to grow into a full time job at some point. "
					p2="API:(Python, Flask, Ajax, SQLAlchemy)
          "
					p3="
          Front End: (JS, Node.js, React, Ajax)"
					header="Bring To Light Books"
					altText="Bring To Light Books Logo"
					btn1
					btn1Name="Live"
					btn1Link="https://find-my-book-list.herokuapp.com/"
				/>
				<Card
					screenSize={screenSize}
					p1="A social media app using twitter as its guide. This simplified twitter clone can create users, update profiles, create, delete, and edit messages.
        "
					p2="Python, Flask, Ajax, SQLAlchemy, HTML5, CSS"
					header="Warbler"
					altText="twiter clone warbler project"
					btn1
					btn1Name="Live"
					btn2
					btn2Name="Git Back"
					btn3
					btn3Name="Git Front"
				/>
				<Card
					screenSize={screenSize}
					p1="Find, post, and apply for jobs via Jobly. This easy to use service will help you find your next position. Loseley based on services like linkedin and Glassdoor."
					p2="JS, Node.js, SQL, Ajax"
					header="Jobly"
					altText="job finder app"
					btn1
					btn1Name="Live"
					btn1Link="https://jacob-russell-jobly.netlify.app/"
					btn2
					btn2Name="Git Back"
					btn2Link="https://github.com/J-Russell329/experimental_JS/tree/master/express-jobly"
					btn3
					btn3Name="Git Front"
					btn3Link="https://github.com/J-Russell329/jobly-329"
				/>
				<div class="card">
					<h2>Contact Info Can Be Found in my resume</h2>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
