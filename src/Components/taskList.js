import React from "react";

const TaskList = ({ name, date }) => {
  return (
    <div className="container">
      <hr />
      <div className="row justify-content-center mx-auto bg-warning">
        <div className="col-md-4 col mx-auto px-md-1">
          <h5>Task Name:</h5>
          {name}
        </div>
        <div className="col-md-4 col px-md-2">
          <h5>Task Date:</h5>
          {date}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TaskList;
