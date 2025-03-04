import {FaStar} from 'react-icons/fa'
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const StarRating = ({noOfStars}) => {
   const [hover, setHover] = useState(0);
   const [finalRating, setFinalRating] = useState(0);

   function handleCurrentStar(ind) {
      setHover(ind);
   }

   function handleRating(ind) {
      setFinalRating(ind);
   }

   function handleMouseLeave() {
      setHover(finalRating);
   }

   return (
      <div className="flex gap-1 text-4xl justify-center items-center">
         {
            [...Array(noOfStars)].map((_, index) => {
               index = index + 1;
               return (
                  <div key={index}>{<FaStar
                     className={index <= (hover || finalRating) ? "text-amber-300" : "text-black"}
                     onMouseMove={() => handleCurrentStar(index)}
                     onClick={() => handleRating(index)}
                     onMouseLeave={() => handleMouseLeave(index)}
                  />}
                  </div>
               )
            })
         }

      </div>
   );
};

export default StarRating;