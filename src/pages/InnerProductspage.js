import REACT ,{useState}from 'react';
import { InnerComponenetOne } from '../components/InnerComponenetOne'; 
import RatingComponent from '../components/RatingComponent';
import ReviewsComponent from '../components/ReviewsComponent';
import MapComponent from '../components/MapComponent';
import MeetHostComponent from '../components/MeetHostComponent';
import ThingsComponent from '../components/ThingsComponent';
import FooterComponent from '../components/FooterComponent';
import InnerNavbar from '../components/InnerNavbar';
import { useLocation } from 'react-router-dom'; 

const InnerProductsPage = () => { 
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
        
       
       <>
         <InnerNavbar 
            name={name} 
            start={start} 
            end={end} 
            ghost={ghost}
            />
       
        <InnerComponenetOne 
        />
        <RatingComponent/>
        <ReviewsComponent/>
        <MapComponent/>
        <MeetHostComponent/>
        <ThingsComponent/>
        <FooterComponent/>
       </>
      

          
      
        </>
    )
}
export default InnerProductsPage;