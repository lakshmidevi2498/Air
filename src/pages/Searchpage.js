import REACT from 'react'; 
import { useLocation } from 'react-router-dom';
import SearchComponent from '../components/SearchComponent'; 
import SearchPageTabsComponent from '../components/SearchPageTabsComponent';
import FooterComponent from '../components/FooterComponent'
import SearchComponentInSm from '../components/SearchComponentInSm';
import UpdatedNav from "../components/UpdatedNav"

const SearchPage = () => {

    let receivedData = [];
    const location = useLocation();
    console.log("location", location);
  const queryParams = new URLSearchParams(location.search);
  console.log("queryParams",queryParams)
  

  const paramData = queryParams.get('paramData');
  console.log("paramData----->", paramData);
 
  if (paramData) {
    receivedData = paramData.split('_');
  }
  console.log("receivedData", receivedData);
  const name = receivedData[0] 
  const start = receivedData[1];
  const end = receivedData[2];
  const ghost = receivedData[3];
  console.log("name--->",name)
    return(
        <>
        
        {receivedData.length === 4 && (
            <UpdatedNav 
            name={name} 
            start={start} 
            end={end} 
            ghost={ghost}
            />
          )}
      <SearchPageTabsComponent/>
      <SearchComponent paramData={paramData} name={name}/>
      <SearchComponentInSm paramData={paramData} name={name}/>
      <FooterComponent/>
        </>
    )
}
export default SearchPage;