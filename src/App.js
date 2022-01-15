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

  let [글내용, 글내용변경] = useState([
    "로스트아크, 검은사막, 더 포레스트",
    "치킨, 떡볶이, 모듬 회",
    "검은색 싱글코트, 투 버튼 베이지 코트, 흰색 롱 코트 ",
  ]);

  let [modal, modal변경] = useState(false);
  let [따봉, 따봉변경] = useState(0);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map(function (글, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  {
                    따봉변경(따봉 + 1);
                  }
                }}
              >
                👍
              </span>
              {따봉}
            </h3>
            <p>1월 14일</p>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        열고닫기
      </button>

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let arrayCopy = [...글제목];
            arrayCopy.unshift(입력값);
            글제목변경(arrayCopy);
          }}
        >
          저장
        </button>
      </div>

      {modal === true ? (
        <Modal 자식글제목={글제목} 누른제목={누른제목} 글내용={글내용}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.자식글제목[props.누른제목]}</h2>
      <p>1월14일</p>
      <p>{props.글내용[props.누른제목]}</p>
    </div>
  );
}

export default App;
