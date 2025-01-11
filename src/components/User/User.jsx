import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} =useParams()
    return(
        <>
        <div className="bg-green-500 p-4 text-white text-3xl"  >User:{userid}</div>
        </>
    )
}
export default User;