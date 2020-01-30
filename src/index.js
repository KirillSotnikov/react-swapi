
class SwapiService {

  _API_BASE = 'https://swapi.co/api/'

  async getResource (url) {
    const res = await fetch(`${this._API_BASE}${url}`)
  
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
  
    return await res.json()
  }

  async getAllPeople () {
    const res = await this.getResource(`people/`)
    return res.results
  }

  async getPerson (id) {
    return this.getResource(`people/${id}/`)
  }

  async getAllPlanets () {
    const res = await this.getResource(`planets/`)
    return res.results
  }

  async getPlanet(id) {
    return this.getResource(`planets/${id}/`)
  }

  async getAllStarships () {
    const res = await this.getResource(`starships/`)
    return res.results
  }

  async getStarship(id) {
    return this.getResource(`starships/${id}/`)
  }
}


// const swapi = new SwapiService()

// swapi.getPerson(3).then((people) => console.log(people))