import React, {useEffect, useState} from 'react';
import log from "eslint-plugin-react/lib/util/log.js";

const UseLocalStorage = (key,defaultValue) => {
   const [value,setValue]=useState(()=>{
      let currentValue;

      try{
         currentValue=JSON.parse(localStorage.getItem(key) || defaultValue)
      }catch(e){
         console.log(e);
         currentValue=defaultValue;
      }
      return currentValue
   })
   useEffect(()=>{
      localStorage.setItem(key, JSON.stringify(value))
   },[key,value])

   console.log(key,value)
   return [value,setValue]
};

export default UseLocalStorage;
