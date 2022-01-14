import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './component/card-list/card-list.component'
import {SearchBox} from './component/searchBox/search-box.component'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    const { monsters, searchField } = this.state
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1> monsters </h1>
        <SearchBox placeholder='search monster'
         handleChange={e => { this.setState({ searchField: e.target.value }) }}/>
        <CardList monsters={filterdMonsters} >
          {
            this.state.monsters.map(monster => (<h1 key={monster.id}>{monster.name}</h1>))
          }
        </CardList>

      </div>
    )
  }
}

export default App;
