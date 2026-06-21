import {

 useContext

} from "react";

import {

 ThemeContext

} from "../../context/ThemeContext";

function ThemeCircles() {

 const {

   setTheme

 } = useContext(

   ThemeContext
 );

 return (

  <div className="d-flex gap-3">

   <div

    onClick={() =>

      setTheme("light")
    }

    className="rounded-circle"

    style={{

      width:"20px",

      height:"20px",

      background:"#4F7DF3",

      cursor:"pointer",
    }}
   />

   <div

    onClick={() =>

      setTheme("dark")
    }

    className="rounded-circle"

    style={{

      width:"20px",

      height:"20px",

      background:"#111",

      cursor:"pointer",
    }}
   />

   <div

    onClick={() =>

      setTheme("ocean")
    }

    className="rounded-circle"

    style={{

      width:"20px",

      height:"20px",

      background:"#06b6d4",

      cursor:"pointer",
    }}
   />

  </div>

 );
}

export default ThemeCircles;