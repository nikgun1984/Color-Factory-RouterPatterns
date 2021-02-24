import {NavLink} from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="App-header">
			<h3>Welcome to the color factory.</h3>
			<h1>
				<NavLink exact to="/colors/new">Add a Color</NavLink>
			</h1>
		</nav>
	);
}

export default NavBar;