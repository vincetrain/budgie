import { Link } from 'react-router-dom'
import './Navbar.scss';

function Navbar() {
	return (
		<nav>
			<li>
				<Link to ='/'>Home</Link>
				<Link to ='/Goals'>Goals</Link>
				<Link to='/Expenses'>Expenses</Link>
			</li>
		</nav>
	);
}

export default Navbar;
