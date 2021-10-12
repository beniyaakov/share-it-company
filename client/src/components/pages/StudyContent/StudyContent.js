import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './StudyContent.css';


const studyContentData = [
    {title:"dsfd",subTitle:"dfd",description:"dfdf",img:""},
    {title:"dfd",subTitle:"dfd",description:"dfdfd",img:""},
    {title:"dfd",subTitle:"dff",description:"dfdf",img:""},
    {title:"dfdf",subTitle:"dfdf",description:"dfdff",img:""},
]

function StudyContent() {
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
      <Modal title=" באפשרותך לשתף מידע על תכני לימוד" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="הוסף" cancelText="צא">
        <div className="modal">
        <input placeholder="נושא"/>
        <input placeholder="תת-נושא"/>
        <input placeholder="תמונה"/>
        <textarea placeholder="מידע"/>
        </div>
       
      </Modal>
            
            
        </div>
    )
}

export default StudyContent
