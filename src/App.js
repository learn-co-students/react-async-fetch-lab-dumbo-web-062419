// create your App component here
import React from 'react';

export default class App extends React.Component {

  state = {
    astros: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(astroData => {
      this.setState({
        astros: astroData.people
      })
    })
  }

  render(){
    return(
      <div>{this.state.astros.map(astro => astro.name)}</div>
    )
  }

}
