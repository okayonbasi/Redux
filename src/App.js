import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {updateUser} from './actions/users-actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  
  onUpdateUser() {
    this.props.onUpdateUser('Onur');
  }
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
        {this.props.user}
        </p>
        <button onClick={this.onUpdateUser}>Change the name</button>
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
    return {
      ...state,
      mycount: props.count + 2
    }
}

const mapDispatchToProps = {
  onUpdateUser: updateUser
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState);
  console.log(propsFromDispatch);
  console.log(ownProps);
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);