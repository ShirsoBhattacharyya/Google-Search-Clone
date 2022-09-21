import React, { useContext } from 'react';
import { Context } from '../../context/ContextProvider';
import useGoogleSearch from '../../Custom Hooks/useGoogleSearch';
import './SearchResults.css';
import response from '../../response';
import { Link } from 'react-router-dom';
import Search from '../../components/Search/Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SearchResults = () => {
  const[{inputterm},dispatch]=useContext(Context);
  //The customhook useGoogleSearch helps us receive live data from google search api.
  const {data}=useGoogleSearch(inputterm);
  //This is the mock data fetched in case my API key exhausts a daily limit of 100 search requests.
  //const data=response;
  console.log(data);
  return (
    <div className='searchResults'>
      {/* header */}
      <div className="searchResults-header">
        {/* Google logo */}
        <Link to='/'>
          <img className='header-logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="google-logo" />
        </Link>
        <div className='header-searchinput'>
          <Search showbuttons={false}/>
          <div className="searchinput-options">
            <div className="options-left">
              <div className="left-option">
                <SearchIcon/>
                <Link to='/all'>All</Link>
              </div>
              <div className="left-option">
                <DescriptionIcon/>
                <Link to='/news'>News</Link>
              </div>
              <div className="left-option">
                <ImageIcon/>
                <Link to='/images'>Images</Link>
              </div>
              <div className="left-option">
                <LocalOfferIcon/>
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className="left-option">
                <RoomIcon/>
                <Link to='/maps'>maps</Link>
              </div>
              <div className="left-option">
                <MoreVertIcon/>
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className="options-right">
              <div className="right-option">
              <Link to='/settings'>Settings</Link>
              </div>
              <div className="right-option">
              <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        inputterm && (
        <div className="searchResults-body">
          <p className='body-resultcount'>
            About {data?.searchInformation.formattedTotalResults} results (for {data?.searchInformation.formattedSearchTime} seconds) for {inputterm}
          </p>
          {
            data?.items.map(item=>(
            <div className='body-resultinfo'>
              <a href={item.link} className='resultinfo-link'>
                {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                  <img className='link-image' src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src} alt=''/>
                )}
                {item.displayLink} <KeyboardArrowDownIcon className='arrowdown'/>
              </a>
              <a href={item.link} className="resultinfo-title"><h2>{item.title}</h2></a>
              <p className='resultinfo-snippet'>{item.snippet}</p>
            </div>
            ))
          }
        </div>
        )
      }
    </div>
  )
}

export default SearchResults
