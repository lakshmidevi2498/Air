import REACT ,{useState}from 'react'; 
import TabsComponent from '../components/TabsComponent' 
import SwiperCards from '../components/Cards';
import PastComponent from '../components/PastComponent';
import FooterComponent from '../components/FooterComponent';
import BottonNavigation from '../components/BottonNavigation';
import SearchInMobile from '../components/SearchInMobile';
import UpdatedNav from "../components/UpdatedNav"


const FlashPage = () => {
    const [selectedItem, setSelectedItem] = useState(false);

   
    return (
        <>
         {!selectedItem ? (
                <>
                <UpdatedNav setSelectedItem={setSelectedItem}/>
                <TabsComponent />
                <SwiperCards />
                <PastComponent/>
                <FooterComponent/>
                <BottonNavigation/>
                </>
         ) :(
            <>
            <SearchInMobile setSelectedItem={setSelectedItem}/>
            </>
         )}
           
          
        </>
    )
}
export default FlashPage;