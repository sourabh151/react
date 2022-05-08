import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          return new Error("failed to fetch data");
        }
      })
      .then((user) => {
        // console.log('fetched hehe')
        setIsLoading(false);
        setUser(user);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
        console.log("error");
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error</h2>;
  }
  return (
    <div className="list">
      <img src={user.avatar_url} alt="profile" />
      <div>
        <h4>{user.login}</h4>
        <a href={user.html_url}>Person</a>
      </div>
    </div>
  );
};

export default MultipleReturns;

// useEffect(()=>{
//   let ans = Math.random()>=0.5?true:false;
//   console.log(ans);
//   setLoading(ans);
// },[])
