import React from 'react'

const Pagination = (props) => {
  const pageLinks = []
  const hiddenPageLinks = [];

  var maxLeft = (props.currentPage - Math.floor(props.window / 2))
  var maxRight = (props.currentPage + Math.floor(props.window / 2))

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

  for (let i = maxLeft; i <= maxRight + 1; i++) {
    let active = props.currentPage === i ? 'active-page' : ''
    pageLinks.push(
      <li className={`page ${active}`} key={i} onClick={() => props.nextPage(i)}>
        <a href='#!'> {i} </a>
      </li>
    )
  }

  for (let i = maxLeft; i <= maxRight + 1; i++) {
    hiddenPageLinks.push(
      <li className="page" key={i} >
        <a href='#!'> {i}  </a>
      </li>
    )
  }

  return (
    <div className='row'>
      <ul className="pagination">
        {props.currentPage !== 1 ? <li className="page" onClick={() => props.nextPage(1)}><a href="#!">{"<<"} First</a></li> : ''}
        {props.currentPage > 1 ? <li className="page" onClick={() => props.nextPage(props.currentPage - 1)}><a href="#!">{"<<"} Prev</a></li> : ''}
        {pageLinks}
        {props.currentPage < props.pages + 1 ? <li className="page" onClick={() => props.nextPage(props.currentPage + 1)}><a href="#!"> Next {">>"}</a></li> : ''}
        {props.currentPage !== props.pages ? <li className="page" onClick={() => props.nextPage(props.pages + 1)}><a href="#!">Last {">>"}</a></li> : ''}
      </ul>

      <ul className="hidden-pagination pagination">
        {props.currentPage > 1 ? <li className="page" onClick={() => props.nextPage(props.currentPage - 1)}><a href="#!">{"<<"} Prev</a></li> : ''}
        <li className="page" >
          <a href='#!'> {props.currentPage} of {props.pages + 1} </a>
        </li>
        {props.currentPage < props.pages + 1 ? <li className="page" onClick={() => props.nextPage(props.currentPage + 1)}><a href="#!"> Next {">>"}</a></li> : ''}
      </ul>
    </div>
  )
}

export default Pagination
