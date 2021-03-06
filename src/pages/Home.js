import React from "react";
import styled from "styled-components";

import lightbg from "../assets/img/newyork.jpg";
import darkbg from "../assets/img/bg-dark.jpg";

import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

function Home() {
  return (
    <StyledHome>
      <div className="Main-Container">
        <div className="Content-Container">
          <h1>My Weather App</h1>
          <div className="Search-Container">
            <SearchBar />
          </div>
          <div className="Cards-Container">
            <Cards />
          </div>
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  // background-image: url(${lightbg});
  background-image: url(${darkbg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

  .Main-Container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
  }

  .Content-Container {
    h1 {
      font-size: 3.5rem;
      font-weight: bold;
      color: white;
      padding: 50px 0;
      text-align: center;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.75);
      font-family: "Ubuntu", sans-serif;
    }
  }
`;
