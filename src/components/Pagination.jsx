import React from "react";

const Pagination = ({productsPerPage, currentPage, setCurrentPage, totalProducts}) => {
  const pageNumber = [];

  for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
    pageNumber.push(i)
  }

  const onSpecificPage = (n) =>{
setCurrentPage(n)
  }

  return (
    <nav
      className="pagination is-centered mb-6"
      role="navigation"
      aria-label="pagination"
    >
      <button className={`pagination-previous ${currentPage === 1 ? `is-disabled` : ""}`} onClick={()=>setCurrentPage(currentPage - 1)}>Previous</button>
      <button className={`pagination-next ${currentPage >= pageNumber.length ? `is-disabled` : ""}`} onClick={()=>setCurrentPage(currentPage + 1)}>Next page</button>
      <ul className="pagination-list">
     {pageNumber.map(numberPage => (
         <li key={numberPage}>
         <a className={`pagination-link ${numberPage === currentPage ? `is-current` : null}`} onClick={()=>onSpecificPage(numberPage)}>
           {numberPage}
         </a>
       </li>
     ))}
    
       
      </ul>
    </nav>
  );
};

export default Pagination;
