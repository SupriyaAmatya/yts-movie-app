import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
  window.scrollTo(0, 0);
  const pageLinks = []

  var maxLeft = (props.currentPage - Math.ceil(props.window / 2))
  var maxRight = (props.currentPage + Math.ceil(props.window / 2))

  if (maxLeft < 1) {
    maxLeft = 1
    maxRight = props.window
  }

  if (maxRight > props.pages) {
    maxLeft = props.pages - (props.window - 1)

    if (maxLeft < 1) {
      maxLeft = 1
    }
    maxRight = props.pages
  }

  for (let i = maxLeft; i <= maxRight; i++) {
    let active = props.currentPage === i ? 'active-page' : ''
    pageLinks.push(
      <li className={`page ${active}`} key={i} onClick={() => props.nextPage(i)}>
        <Link to='#!'> {i} </Link>
      </li>
    )
  }

  return (
    <div className='row'>
      <ul className="pagination">
        {props.currentPage !== 1 ? 
          <li className="page" onClick={() => props.nextPage(1)}>
            <Link to="#!">{"<<"} First</Link>
          </li> : ''}
        {props.currentPage > 1 ? 
          <li className="page" onClick={() => props.nextPage(props.currentPage - 1)}>
            <Link to="#!">{"<<"} Prev</Link>
          </li> : ''}
        {pageLinks}
        {props.currentPage < props.pages ? 
          <li className="page" onClick={() => props.nextPage(props.currentPage + 1)}>
            <Link to="#!"> Next {">>"}</Link>
          </li> : ''}
        {props.currentPage !== props.pages ? 
          <li className="page" onClick={() => props.nextPage(props.pages)}>
            <Link to="#!">Last {">>"}</Link>
          </li> : ''}
      </ul>

      <ul className="hidden-pagination pagination">
        {props.currentPage > 1 ? 
          <li className="page" onClick={() => props.nextPage(props.currentPage - 1)}>
            <Link to="#!">{"<<"} Prev</Link>
          </li> : ''}
        <li className="page" >
          {props.currentPage} of {props.pages}
        </li>
        {props.currentPage < props.pages ? 
          <li className="page" onClick={() => props.nextPage(props.currentPage + 1)}>
            <Link to="#!"> Next {">>"}</Link>
          </li> : ''}
      </ul>
    </div>
  )
}

export default Pagination
