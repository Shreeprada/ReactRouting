import React from "react";
import {Link,useNavigate} from 'react-router-dom';
export const Navbar=()=>{
    const navi=useNavigate();
    const handleOnClick=(id)=>{
        if(id==1){
            navi("/products/1");
        }
        else if(id==2){
            navi("/products/2");
        }
    }
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            <button onClick={()=>handleOnClick(1)}>Go to product 1</button>
            <button onClick={()=>handleOnClick(2)}>Go to product 2</button>
        </div>
    );
};