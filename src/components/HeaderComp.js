import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<nav>
		<h1>Xpnsƒy</h1>
		<ul>
			<li>
				<NavLink to="/" activeClassName="is-active" exact={true}>
					Dashboard
				</NavLink>
			</li>
			<li>
				<NavLink to="/home" activeClassName="is-active">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/create" activeClassName="is-active">
					Add Expense
				</NavLink>
			</li>
			<li>
				<NavLink to="/help" activeClassName="is-active">
					Help
				</NavLink>
			</li>
			<li>
				<NavLink to="/portfolio" activeClassName="is-active">
					Portfolio
				</NavLink>
			</li>
			<li>
				<NavLink to="/contact" activeClassName="is-active">
					Contact
				</NavLink>
			</li>
		</ul>
	</nav>
);


export default Header;