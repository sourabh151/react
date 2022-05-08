import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  //useState
  const [users, setUsers] = useState([]);
  //fetch users await
  const fetchUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // console.log(users);
    setUsers(users);
  };
  //we can't pass async function to useEffect as they return promise
  //and so react won't have access to cleanup
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <h1>github users</h1>
      <ul className="users">
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="profile" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Person</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
