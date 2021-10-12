import React from 'react';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';


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
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <input placeholder="שם הסטודנט"/>
        <input placeholder="קורס"/>
        <input placeholder="מקום עבודה"/>
        <input placeholder="תיאור"/>
        <input placeholder="תמונה"/>
      </Modal>
            
            
        </div>
    )
}

export default Students;