import ReactDOM from 'react-dom';
import App from './App'
import Garage from './Garage';
import './index.css';


ReactDOM.render(<App model="Red" />, document.getElementById('root'));
ReactDOM.render(<Garage />, document.getElementById('branch'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
