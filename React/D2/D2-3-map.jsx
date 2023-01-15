// src/components/StudentList.js

function StudentList() {
    const students = ['Marc', 'Lucy', 'Anna'];
  
    return (
      <div className="list">
        <h2>Student List</h2>
        
        { students.map(name => {
          return <p> { name } </p>
        })}
        
      </div>
    );
  }
  
  export default StudentList;
  