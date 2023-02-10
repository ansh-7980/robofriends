import React, { Component } from 'react'

export default class Card extends Component {
  render() {
   const {name,email,id}= this.props;

    return (
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow'>
        <div>
            <img src={`https://robohash.org/keshavfboy${id}?200x200' alt='robots`} alt=''></img> 
            {/* {<img src={`https://via.placeholder.com/600/92c952 `} alt='robots'></img> } */}
            

      <div>
        <h2>{name}</h2>
        <p>{email} </p>
      </div>
      </div>
      </div>
    )
  }
}

