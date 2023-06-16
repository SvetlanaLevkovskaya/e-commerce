import { render } from 'react-dom';
import { App } from 'app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'app/store';

render(
	<BrowserRouter>
		<Provider store={ store }>
			<App />
		</Provider>
	</BrowserRouter>,

	document.getElementById('root'),
)
