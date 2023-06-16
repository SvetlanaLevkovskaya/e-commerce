import { Link } from 'react-router-dom'
import './styles/index.scss'
import { AppRouter } from 'app/providers/router';


export const App = () => {
	return (
		<div className="app">

			<Link to={ '/' }>Main Page</Link>
			<Link to={ '/cart' }>Cart Page</Link>
			<Link to={ '/order' }>Order Page</Link>

			<AppRouter/>


		</div>
	);
};

