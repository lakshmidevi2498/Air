import React, { useState, useEffect } from "react";
import { getFlashPageDataInitiate } from "../redux/action/flashPageAction";
import ReusableCardSwiperComponent from "./CardWithSwiperComponent";
// import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import Imports from "../commons/AllImports";

const SwiperCards = () => {
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.flashpagedata.data || []);
  
  useEffect(() => {
    dispatch(getFlashPageDataInitiate());
  }, [dispatch]);

  // useEffect(() => {
  //   if (productsData.length > 0) {
  //     setLoading(false);
  //   }
  // }, [productsData]);

  // if (loading) {
  //   return (
  //     <Imports.Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
  //       <CircularProgress />
  //     </Imports.Grid>
  //   );
  // }

  return (
    <Imports.Grid item sx={{ marginTop: { xs: "0px", sm: "20px" } }}>
      <ReusableCardSwiperComponent cardsData={productsData} />
    </Imports.Grid>
  );
};

export default SwiperCards;
