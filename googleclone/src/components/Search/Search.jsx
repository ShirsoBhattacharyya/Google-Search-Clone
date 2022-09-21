import React,{ useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/ContextProvider';
import { search } from '../../context/reducer/actions';

const Search = ({showbuttons=true}) => {
  const [input,setInput]=useState('');
  const navigate=useNavigate();
  const [state,dispatch]=useContext(Context);
  const handleSearch=(e)=>{
    e.preventDefault();
    navigate('/search');
    console.log(input);
    dispatch(search(input));
  }
  return (
    <form className='search'>
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
      {
        showbuttons?(
        <div className="search-buttons">
          {/* Button for search which has a type set to submit which ensures that even if we hit the enter button, we get to redirect(without refresh ofcourse as I'm preventing the event from exhibiting its default behaviour) to the search results page. */}
          <Button type='submit' onClick={handleSearch} variant='outlined'>Google Search</Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
        ):(
          <div className="search-buttons">
            {/* Button for search which has a type set to submit which ensures that even if we hit the enter button, we get to redirect(without refresh ofcourse as I'm preventing the event from exhibiting its default behaviour) to the search results page. */}
            <Button className='buttons-hidden' type='submit' onClick={handleSearch} variant='outlined'>Google Search</Button>
            <Button className='buttons-hidden' variant='outlined'>I'm Feeling Lucky</Button>
          </div>
        )
      }
    </form>
  )
}

export default Search;
