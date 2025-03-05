import React, {useState, useEffect} from 'react';

const CustomScroll = ({url}) => {

   const [loading, setLoading] = useState(false);
   const [data, setData] = useState([]);
   const [errorMessage, setErrorMessage] = useState('');
   const [scrollPercentage, setScrollPercentage] = useState(0);

   async function getData(getUrl) {
      try {
         setLoading(true)
         const res = await fetch(getUrl);
         const receivedData = await res.json();
         if (receivedData && receivedData?.products && receivedData?.products.length > 0) {
            setData(receivedData.products);
            setLoading(false)
         }
      } catch (e) {
         let errorMess = e.message;
         setErrorMessage(errorMess)
         setLoading(false)
      }
   }

   useEffect(() => {
      getData(url);
   }, [url])

   function handleScrollPercentage() {
      const howMuchScrolled = document.documentElement.scrollTop;
      const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      setScrollPercentage((howMuchScrolled / scrollableHeight) * 100)
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScrollPercentage)
      return () => {
         window.removeEventListener('scroll', () => {
         })
      }
   }, [])

   console.log(Math.ceil(scrollPercentage))

   if (loading) {
      return <h1>Loading ...</h1>
   }
   if (errorMessage) {
      return <h1>Error : {errorMessage}</h1>
   }

   return (<div>
         <div className="text-4xl w-full mx-auto p-6 bg-white text-slate-900 font-bold text-center fixed top-0 z-20">Custom
            Scroll
            <div className="bg-gradient-to-r from-gray-200 to-zinc-100 rounded-lg">
               <div style={{width: `${scrollPercentage}%`}}
                    className="h-1 mt-1 rounded-lg bg-gradient-to-t from-gray-200 via-slate-400 to-gray-100 transition-all"></div>
            </div>
         </div>

         <div className="flex relative items-center justify-center">
            <div className="w-[60%]">
               {data.map((curItem, index) => {
                  return (<div className="flex items-center justify-evenly text-zinc-700"
                               key={index}>
                        <h4 className="p-2">{curItem.title} : {curItem.price}</h4>
                     </div>)
               })}
            </div>
         </div>

      </div>

   );
};

export default CustomScroll;