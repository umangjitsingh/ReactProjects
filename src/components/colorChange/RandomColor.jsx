import {useState} from "react";
const RandomColor = () => {
   const [typeOfColor, setTypeOfColor] = useState('hex');
   const [color, setColor] = useState('#802000')

   function handleCreateHexColor() {
      let colorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      let hexColor = '#';
      for (let i = 0; i < 6; i++) {
         hexColor += colorArr[Math.floor(Math.random() * 15)];
      }
      setColor(hexColor)
   }
   
   function handleCreateRgbColor(){
      let R=Math.floor(Math.random()*255);
      let G=Math.floor(Math.random()*255);
      let B=Math.floor(Math.random()*255);
      console.log(R+" "+G+" "+ B)
     setColor(`rgb(${R},${G},${B})`)

   }
   

   return (
      <div style={{background: color}} className="w-screen h-screen flex flex-col p-3 gap-3 justify-center items-center text-white">
         <button  className="text-white bg-black p-3 w-56 rounded  hover:bg-zinc-700 " onClick={() => setTypeOfColor('hex')}>Create HEX Color </button>
         <button className="text-white bg-black p-3 w-56 rounded hover:bg-zinc-700" onClick={() => setTypeOfColor('RGB')}>Create RGB Color</button>
         <button className="text-white bg-black p-3 w-56 rounded hover:bg-zinc-700" onClick={typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRgbColor}>Generate Random Color
         </button>
         <h1 className="text-3xl">
            {color}
         </h1>
      </div>
   );
};

export default RandomColor;