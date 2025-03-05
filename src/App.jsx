import './App.css'
import CustomScroll from "./components/CustomScroll/CustomScroll.jsx";
// import LightDarkMode from "./components/Light-Dark/LightDarkMode.jsx";
// import TreeView from "./components/TreeView/TreeView.jsx";
// import QRCodeGenerator from "./components/QRgenerator/QRCodeGenerator.jsx";
// import {dataTree} from "./components/TreeView/dataTree.js";
// import LoadMore from "./components/LoadMore/LoadMore.jsx";
// import ImageSlider from "./components/ImageSlider/ImageSlider.jsx";
// import Accordion from "./components/Accordion/Accordion.jsx";
// import RandomColor from "./components/colorChange/RandomColor.jsx";
// import StarRating from "./components/Stars/StarRating.jsx";

function App() {

   return (
      <>
         {/*<Accordion/>*/}
         {/*<RandomColor/>*/}
         {/*<StarRating noOfStars={6}/>*/}
         {/*<ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"}/>*/}
         {/*<LoadMore/>*/}
         {/*<TreeView wholeCompany={dataTree}/>*/}
         {/*<QRCodeGenerator/>*/}
         {/*<LightDarkMode/>*/}
         <CustomScroll url={'https://dummyjson.com/products?limit=100'}/>
      </>)
}

export default App
// url = picsum.photos/v2/list?page=1&limit=10 for <ImageSlider/>