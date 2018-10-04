import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundComp = () => (

		<div>
			<h1>404</h1>
			<h3>
				You're lost!. Please Go <Link to="/">Home</Link>
			</h3>
		</div>

); // NotFoundComp

export default NotFoundComp;