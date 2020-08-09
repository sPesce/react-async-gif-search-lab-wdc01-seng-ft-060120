import React from 'react'

class GifSearch extends React.Component
{
  state = {term: ""}

  formHandler = (value) =>
  {
    this.setState({term: value})
  }

  render()
  {
    return( 
        <div className="pull-right">
          <form onSubmit={(e) => this.props.submit(e,this.state.term)}>
            <div className="form-group">
              <label htmlFor="search"> <strong>Enter a Search Term:</strong> </label>
              <input  type="text" 
                      className="form-control"
                      id="search"
                      value={this.state.term}
                      onChange={e => this.formHandler(e.target.value)}
              />
              <button type="submit"
                      className="btn btn-primary" >
              Find Gifs</button>
            </div>
          </form>
        </div> 
      )
  }
}

export default GifSearch;