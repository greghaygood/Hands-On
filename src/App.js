/**
 * GENERAL NOTES
 * @author TalkRise
 *
 * @description Main component of our application
 */


// Module imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';


// Custom imports
import logo from './logo.svg';
import './App.css';
import store from './store/configureStore';


// Component imports
import SimpleButton from './components/SimpleButton';
import SmartButton from './components/SmartButton';


class App extends Component {
  constructor(props) {
    super(props);

    this._onClick = () => {
      console.log('COUNTING');
      store.dispatch({
        type: 'COUNT',
      });
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Testing with Jest</h2>
          </div>
          <h3>We've set up a few components for you in the /components directory. Let's play!</h3>
          <br /><br />
          <SimpleButton
            disabled={false}
            onClick={alert}
            title="Simple Title"
          />
          <br /><br />
          <SmartButton onClick={this._onClick} />
        </div>
      </Provider>
    );
  }
}

export default App;
