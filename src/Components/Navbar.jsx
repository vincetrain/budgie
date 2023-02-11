import { Link } from 'react-router-dom'
import './Navbar.scss';
import logo from '../Components/BudgieLogoWhite.png';

function Navbar() {
	return (
		<nav>
			<li>
				<a href="/Home">
				<img id = "logos" src={logo} alt="Budgie Pig Buddy" />
				</a>
				
				<Link to ='/'>Home</Link>
				<Link to ='/Goals'>Goals</Link>
				<Link to='/Expenses'>Expenses</Link>
				<Link to='/Login'>Login</Link>
			</li>
		</nav>
	);
}

export default Navbar;
