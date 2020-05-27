import React from 'react'

const SearchBox = (props) => {

  return (
    <div className="main-search">
      <div className="search-overlay"></div>
      <div className="container">
        <form className="search-form" onSubmit={props.handleSubmit}>
          <div className="search-field">
            <p>Search Movies:</p>
            <input type="text" onChange={props.handleInput} name="search" />
          </div>
          <div className="search-btn">
            <input type="submit" value="Search" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBox
