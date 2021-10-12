import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './Students.css'


const studyContentData = [
    {title:"dsfd",subTitle:"dfd",description:"dfdf",img:""},
    {title:"dfd",subTitle:"dfd",description:"dfdfd",img:""},
    {title:"dfd",subTitle:"dff",description:"dfdf",img:""},
    {title:"dfdf",subTitle:"dfdf",description:"dfdff",img:""},
]

function Students() {
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
        <input placeholder="חפש מידע"/>
       <Button type="primary" onClick={showModal}>
        הכנס מידע
      </Button>
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