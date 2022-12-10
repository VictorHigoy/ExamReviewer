import React, { useState } from "react";
import "./RandomizedSentence.css";

function Week2({ week2Items }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllAnswer, setShowAllAnswer] = useState(false);
  const [getButtonNo, setGetButtonNo] = useState();

  const [newWeekList, setNewWeekList] = useState([...week2Items]);

  const ShuffleHandler = (e) => {
    e.preventDefault();
    const shuffle = (week2Items) =>
      [...week2Items].sort(() => Math.random() - 0.5);
    const newWeek1 = shuffle(week2Items);
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
              className={`fs-5 text-danger m-0 fw-semibold ${
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
    <div className="px-2 py-3 px-sm-5 pt-sm-5 pb-sm-0 bg-light">
      <div>
        <h3 className="fw-bold text-light bg-dark p-2">WEEK 2</h3>
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

export default Week2;
