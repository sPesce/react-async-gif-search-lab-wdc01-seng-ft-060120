import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component
{
  state = {gifURLs: []}

  updateURLs = (gifJson) =>
  {
    const imgs = gifJson.data.slice(0,3).map(img => img.images.original.url)
    this.setState( { gifURLs: imgs } )
  }

  searchSubmitHandler = (e,searchTerm) =>
  {
    e.preventDefault();
    fetch(fetchURL(searchTerm))
    .then(r => r.json())
    .then(json => this.updateURLs(json))
  }

  render()
  {
    return (
      <div className="container">
        <div className="row">
          <GifList gifURLS={this.state.gifURLs}/>
          <GifSearch submit={this.searchSubmitHandler}/>
        </div>
      </div>
    )
  }
}

const fetchURL = (searchTerm) =>
{
  return (
    'https://api.giphy.com/v1/gifs/search?q='
    + searchTerm + "&api_key=dc6zaTOxFJmzC&rating=g"
  )
}

export default GifListContainer;