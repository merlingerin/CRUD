import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes/routes';

ReactDOM.render(
    Routes, 
    document.getElementById('root')
);
registerServiceWorker();
