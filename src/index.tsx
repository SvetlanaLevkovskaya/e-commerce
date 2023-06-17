import { render } from 'react-dom';
import { App } from 'app/app';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'app/store';

render(
	<HashRouter>
		<Provider store={ store }>
			<App />
		</Provider>
	</HashRouter>,

	document.getElementById('root'),
)
