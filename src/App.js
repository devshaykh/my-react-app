import React, {Component} from 'react';


// class App extends Component {
//     render() {
//       return (
//         <div className='App'>
//           <h1>Hello React!</h1>
//         </div>
//       )
//     }
//   }
  

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>Welcome to my first {this.props.model} React</h1>;
    }
}

export default App