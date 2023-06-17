import './styles/index.scss'
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widjets/navbar';


export const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<AppRouter />
		</div>
	);
};

