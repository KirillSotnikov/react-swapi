import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../Services/SwapiService';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiSercice = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false
  }

  // constructor () {
  //   super()
  //   this.updatePlanet()
  // }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }
  componentDidMount() {
    this.updatePlanet()
    // setInterval(this.updatePlanet, 2500)
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }
  

  updatePlanet = () => {
    // console.log('Update');
    
    // const id = 1222
    const id = Math.floor(Math.random()*15) + 2
    this.swapiSercice
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const {planet, loading, error } = this.state

    const hasData = !(loading || error)

    const errorMessage = error ? <ErrorIndicator /> : null
    const spiner     = loading ? <Spinner /> : null
    const planetView = hasData ? <PlanetView planet={planet} /> : null

    return (
      <div className="random-planet jumbotron rounded">

        {errorMessage}

        {spiner}

        {planetView}

      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const {id, name, population, rotationPeriod, diameter} = planet

  return (
    <>
      <img className="planet-image"
        alt="Random planet"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}