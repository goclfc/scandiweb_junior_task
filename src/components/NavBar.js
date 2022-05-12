import React from "react";

const NavBar = () => {
  const url = "http://localhost:4000/";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `{
                categories{
                    name:name
                }
                
            }`,
    }),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));

  return <div> Navbar</div>;
};
export default NavBar;
