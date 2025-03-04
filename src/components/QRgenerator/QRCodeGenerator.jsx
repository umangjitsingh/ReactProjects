import QRCode from "react-qr-code";
import {useState} from "react";

const QRCodeGenerator = () => {
   const [qrCode, setQrCode] = useState("");
   const [input, setInput] = useState("")

   function handleGenerateQrCode() {
      setQrCode(input);
      setInput("");
   }

   return (
      <div>
         <h1>QR Code Generator </h1>
         <div>
            <input onChange={(e) => setInput(e.target.value)}
                   type="text"
                   value={input}
                   name=""
                   placeholder="Enter your value here"/>
            <button disabled={!(input && input.trim() !== "")}
                    onClick={() => handleGenerateQrCode()}>Generate
            </button>
         </div>
         <div>
            <QRCode value={qrCode}
                    size={200}/>
         </div>
      </div>
   );
};

export default QRCodeGenerator;