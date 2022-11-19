import React, { useState } from 'react'
import './App.css';
import SearchResult from './components/SearchResult';

function App(){
  const [search,setSearch]=useState('');
  const [names,setNames]=useState([]);
  const [descriptions,setDescriptions]=useState([]);
  const [links,setLinks]=useState([]);
  const [currentDescription,setCurrentDescription]=useState('');

  async function makeSearch (){
   // console.log(search)
   // const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+search +"&format=json&origin=*";
    //or
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&format=json&origin=*`;//ES6
      const response = await fetch(url);

      const jsonResponse = await response.json();
      //console.log(JSON.stringify(jsonResponse,null,3))
      
      setNames(jsonResponse[1]);
      setDescriptions(jsonResponse[2]);
      setLinks(jsonResponse[3]);
  }
  return (
    <div className='box-wrapper'>
      <div className='box'>
        <h3>React wiki pedia</h3>
        <div>{currentDescription}</div>
        <input value={search} onChange={e =>setSearch(e.target.value)}/>
        <button onClick={makeSearch}>Search</button>
        {names.map((value,i)=> <SearchResult name1={value} description={descriptions[i]} link={links[i]} updateDescription={setCurrentDescription} key={i}/>)}
      </div>
    </div>
  )
}

export default App