import {useEffect, useState} from "react";
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from "react-icons/bs";
import {FaCircle} from "react-icons/fa";

const ImageSlider = ({
                        url,
                        limit
                     }) => {
   const [images, setImages] = useState([]);
   const [currentSlider, setCurrentSlider] = useState(0);
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false)

   async function fetchImages(getUrl) {
      try {
         setIsLoading(true)
         const response = await fetch(`${getUrl}?page=11&limit=${limit}`);
         const data = await response.json();
         console.log(data);
         if (data) {
            setImages(data);
            setIsLoading(false)
         }

      } catch (e) {
         setError(e.message);
         setIsLoading(false)
      }
   }

   function handlePrev() {
      setCurrentSlider(currentSlider === 0 ? images.length - 1 : currentSlider - 1)
   }

   function handleNext() {
      setCurrentSlider(currentSlider === images.length - 1 ? 0 : currentSlider + 1)
   }

   useEffect(() => {
      if (url !== "") {
         fetchImages(url)
      }
   }, [url]);

   if (error) {
      return <h1>{error}</h1>
   }
   if (isLoading) {
      return <h1>Data is loading . Please w8.</h1>
   }

   return (
      <div className=" bg-zinc-200 w-vw h-screen flex items-center justify-around relative">
         <div className="text-slate-100 z-20 text-4xl font-extrabold ">
            <BsArrowLeftCircleFill
               onClick={() => handlePrev()}
               className="bg-zinc-400 rounded-full drop-shadow-2xl hover:scale-110"/></div>
         {
            images.map((currItem, ind) => <img
               className={currentSlider === ind ? 'absolute w-1/2 h-2/3 top-1/2 left-1/2 z-0 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md' :
                  'hidden'}

               key={ind} src={currItem.download_url} alt={currItem.url}/>)
         }
         <div className="text-white  z-20 text-4xl font-extrabold  ">
            <BsArrowRightCircleFill
               onClick={() => handleNext()}
               className="bg-zinc-400 rounded-full drop-shadow-lg hover:scale-110"/></div>
         <div className="absolute top-[76%]">
            {
               images && images.length ?
                  images.map((_, index) => <button

                     // className=
                     key={index}
                  ><FaCircle onClick={()=>setCurrentSlider(index)} className={currentSlider === index ? "text-white scale:110 text-lg p-1" : "text-gray-950 text-lg p-1"}/></button>) : null
            }
         </div>


      </div>
   );
};

export default ImageSlider;