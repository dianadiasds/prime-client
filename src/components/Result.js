import React from 'react';

export default function Result(props) {

  const {pageOfItems, pager} = props;

  return (
    <section className='form-result'>
      {pageOfItems && <div>
        <ul>
          {pageOfItems.map(item =>
            <li key={item}>{item}</li>
          )}
        </ul>
        <div>
          {pager.pages && pager.pages.length &&
          <div>
            {pager.pages.map(currentPage =>
              <button
                onClick={props.onClick}
                key={currentPage}
                value={currentPage}
                className={`pagination-button ${pager.currentPage === currentPage ? 'active' : ''}`}> {currentPage}</button>
            )}
          </div>
          }
        </div>
      </div>}
    </section>)
}
