
import React, { useState } from "react";
import getRandom from "./utils"
import quotes from "../quotes.json";

console.log(quotes);
const colors = [
    /*"linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    "linear-gradient(to right top, #e09bc2, #d293c7, #c08ccd, #a987d2, #8b84d7, #728ee2, #4f97ea, #00a0ee, #00b5f5, #00c9f3, #00dbeb, #22ecdf)",
    "linear-gradient(to right top, #5bbc96, #00b1ab, #00a2bf, #0090cd, #007acb, #0076c4, #0072be, #006eb7, #007bac, #33849e, #5b8a92, #7c8e8d)",
    "linear-gradient(to right top, #a7e4e7, #5ed1ed, #00baf9, #009eff, #007cff, #8d65ee, #c644ce, #ea00a3, #ff4071, #ff7d4c, #f7b044, #dada67)",
    "linear-gradient(to right top, #696dbe, #3e8acf, #21a2d1, #44b6ca, #74c8c3, #83cfc2, #92d6c1, #a2dcc1, #96dcc1, #88dbc2, #79dbc3, #67dac6)",
   "linear-gradient(to right top, #ce6ade, #7794ff, #00b0ff, #00c1eb, #00cbc4, #00c9bf, #00c7ba, #00c5b5, #00b8d6, #00a5f2, #008af7, #9162da)"*/
   "#90B1DE",
   "#60C8EF",
   "#2BDEE7",
   "#58EEC5",
   "#008E9B",
   "#C42B52"

  ];

const QuoteBox = () => {

    const [quotebox, setQuote] = useState(quotes[getRandom()]);

    const changeQuoteBox = () => {
        const random = getRandom();
        setQuote(quotes[random]);
      };
      
      const color = colors[Math.floor(Math.random() * 6)];

      document.body.style = `background: ${color}`;
      
      
    return (
        <div className="card" style={ {color:color}}>
            <i className="fa-solid fa-quote-left" ></i>{quotebox.quote}
            
            <div className="phrase-btn">
            <p>{quotebox.author}</p>
            <div> <button onClick={changeQuoteBox} style={{ background:color}} > <i className="fa-solid fa-angle-right"></i> </button> </div>

            </div>
        </div>
    );
};

export default QuoteBox;
