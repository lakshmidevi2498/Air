import REACT from 'react';

import ProductsTab from '../components/ProductsTab';
import  ProductSwiper  from '../components/ProductSwiper';
import FooterComponent from '../components/FooterComponent';
import ProductNavbar from '../components/ProductNavbar';
import ProducNavbar1 from '../components/ProducNavbar1';


const ProductsPage = () => {
    return(
        <>
        
         
         <ProducNavbar1/>
         <ProductNavbar/>
       <ProductsTab/>
       <ProductSwiper/>
       <FooterComponent/>
        </>
    )
}
export default ProductsPage;