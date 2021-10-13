import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import {getCourses,postCourses} from '../../../Service/Courses-Service'
import './Courses.css';




function Courses() {

    const [courses,SetCourses] = useState([]);

    const[name,setName] = useState("");
    const[url,setUrl] = useState("");
    const[img,setImg] = useState("");
    const[description,setDescription] = useState("");

    const getName = (e)=>{
        setName(e.target.value)
    }
    const getUrl = (e)=>{
        setUrl(e.target.value)
    }
    const getImg = (e)=>{
        setImg(e.target.value)
    }
    const getDescription = (e)=>{
        setDescription(e.target.value)
    }

    useEffect(()=>{
        
       getCourses()
      .then((res) => {
        SetCourses(res);
      });

    },[])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const s = ()=>{
        alert("dfdsfdsf")
    }
  
    return (
 <div>
     <div class="btn">
     <Button type="primary" onClick={showModal} >
        הוסף קורס
      </Button>
     </div>
       
<div class="courses-container">

      <Modal title="באפשרותך לשתף מידע על קורסים" visible={isModalVisible}  onCancel={handleCancel} okText="הוסף" cancelText="צא" onOk={()=>{postCourses(name,url,img,description)}}>
        <div className="modal">
        <input placeholder="שם הקורס" onChange={getName}/>
        <input placeholder="קישור לקורס" onChange={getUrl}/>
        <input placeholder="קישור תמונה" onChange={getImg}/>
        <textarea placeholder="מידע" onChange={getDescription}/>
        </div>
        </Modal>
  <div class="info">
    <h1>קורסים מומלצים</h1><span>חלק מהקורסים הינם בתשלום</span>
  </div>
  {courses.map((course)=>{
      return (<div class="column">
      <div class="post-module hover">
        <div class="thumbnail">
          <img className="imgCourse" src={course.img}/>
        </div>
        <div class="post-content">
          <h1 class="title">{course.name}</h1>
          <p class="description">{course.description}</p>
          <a href={course.url}><button>קישור</button></a>

        </div>
      </div>
    </div>)
  })}
  </div>
     </div>
    )
}

export default Courses;