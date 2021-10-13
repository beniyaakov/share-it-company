import React, { useState } from "react";
import { Modal } from "antd";
import Card from '../../features/Cards/Card';
import Button from '../../features/Button/Button';
import "./Instructors.css";

const { Meta } = Card;
const InstructorsArray = [
  {
    title: "לינקדאין",
    description:
      "מדריך זה ינחה אותכם בבניית פרופיל שמתאים לתחילת תהליך בפיתוח קריירה בעולם הייטק",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/85/92/4a/85924a65-b1e2-47cf-7913-87827f62e30c/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/600x600wa.png",
    url: "https://e7.pngegg.com/pngimages/887/616/png-clipart-linkedin-icon-linkedin-text-rectangle-thumbnail.png",
    id:1
  },
  {
    title: "גיטהב",
    description:
      "מדריך שיכוון אתכם להשתמש נכון בגיטהב ובכל הפעולות שרצוי לדעת בעבודה עם גיטהב",
    img: "https://miro.medium.com/max/719/0*kHdpA0lO-qQVbaXq.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
    id:2
  },
  {
    title: "קורות חיים",
    description: "מדריך לבניית קורות חיים מקצועיים שיתאימו לעולם ההייטק ",
    img: "https://miro.medium.com/max/719/0*kHdpA0lO-qQVbaXq.png",
    url: "https://thumbs.dreamstime.com/b/cv-resume-filled-outline-icon-line-vector-sign-linear-colorful-pictogram-isolated-white-symbol-logo-illustration-pixel-perfect-107605453.jpg",
    id:3
  },
  {
    title: "ריאיון עבודה",
    description: "מדריך שיכין אתכם לריאיון עבודה בצורה הכי טובה שיש",
    img: "https://miro.medium.com/max/719/0*kHdpA0lO-qQVbaXq.png",
    url: "https://www.taasuka.gov.il/he/Applicants/JobSearchStages/pages/",
    id:4
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
        {InstructorsArray.map((item) => { return <div className="InstructorsMain"><section class='info'>
            </section>
            <section class='studentCards-wrapper'>
              <div class='studentCard-grid-space'>
                {/* <div class='num'>{item.id}</div> */}
                <a
                  class='studentCard'
                  href='https://codetheweb.blog/2017/10/06/html-syntax/'

                >
                  <div>
                    <img style={{width:200,height:250}}src={item.img}></img>
                    <h1>{item.title}</h1>
                    <p>
                      {item.description}
                    </p>
                    <div class='date'>12 Oct 2021</div>
                    <div class='tags'>
                      <div class='tag'></div>
                    </div>
                  </div>
                </a>
              </div>

            </section>
</div>
          
        })}
      </div>
    </div>
  );
}

export default Instructors;
