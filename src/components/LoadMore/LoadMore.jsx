import {useEffect, useState} from 'react';

const LoadMore = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [products, setProducts] = useState([])
   const [count, setCount] = useState(1)
   const [error, setError] = useState(null)

   async function fetchData(getUrl) {
      try {
         setIsLoading(true)
         const response = await fetch(getUrl);
         const data = await response.json();
         if (data !== "") {
            setProducts(data.products);
            setIsLoading(false);

         }
      } catch (e) {
         setError(e.message);
         setIsLoading(false)
      }

   }

   useEffect(() => {
      fetchData(`https://dummyjson.com/products?limit=42&skip=${count * 42}`)
   }, [count])

   function handleMoreProducts() {
      setCount(count + 1);
   }

   if (isLoading) {
       return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
       <div className="text-center">
          <div className="loader border-4 border-gray-200 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700">Loading, please wait...</p>
       </div>
    </div>
   );



   }
if(error !== null){
   return(<h1>{error} : Looks something is wrong</h1>)
}
   return (
      <div className="container flex bg-sky-100 justify-evenly m-auto mt-4 items-center gap-2 flex-wrap">
         {
            products && products.length > 0 ?
               products.map((currProduct, currentIndex) => <img key={currProduct.id}
                                                                src={currProduct.thumbnail}
                                                                alt={currentIndex}
                                                                className="h-40 w-40 bg-slate-100 mb-2 shadow-md"/>
               )
               : null
         }

         <button className="px-2 text-lg bg-black text-white rounded py-2 mb-3 w-64"
                 onClick={() => handleMoreProducts()}>Load More Items
         </button>
      </div>
   );
};

export default LoadMore;