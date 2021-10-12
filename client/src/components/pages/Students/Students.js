import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './Students.css'

const students = [
    {
      name: "elias admaso",
      course: "fullStack",
      workAt: "wix",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQHONZLBcUQWlA/profile-displayphoto-shrink_800_800/0/1615321610967?e=1639612800&v=beta&t=UmIZs12v6ENEl5jTTWGFmdmIx848YsFlF1nSXJNUDkk",
    },
    {
      name: "beni yaakov",
      course: "QA",
      workAt: "wix",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQFU2v3qRvbdYw/profile-displayphoto-shrink_800_800/0/1617628713358?e=1639612800&v=beta&t=zETemBvRww3Ow68scr-OcnUTu7pC0ejfzsuC0GypmWg",
    },
    { name: "yehuda bayana", course: "fullStack", workAt: "wix", img: "https://media-exp1.licdn.com/dms/image/D4D35AQE-GnBktmSAPA/profile-framedphoto-shrink_400_400/0/1629479100451?e=1634112000&v=beta&t=yglHnlRy67IWgrvcCbs1pbt9QESIqRhTfOAHUKFwJnU" },
    { name: "yosef sahalo", course: "salesforce", workAt: "wix", img: "https://media-exp1.licdn.com/dms/image/C4D03AQGrwFn-Q1OuQQ/profile-displayphoto-shrink_800_800/0/1633559772093?e=1639612800&v=beta&t=iDXCU68q_hfow8vqvqmhTQochQO68tEWYU8zT61FXDU" },
    { name: "kineret asiyahan", course: "SOC", workAt: "wix", img: "https://media-exp1.licdn.com/dms/image/C4D03AQFxrn7UqoytHQ/profile-displayphoto-shrink_800_800/0/1618231708265?e=1639612800&v=beta&t=LrCe5M434z6QW8JWtgHNOi_j9QikFJ2Z0onXM0DnHKc" },
    { name: "itzhak kasie", course: "devnet", workAt: "wix", img: "https://media-exp1.licdn.com/dms/image/C4E35AQEf5zT6-kTYpQ/profile-framedphoto-shrink_800_800/0/1614614634753?e=1634112000&v=beta&t=bOR5ulW8yU8y6EJ69BbVdBWG43201MiryLJ0T6T0peQ" },
  ];


function Students() {

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
        <div className="coursesBtn">
        <Button type="primary" ghost onClick={fullStackStudents}>FullStack</Button>
        <Button type="primary" ghost onClick={qaStudents}>QA</Button>
        <Button type="primary" ghost onClick={socStudents}>SOC</Button>
        <Button type="primary" ghost onClick={salesforceStudents}>SalesForce</Button>
        <Button type="primary" ghost onClick={devnetStudents}>Devnet</Button>
        </div>
      
        <Button type="primary" onClick={showModal} style={{marginTop:"10px"}}>
        אוסף אותי
      </Button>

      {filteredStudents.map((student)=>{
          return(
            <>
            <img src={student.img}/>
            <h1>{student.name}</h1>
            <h2>{student.course}</h2>
            <h3>{student.workAt}</h3>
            </>
          )
        })}
       
      <Modal title=" באפשורתך לשתף מידע אודות עצמך" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="הוסף" cancelText="צא">
        <div  className="modal">
        <input placeholder="שם הסטודנט"/>
        <input placeholder="קורס"/>
        <input placeholder="מקום עבודה"/>
        <input placeholder="תמונה"/>
        <textarea placeholder="תיאור"/>
       
        </div>
    
      </Modal>
            
            
        </div>
    )
}

export default Students;