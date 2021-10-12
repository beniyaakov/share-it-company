import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./Instructors.css";

const InstructorsArray = [
  {
    title: "לינקדאין",
    description:
      "מדריך זה ינחה אותכם בבניית פרופיל שמתאים לתחילת תהליך בפיתוח קריירה בעולם הייטק",
    img: "",
    url: "https://e7.pngegg.com/pngimages/887/616/png-clipart-linkedin-icon-linkedin-text-rectangle-thumbnail.png",
  },
  {
    title: "גיטהב",
    description:
      "מדריך שיכוון אתכם להשתמש נכון בגיטהב ובכל הפעולות שרצוי לדעת בעבודה עם גיטהב",
    img: "https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
  },
  {
    title: "קורות חיים",
    description: "מדריך לבניית קורות חיים מקצועיים שיתאימו לעולם ההייטק ",
    img: "",
    url: "https://resumeplus.co.il/how-to-write-cv/",
  },
  {
    title: "ריאיון עבודה",
    description: "מדריך שיכין אתכם לריאיון עבודה בצורה הכי טובה שיש",
    img: "",
    url: "https://www.taasuka.gov.il/he/Applicants/JobSearchStages/pages/jobinterview.aspx",
  },
];

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
      <Button type="primary" onClick={showModal}>
        הכנס מידע
      </Button>
      <Modal
        title="באפשרותך לשתף מידע על מדריכים"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="הוסף"
        cancelText="צא"
      >
        <div className="modal">
          <input placeholder="נושא" />
          <input placeholder="קישור למדריך" />
          <textarea placeholder="מידע" />
        </div>
      </Modal>
      <div className="instructorsDiv">
        {InstructorsArray.map((instruct) => {
          return (
            <div class="column">
              <div class="post-module hover">
                <div class="thumbnail">
                  <img src={instruct.img} />
                </div>
                <div class="post-content">
                  <h1 class="title">{instruct.title}</h1>
                  <p class="description">{instruct.description}</p>
                  <a href={instruct.url}>
                    <button>קישור</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Instructors;
