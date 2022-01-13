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

  let posts = "현우 고기 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h3> {글제목[0]} </h3>
        <p>1월 13일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3> {글제목[1]} </h3>
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
