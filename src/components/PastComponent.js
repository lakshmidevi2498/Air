import REACT ,{useState , useEffect}from 'react'
import ReusableCardSwiperComponent from './CardWithSwiperComponent'
import Imports from '../commons/AllImports'
import CircularProgress from '@mui/material/CircularProgress';
import { pastImagesDataInitiate } from '../redux/action/pastAction';
import { useDispatch, useSelector } from "react-redux";

 const PastComponent = () =>{
   const [loading, setLoading] = useState(true);
   const [dataa, setDataa] = useState([]);
   const dispatch = useDispatch();
   const productsData = useSelector((state) => state.pastimagesdata.data || []);
    console.log("productsData", productsData);
    useEffect(() => {
        dispatch(pastImagesDataInitiate());
            setLoading(false);
      
    }, [dispatch]);

    if (loading) {
      return (
        <Imports.Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
          <CircularProgress />
        </Imports.Grid>
      );
    }
      
   
    return(
        <>
        <Imports.Grid container justifyContent='center'  >
            <Imports.Grid item xs={11}>
                <Imports.Grid  alignItems='start'my={2}>
                <Imports.Typography variant="past" color="initial" >Past experience</Imports.Typography>
                </Imports.Grid>
            </Imports.Grid>
           
            <ReusableCardSwiperComponent cardsData={productsData} />
        </Imports.Grid>
        
        </>
    )
 }
export default PastComponent;