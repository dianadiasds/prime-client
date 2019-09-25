import React from 'react';

export default function Result(props) {

    const {pageOfItems, pager} = props;

    return (
        <div>
            {pageOfItems && <div>
                <div className="card-body">
                    {pageOfItems.map(item =>
                        <div key={item}>{item}</div>
                    )}
                </div>
                <div>
                {pager.pages && pager.pages.length &&
                    <div>
                    {pager.pages.map(currentPage =>
                        <button onClick={props.onClick}
                                key={currentPage} value={currentPage}> {currentPage}</button>
                    )}
                    </div>
                }
                </div>
            </div>}
        </div>)
}
