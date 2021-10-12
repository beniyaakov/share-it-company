import React, { useState } from "react";
import { Modal} from "antd";
import Card from '../../features/Cards/Card';
import Button from '../../features/Button/Button';
import "./Instructors.css";

const {Meta} = Card;
const InstructorsArray = [
  {
    title: "לינקדאין",
    description:
      "מדריך זה ינחה אותכם בבניית פרופיל שמתאים לתחילת תהליך בפיתוח קריירה בעולם הייטק",
    img: "https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png",
    url: "https://e7.pngegg.com/pngimages/887/616/png-clipart-linkedin-icon-linkedin-text-rectangle-thumbnail.png",
  },
  {
    title: "גיטהב",
    description:
      "מדריך שיכוון אתכם להשתמש נכון בגיטהב ובכל הפעולות שרצוי לדעת בעבודה עם גיטהב",
    img: "https://www.drupal.org/files/project-images/GitHub-Mark.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
  },
  {
    title: "קורות חיים",
    description: "מדריך לבניית קורות חיים מקצועיים שיתאימו לעולם ההייטק ",
    img: "",
    url: "https://thumbs.dreamstime.com/b/cv-resume-filled-outline-icon-line-vector-sign-linear-colorful-pictogram-isolated-white-symbol-logo-illustration-pixel-perfect-107605453.jpg",
  },
  {
    title: "ריאיון עבודה",
    description: "מדריך שיכין אתכם לריאיון עבודה בצורה הכי טובה שיש",
    img: "",
    url: "https://www.taasuka.gov.il/he/Applicants/JobSearchStages/pages/",
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
        {InstructorsArray.map((item)=>{
            return(
                <>
              
            
              </>

            )

        })}
      </div>
    </div>
  );
}

export default Instructors;
