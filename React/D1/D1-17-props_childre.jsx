// ./src/components/StudentList.js

function StudentList(props) {
    return (
      <div>
        <h2>Student List</h2>
        {props.children}
      </div>
    );
  }
  
  export default StudentList;
  