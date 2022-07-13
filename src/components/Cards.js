import React from "react";
import styled from "styled-components";

function Cards() {
  return (
    <StyledCards>
      <div className="Cards-Container">
        <div className="Card">
          <div className="Card__details">
            <h2>New York</h2>
            <p>-9°</p>
          </div>
          <div className="Card__text">
            <div className="Card__Statistics">
              <p>63%</p>
              <p>Humidity</p>
            </div>
            <div className="Card__Statistics">
              <p>4km</p>
              <p>Visibility</p>
            </div>
            <div className="Card__Statistics">
              <p>Low 0</p>
              <p>UV Index</p>
            </div>
          </div>
        </div>

        <div className="Card-2">
          <div className="Card__details">
            <h2>Miami</h2>
            <p>28°</p>
          </div>
          <div className="Card__text">
            <div className="Card__Statistics">
              <p>63%</p>
              <p>Humidity</p>
            </div>
            <div className="Card__Statistics">
              <p>4km</p>
              <p>Visibility</p>
            </div>
            <div className="Card__Statistics">
              <p>Low 0</p>
              <p>UV Index</p>
            </div>
          </div>
        </div>

        <div className="Card-3">
          <div className="Card__details">
            <h2>Los Angeles</h2>
            <p>18°</p>
          </div>
          <div className="Card__text">
            <div className="Card__Statistics">
              <p>63%</p>
              <p>Humidity</p>
            </div>
            <div className="Card__Statistics">
              <p>4km</p>
              <p>Visibility</p>
            </div>
            <div className="Card__Statistics">
              <p>Low 0</p>
              <p>UV Index</p>
            </div>
          </div>
        </div>
      </div>
    </StyledCards>
  );
}

export default Cards;

const StyledCards = styled.div`
  .Cards-Container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px 20px;
    gap: 80px;
  }

  .Card,
  .Card-2,
  .Card-3 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1519121785383-3229633bb75b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
    background-size: cover;
    background-position: center;
    width: 280px;
    height: 500px;
    // box-shadow: rgba(255, 255, 255, 0.8) 0px 14px 28px,
    //   rgba(0, 0, 0, 0.22) 0px 10px 10px;
    box-shadow: rgba(255, 255, 255, 0.8) 0px 5px 15px;
    border-radius: 30px;
    &:hover {
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }
  }

  .Card-2 {
    background-image: url("https://images.unsplash.com/photo-1503188991764-408493f288b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80");
  }

  .Card-3 {
    background-image: url("https://images.unsplash.com/photo-1579851741410-a1f031fc2c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80");
  }

  .Card__details {
    padding-bottom: 100px;
    h2 {
      font-size: 1.5rem;
      font-family: "Ubuntu", sans-serif;
      padding-left: 20px;
      text-shadow: 4px 0px 5px #404040;
    }
    p {
      font-size: 120px;
      padding: 0 20px;
      text-shadow: 4px 0px 5px #404040;
    }
  }

  .Card__text {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    margin: 0 10px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .Card__Statistics {
    text-align: center;
    text-shadow: 3px 2px 4px #000000;
    p {
      padding: 0 5px;
      font-size: 14px;
    }
  }
`;
