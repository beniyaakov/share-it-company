import React, { useState } from "react";



function Filter() {

    const [filteredStudents,SetFilteredStudents] = useState([]);

  
    //////////////////////////////////////////////////////////////////////////////////////////////////
    const fullStackStudents = ()=>{
        const newStudentsArray = students.filter((student)=>{
            return student.course === "fullStack"
        })
        SetFilteredStudents(newStudentsArray)
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    const socStudents = ()=>{
        const newStudentsArray = students.filter((student)=>{
            return student.course === "SOC"
        })
        SetFilteredStudents(newStudentsArray)
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    const qaStudents = ()=>{
        const newStudentsArray = students.filter((student)=>{
            return student.course === "QA"
        })
        SetFilteredStudents(newStudentsArray)
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    const salesforceStudents = ()=>{
        const newStudentsArray = students.filter((student)=>{
            return student.course === "salesforce"
        })
        SetFilteredStudents(newStudentsArray)
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    const devnetStudents = ()=>{
        const newStudentsArray = students.filter((student)=>{
            return student.course === "devnet"
        })
        SetFilteredStudents(newStudentsArray)
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
  return <div>
      <button onClick={fullStackStudents}>fullstack</button>
      <button onClick={qaStudents}>qa</button>
      <button onClick={socStudents}>soc</button>
      <button onClick={salesforceStudents}>salesforce</button>
      <button onClick={devnetStudents}>devnet</button>

      {filteredStudents.map((student)=>{
          return(
            <>
            <h1>{student.name}</h1>
            <h2>{student.course}</h2>
            <h3>{student.workAt}</h3>
            <img src={student.img}/>
            </>
          )
        })}


  </div>;
}

export default Filter;
