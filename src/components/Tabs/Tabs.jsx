import React, {useState} from 'react';

const Tabs = ({tabsContent}) => {
   const [currentTabIndex, setCurrentTabIndex] = useState(null);

   function handleOnClick(getIndex) {
      setCurrentTabIndex(getIndex)
   }

   return (
      <div className="container">

         <div className="flex gap-12 ">
            {
               tabsContent.map((tabItem, index) => {
                  return (
                     <div onClick={() => handleOnClick(index)}
                          key={tabItem.label}>
                        {(currentTabIndex === index ?
                           <span className="bg-blue-400 border-2 text-md p-2 rounded ">{tabItem.label}</span> :
                           <span className="bg-neutral-300 border-2 text-md p-2 rounded ">{tabItem.label}</span>)}

                     </div>
                  )
               })
            }
         </div>
         <div className="pt-16 ">
            {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
         </div>

      </div>
   );
};

export default Tabs;