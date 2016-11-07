import ReactDOM from 'react-dom';

import router from './containers/routes';

const mountNode = document.getElementById('app');
// First render to match markup from server
ReactDOM.render(router, mountNode);
