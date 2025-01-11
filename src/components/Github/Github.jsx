import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data=useLoaderData()
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Ashishroka45")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setdata(data);
//       });
//   }, []);
  return (
    <>
      <div className="bg-green-500 p-4 text-white text-3xl">
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300}  />
      </div>
    </>
  );
}



export default Github;

export const githubInfoLoader= async ()=>{
  const response=await   fetch('https://api.github.com/users/Ashishroka45')
  return response.json()
}
