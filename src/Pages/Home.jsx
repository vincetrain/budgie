import "./Home.scss";
import bg from "../Components/Landing Page Background.png";

function Home() {
	
	return (
		<div className = "landingContainer">

			{/* <button id = "addBtn2">Get Started</button> */}
			<a href="/LoginPage">
			<div id = "addBtn2">Log in</div>
			</a>

		</div>		
	);
}

export default Home;
