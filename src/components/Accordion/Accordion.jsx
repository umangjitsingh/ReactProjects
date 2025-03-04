import {data} from "./data.js";
import {useState} from "react";

const Accordion = () => {

   const [selected, setSelected] = useState(null);
   const [enableMulti, setEnableMulti] = useState(false);
   const [multiple, setMultiple] = useState([])

   function handleSingle(id) {
      setSelected(id === selected ? null : id)
   }

   function handleMultipleSelected(id) {
      const copyMultiple = [...multiple];

      const findIndexOfCurrentId = copyMultiple.indexOf(id);
      if (findIndexOfCurrentId === -1) copyMultiple.push(id)
      else copyMultiple.splice(findIndexOfCurrentId, 1)
      setMultiple(copyMultiple)
   }

   function handleMultipleButtonEnable() {
      setEnableMulti(!enableMulti)
   }

   return (
      <div className="cointainer w-auto px-8 max-h-screen mx-auto">
         <div className="text-center p-1">
            <button onClick={() => handleMultipleButtonEnable()}
                    className="text-white bg-black rounded px-2 py-3 m-2 hover:bg-zinc-900 active:text-orange-600 ">Enable
               MultiSelection
            </button>
            {
               data.map((curItem) => {
                  return (
                     <div key={curItem.id}
                          onClick={enableMulti === true ? () => handleMultipleSelected(curItem.id) : () => handleSingle(curItem.id)}
                          className="bg-zinc-300 border-2 my-2  rounded-lg">
                        <div className="text-md">{curItem.question}</div>
                        <span>+</span>
                        {
                           selected === curItem.id || multiple.indexOf(curItem.id) !== -1  ? <h2 className="text-sm">{curItem.answer}</h2> : null
                        }

                     </div>)
               })
            }
         </div>

      </div>
   );
};

export default Accordion;