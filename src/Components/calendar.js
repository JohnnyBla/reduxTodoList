import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import TaskList from "./taskList";
import { useDispatch, useSelector } from "react-redux";
import { scheduleEvent } from "../redux/eventSlice";
import { openModal } from "../redux/modalReducer";

const Calandar = () => {
  const [input, setInput] = useState("");
  const { events } = useSelector((state) => state.event);

  const numOfEvents = events.length;

  const dispatch = useDispatch();

  let regex = /^[a-zA-Z\s]*$/; //check for letters and whitespaces

  const onChange = (e) => {
    e.preventDefault();
    const eventName = e.target.value;
    setInput(eventName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      setInput(`ENTER AN EVENT!!`);
      setTimeout(() => {
        setInput("");
      }, 2000);
    } else if (!regex.test(input)) {
      setInput("NO NUMBERS / SPECIAL CHARACTERS");
      setTimeout(() => {
        setInput("");
      }, 2000);
    } else {
      dispatch(
        scheduleEvent({
          name: input,
          date: new Date().toLocaleDateString("en-US"),
          checkBox: false,
          id: Date.now(),
        })
      );
      setInput("");
    }
  };

  const removeEvents = (e) => {
    e.preventDefault();
    if (numOfEvents === 0) {
      setInput(`${numOfEvents} EVENTS`);
      setTimeout(() => {
        setInput("");
      }, 2000);
    } else {
      dispatch(openModal());
    }
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col mx-auto mt-4">
          <h1 className="text-center">Welcome To Redux To Do List</h1>
        </div>
      </div>
      <div className="row mt-4 justify-content-center align-items-center">
        <div className="col-md-4">
          <form className="form-group">
            <label htmlFor="eventName">Schedule an event</label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              value={input}
              onChange={onChange}
            ></input>
            <div className="mt-2">
              <span className="col col-md-4 mx-md-5 mx-2">
                <MDBBtn
                  size="md"
                  className="me-4"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {" "}
                  submit event
                </MDBBtn>
                <MDBBtn
                  size="md"
                  className=""
                  type="submit"
                  onClick={removeEvents}
                >
                  {" "}
                  Remove events
                </MDBBtn>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-5">
        {events.map((events) => {
          return <TaskList key={events.id} {...events} />;
        })}
      </div>
    </div>
  );
};

export default Calandar;
