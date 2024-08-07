import React, { useEffect ,useState} from "react";  
import { getSearchPlaceInitiate } from '../redux/action/searchPlaceAction'; 
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch,useSelector } from "react-redux";
import SearchSwiperComponent from "./SearchSwiperComponent";
import SearchComponentMaps from "./SearchComponentMaps";
import Imports from "../commons/AllImports";

const SearchComponent = ({  paramData,name }) => { 
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.getsearchplacereducer.data || []);

    useEffect(() => {
      const fetchData = async () => {
          await dispatch(getSearchPlaceInitiate());
          setLoading(false); // Set loading to false after data is fetched
      };
      fetchData();
  }, [dispatch]);


    // Filter data based on paramData
    console.log("paramData in navbar",paramData)
    const filteredData = productsData.filter(item => item.status === paramData); 
    if (loading) {
        return (
          <Imports.Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <CircularProgress />
          </Imports.Grid>
        );
      }

    return (
        <>
            <Imports.Grid container justifyContent='center' xs={12} mb={5} sx={{display:{xs:"none",sm:"flex"}}}>
                <SearchSwiperComponent filteredData={filteredData}/>

                  { filteredData . length !== 0  &&
                 ( 
                <SearchComponentMaps name={name}/>
                 )                 
                 }
            </Imports.Grid>
        </>
    );
};

export default SearchComponent;
