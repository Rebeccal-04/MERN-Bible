import React from "react";
import GenesisPDF from'./Genesis';
import { Link } from 'react-router-dom';
function OldTestament(){
return(
<div>
<button style={{height:'500px',width:'250px',backgroungColr:"green"}}>
<a href={GenesisPDF} target="_blank" rel="noreferrer" style={{color:'white',fontFamily:'chiller',
fontSize:'35px',fontWeight:'bold'}}>
&#128516;open it &#128516;
</a>
</button>
</div>
);
}
export default OldTestament

