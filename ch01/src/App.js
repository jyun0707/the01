import React, { useState } from "react";


function App() {
  
  const [students, setStudents] = useState([
    {id: 1, name: 'Alice', age: 21},
    {id: 2, name: 'Bob', age: 22},
    {id: 3, name: 'Charlie', age: 23},
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({name : "", age: ""});

  
  return (
    <div style={{ padding: "20px" }}>
      <h1>학생 목록</h1>

      <ul>
        {students.map((student) => {
          <li key={student.id}>
            <button onClick={() => setSelectedStudent(student)}>{student.name}</button>
            age: {student.age}
          </li>
        })}
      </ul>


    </div>
  );
}


export default App;