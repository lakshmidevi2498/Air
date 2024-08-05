import React,{useState,useEffect} from "react";
import { getFlashPageDataInitiate } from "../redux/action/flashPageAction";
import ReusableCardSwiperComponent from "./CardWithSwiperComponent";
import CircularProgress from '@mui/material/CircularProgress';
import
{ useDispatch, useSelector }
from
"react-redux"
import Imports from "../commons/AllImports";


const SwiperCards = () => {
  const [loading, setLoading] = useState(true);
    const [dataa, setDataa] = useState([]);
   

  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.flashpagedata.data || []);
   console.log("productsData", productsData);
   useEffect(() => {
       dispatch(getFlashPageDataInitiate());
       setLoading(false);
     
   }, [dispatch]);

   if (loading) {
    return (
      <Imports.Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
        <CircularProgress />
      </Imports.Grid>
    );
  }


    return (

<Imports.Grid item sx={{marginTop:{xs:"0px",sm:"20px"}}}>
        <ReusableCardSwiperComponent cardsData={productsData} /></Imports.Grid>

    );
};

export default SwiperCards;



