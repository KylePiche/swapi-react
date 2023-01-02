import React from "react";

function Pagination({listOfData, listPage, isLoading, setListPage}) {
    
    
    return ( <>
    {isLoading && <><span>Loading data. Please wait</span><br/></>}
    {listOfData && (listOfData.next || listOfData.previous) ? (<>
        <span>Page {listPage} of {Math.ceil(listOfData.count /10)}</span><br/>
        <button
              disabled={!listOfData.previous || isLoading}
              onClick={() =>
                setListPage((previous) => {
                  return previous - 1;
                })
              }
            >
              Previous Page
            </button>
            <button
              disabled={!listOfData.next || isLoading}
              onClick={() =>
                setListPage((previous) => {
                  return previous + 1;
                })
              }
            >
              Next Page
            </button>
            </>) : null}
    </>);
}

export default Pagination;