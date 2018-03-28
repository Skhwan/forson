import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PromoList from './PromoList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
const promoList = ["Promotion I", "Promotion II", "Promotion III"];
ReactDOM.render(<PromoList promoList={promoList}/>, document.getElementById('content'));
registerServiceWorker();
