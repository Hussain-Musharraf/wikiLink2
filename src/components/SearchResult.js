import React from 'react';
import './SearchResult.css';
function SearchResult ({name1,description,link,updateDescription}){
  return (
    <div className='result-box'>
      <h3 className='result-header' onClick={() => updateDescription(description)}>{name1}</h3>
      <a href={link}><div>Go to Page</div></a>
    </div>
  )
}

export default SearchResult