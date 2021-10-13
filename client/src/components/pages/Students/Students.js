import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'antd';
import './Students.css';
import { getStudents,postStudents } from '../../../Service/Students-Service';


function Students() {

  const [students,setStudents] = useState([]);
  const [filteredStudents, SetFilteredStudents] = useState([]);

  useEffect(()=>{
      getStudents()
      .then((res) => {
        setStudents(res);
      });
  },[])
  const [name,setName] = useState("");
  const [course,setCourse] = useState("");
  const [workAt,setWorkAt] = useState("");
  const [img,setImg] = useState("");
  const [description,setDescription] = useState("");

  const getName = (e)=>{
    setName(e.target.value)
  }
  const getCourse = (e)=>{
    setCourse(e.target.value)
  }
  const getWorkAt = (e)=>{
    setWorkAt(e.target.value)
  }
  const getImg = (e)=>{
    setImg(e.target.value)
  }
  const getDescription = (e)=>{
    setDescription(e.target.value)
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  const fullStackStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'FullStack';
    });
    SetFilteredStudents(newStudentsArray);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  const socStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'SOC';
    });
    SetFilteredStudents(newStudentsArray);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const qaStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'QA';
    });
    SetFilteredStudents(newStudentsArray);
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const AutomationStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'Automation';
    });
    SetFilteredStudents(newStudentsArray);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const devnetStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'Devnet';
    });
    SetFilteredStudents(newStudentsArray);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className='coursesBtn'>
        <Button type='primary' ghost onClick={fullStackStudents}>
          FullStack
        </Button>
        <Button type='primary' ghost onClick={qaStudents}>
          QA
        </Button>
        <Button type='primary' ghost onClick={socStudents}>
          SOC
        </Button>
        <Button type='primary' ghost onClick={AutomationStudents}>
        Automation
        </Button>
        <Button type='primary' ghost onClick={devnetStudents}>
          Devnet
        </Button>
      </div>

      <Button type='primary' onClick={showModal}  style={{ marginLeft: "46%",marginTop: "17px",background: "#f07575",border: "solid 2px #f0757" }}>
        הוסף אותי
      </Button>

      

      <Modal
        title=' באפשורתך לשתף מידע אודות עצמך'
        visible={isModalVisible}
        onOk={()=>{postStudents(name,course,workAt,img,description)}}
        onCancel={handleCancel}
        okText='הוסף'
        cancelText='צא'
      >
        <div className='modal'>
          <input placeholder='שם הסטודנט' onChange={getName}/>
          <input placeholder='קורס' onChange={getCourse}/>
          <input placeholder='מקום עבודה' onChange={getWorkAt}/>
          <input placeholder='תמונה' onChange={getImg}/>
          <textarea placeholder='תיאור' onChange={getDescription}/>
        </div>
      </Modal>
      {filteredStudents.map((student)=>{
          return (
              <>
            <div className="student-container">
                <div className="studentDetails">
                <h1> {student.name} </h1>
                <h3>קורס : {student.course}</h3>
                <h3>עובד ב : {student.workAt}</h3>
                <h2>{student.description}</h2>
                </div>
             
           
                <div className="studentImage">
                <img src={student.img}/>
                </div>
           
                </div>
                <hr></hr>
                </>

          
          )

      })}
    </div>
  );
}

export default Students;
