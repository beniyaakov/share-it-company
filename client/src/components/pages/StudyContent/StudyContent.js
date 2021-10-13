import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Card } from 'antd';
import './StudyContent.css';
import { cardsData } from './StudentContectData';


const { Meta } = Card;



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
      <div className="cardMain">
        {cardsData.map((item) => { return <Card
            hoverable
            style={{ width: 320, margin: 10 }}
            cover={<img alt="example" src={item.img} style={{ width: 300, height: 180, marginLeft: 10 , boxShadow:2}} />}
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        })}
      </div>
      <input placeholder="חפש מידע" />
      <Button type="primary" onClick={showModal}>
        הכנס מידע
      </Button>
      <Modal title=" באפשרותך לשתף מידע על תכני לימוד" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="הוסף" cancelText="צא">
        <div className="modal">
          <input placeholder="נושא" />
          <input placeholder="תת-נושא" />
          <input placeholder="תמונה" />
          <textarea placeholder="מידע" />
        </div>
      </Modal>
    </div>
  )
}

export default StudyContent
