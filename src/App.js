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

  let [modal, modal변경] = useState(false);

  let [따봉, 따봉변경] = useState(0);
  let posts = "현우 고기 맛집";

  //버튼 만들기 함수들
  /*function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[1] = "영훈이 게임 추천";
    글제목변경(newArray);
  }

  function 순서정렬() {
    let sod = [...글제목];
    sod[0] = 글제목[1];
    sod[1] = 글제목[0];
    글제목변경(sod);
  } */

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
        <h3>{글제목[1]}</h3>
        <p>1월 14일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>1월 15일 발행</p>
        <hr />
      </div>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        상세페이지
      </button>

      {modal === true ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
