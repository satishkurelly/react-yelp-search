import React, { Component }  from 'react';
import { render } from 'react-dom';

import logo from '../../assets/images/logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';

import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../service/Yelp.service.js';

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      businesses: [],
      selectedBusinessId: '',
      reviews:[]
    };

    this.searchBusinessOnYelp = this.searchBusinessOnYelp.bind(this);
  }

  searchBusinessOnYelp(term, location, sortBy) {
    Yelp.searchBusinessOnYelp(term, location, sortBy)
    .then( (businesses) => {
      this.setState({ businesses: businesses })
    })
  }

  

  render() {
    return (
      <div className="App">
         <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <SearchBar searchBusinessOnYelp={this.searchBusinessOnYelp}/>
        </header>
        <div className="App-body">
        <BusinessList businesses={this.state.businesses} />

        </div>
      </div>
    
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
