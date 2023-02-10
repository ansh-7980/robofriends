import React, { Component } from 'react'
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import CardList from './components/CardList';
import './App.css';

export default class App extends Component {
  
  constructor() {
    super()
    this.state={
      robots:[],
      searchField:""
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.cypress.io/users').then(response=>{
      return response.json()
    }).then(users=>{
      this.setState({robots:users})
    });



  }
 onsearchchange=(event)=>{
  this.setState({searchField: event.target.value})
 

 }
  render() {
    const filterRobots =this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      //console.log(filterRobots);
    })
    if(this.state.robots.length ===0){
      return <h1 className=' tc'>loading.....</h1>
    }
    else{
      return (
        <div className='tc'>
          <h1>Welcome to Robo Families</h1>
          <SearchBox searchChange={this.onsearchchange}/>
          <Scroll>
          <CardList robots={filterRobots} />
          </Scroll>
        </div>
      )
    }
   
  }
}

