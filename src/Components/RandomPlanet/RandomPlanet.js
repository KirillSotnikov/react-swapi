import React, { Component } from 'react';

import Spinner from '../Spinner';
import SwapiService from '../../Services/SwapiService';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiSercice = new SwapiService()

  state = {
    planet: {},
    loading: true
  }

  constructor () {
    super()
    this.updatePlanet()
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  updatePlanet () {
    const id = Math.floor(Math.random()*15) + 2
    this.swapiSercice
      .getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {
    const {planet, loading } = this.state

    const spiner     = loading ? <Spinner /> : null
    const planetView = !loading ? <PlanetView planet={planet} /> : null

    return (
      <div className="random-planet jumbotron rounded">

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