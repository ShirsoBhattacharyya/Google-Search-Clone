import React,{ useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';


const Search = () => {
  const [input,setInput]=useState('');
  const handleSearch=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='search'>
      {/* search input container*/}
      <div className='search-input'>
        {/* searchicon */}
        <SearchIcon className='input-searchicon'/>
        {/* input tag for search */}
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        {/* MicIcon */}
        <MicIcon/>
      </div>
      {/*search buttons */}
      <div className="search-buttons">
        <Button onClick={handleSearch} variant='outlined'>Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
      </div>
    </div>
  )
}

export default Search;
