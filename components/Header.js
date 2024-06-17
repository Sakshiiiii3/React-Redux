import React from "react";
function Header(props){
   return(
    <div>
        <button>Cart</button>
        <span>{props.data.length}</span>
    </div>
   )
}
export default Header