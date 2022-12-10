import React, { useState } from "react";
import "./RandomizedSentence.css";

function RandomizedSentence({ week1Items }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllAnswer, setShowAllAnswer] = useState(false);
  const [getButtonNo, setGetButtonNo] = useState();

  const [newWeekList, setNewWeekList] = useState([...week1Items]);

  console.log(week1Items);
  console.log(newWeekList);

  const ShuffleHandler = () => {
    const shuffle = (week1Items) =>
      [...week1Items].sort(() => Math.random() - 0.5);
    const newWeek1 = shuffle(week1Items);
    setNewWeekList(newWeek1);
  };

  const ShowAllHandler = () => {
    setShowAllAnswer((prev) => !prev);
  };

  const Week1Handler = () => {
    return newWeekList.map((item, i) => {
      return (
        <div className="d-md-flex align-items-center mb-2" key={item.id}>
          <div className="questionContainer">
            <p className="fs-5 text-dark m-0 me-md-3 fw-semibold">
              {item.question}
            </p>
          </div>
          <div className="d-flex align-items-center answerContainer">
            <button
              className="btn fs-5 m-0 me-3 text-light bg-secondary rounded-1 px-2 py-1"
              onClick={() => {
                setShowAnswer((prev) => !prev);
                setGetButtonNo(item.id);
              }}
            >
              {(showAnswer && getButtonNo === item.id) ||
              showAllAnswer !== false
                ? "Hide"
                : "Show"}
            </button>

            <p
              className={`fs-4 text-danger m-0 fw-semibold ${
                (showAnswer && getButtonNo === item.id) ||
                showAllAnswer !== false
                  ? "visible"
                  : "invisible"
              }`}
            >
              {item.answer}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="px-2 py-3 p-sm-5 bg-light">
      <div>
        <h2 className="text-success fw-bold">ITE4 FINAL EXAM REVIEWER</h2>
        <h3>WEEK 1</h3>
        <div className="shuffleButtonContainer bg-light">
          <button
            className="btn bg-primary text-light fs-4 px-4"
            onClick={ShuffleHandler}
          >
            Shuffle
          </button>
          <button
            className="btn bg-primary text-light fs-4 px-4 ms-3"
            onClick={ShowAllHandler}
          >
            {showAllAnswer ? "Hide All" : "Show All"}
          </button>
        </div>
        {Week1Handler()}
      </div>
    </div>
  );
}

export default RandomizedSentence;
