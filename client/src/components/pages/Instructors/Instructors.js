import React from 'react';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';


const Instructors = [
    {title:"dsfd",subTitle:"dfd",description:"dfdf",img:""},
    {title:"dfd",subTitle:"dfd",description:"dfdfd",img:""},
    {title:"dfd",subTitle:"dff",description:"dfdf",img:""},
    {title:"dfdf",subTitle:"dfdf",description:"dfdff",img:""},
]

function Instructors() {
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
        <input placeholder="נושא"/>
        <input placeholder="מידע"/>
        <input placeholder="קישור למדריך"/>
      </Modal>
            
            
        </div>
    )
}

export default Instructors;