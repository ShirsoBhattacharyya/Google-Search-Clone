import {useState,useEffect} from 'react';
import { API_KEY, search_engine_id } from '../keys/keys';


const useGoogleSearch = (inputterm) => {
  const [data,setData]=useState(null);
  useEffect(()=>{
    //queryparameters:-'key' for api key,'cx' for programmable search engine id and 'q' for search query typed in the input.
    const fetchData=async()=>{
      let response=await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${search_engine_id}&q=${inputterm}`);
      let result=await response.json();
      setData(result)
    }
    fetchData();
  },[inputterm])
  return {data}
}

export default useGoogleSearch
