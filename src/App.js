/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "현우 게임 추천",
    "영훈이 저녁 추천",
    "태경이 코트 추천",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let posts = "현우 고기 맛집";
  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[1] = "영훈이 게임 추천";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            따봉👍
          </span>{" "}
          {따봉}
        </h3>
        <p>1월 13일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>
          {글제목[1]}
          <button onClick={제목바꾸기}>게임 추천으로 변경</button>
        </h3>
        <p>1월 14일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>1월 14일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
