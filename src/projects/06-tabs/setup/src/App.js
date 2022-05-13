import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Tabs from "./tabs";
import "./app.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function conditionalRender(isTrue, item) {
  if (isTrue) {
    return item;
  }
  return null;
}
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tab, setTab] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((tabs) => {
        tabs.sort((i1, i2) => i1.order >= i2.order);
        setData(tabs);
        setTab(tabs[0]);
        setIsLoading(false);
        setIsError(false);
        // console.log(tabs);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
        // console.log(e.message);
      });
  }, []);

  if (isLoading) {
    return <h2 className="preload">Loading...</h2>;
  }
  if (isError) {
    return <h2 className="preload">Error...</h2>;
  }
  const changeTab = (item) => {
    setTab(item);
  };

  return (
    <>
      <section className="container">
        <header className="title">
          <h1>Experience</h1>
        </header>
        <div className="info">
          <Tabs data={data} changeTab={changeTab} />
          <article className="tabs-data">
            <h2 className="role">{tab.title}</h2>
            <p className="token">{tab.company}</p>
            <p className="date">{tab.dates}</p>
            <ul className="qualities">
              {tab["duties"].map((duty, index) => {
                return (
                  <li className="quality" key={index}>
                    <i className="fas fa-angle-double-right fa-2x"></i>
                    <p className="para">{duty}</p>
                  </li>
                );
              })}
            </ul>
            <footer class="footer-mi">
              <button class="more-info">MORE INFO</button>
            </footer>
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
