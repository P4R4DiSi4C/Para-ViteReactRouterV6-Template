import ReactDOM from 'react-dom';
import Router from './router';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router />,
  rootElement
);
