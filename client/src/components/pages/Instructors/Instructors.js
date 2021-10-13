import React, { useState } from "react";
import { Modal } from "antd";
import Card from '../../features/Cards/Card';
import Button from '../../features/Button/Button';
import "./Instructors.css";

const { Meta } = Card;
const InstructorsArray = [
  {
    title: "קורות חיים",
    description: "מדריך לבניית קורות חיים מקצועיים שיתאימו לעולם ההייטק ",
    img: "https://images.pexels.com/photos/4560150/pexels-photo-4560150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    url: "https://www.alljobs.co.il/Campaigns/CVCenter/CVCenterGuide.htm",
    id: 3
  },
  {
    title: "לינקדאין",
    description:
      "מדריך זה ינחה אותכם בבניית פרופיל שמתאים לתחילת תהליך בפיתוח קריירה בעולם הייטק",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/85/92/4a/85924a65-b1e2-47cf-7913-87827f62e30c/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/600x600wa.png",
    url: "https://www.pac.ac.il/peresplus/%D7%9E%D7%93%D7%A8%D7%99%D7%9A-%D7%9C%D7%99%D7%A0%D7%A7%D7%93%D7%90%D7%99%D7%9F/",
    id: 1
  },
  {
    title: "ריאיון עבודה",
    description: "מדריך שיכין אתכם לריאיון עבודה בצורה הכי טובה שיש",
    img: "https://images.pexels.com/photos/5439428/pexels-photo-5439428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://miro.medium.com/max/719/0*kHdpA0lO-qQVbaXq.png",
    url: "https://www.jolt.co.il/guides/job-interviewer-guide/",
    id: 4
  },
  {
    title: "גיטהב",
    description:
      "מדריך שיכוון אתכם להשתמש נכון בגיטהב ובכל הפעולות שרצוי לדעת בעבודה עם גיטהב",
    img: "https://miro.medium.com/max/719/0*kHdpA0lO-qQVbaXq.png",
    url: "https://www.codebrain.co.il/%D7%9E%D7%93%D7%A8%D7%99%D7%9A-%D7%9C-git-%D7%A0%D7%99%D7%94%D7%95%D7%9C-%D7%92%D7%A8%D7%A1%D7%90%D7%95%D7%AA-%D7%A7%D7%95%D7%93/",
    id: 2
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
        {InstructorsArray.map((item) => {
          return <div className="InstructorsMain"><section class='info'>
          </section>
            <section class='studentCards-wrapper'>
              <div class='studentCard-grid-space'>
                {/* <div class='num'>{item.id}</div> */}
                <a
                  class='studentCard'
                  href={item.url}>

                    <img style={{ width: 300, height: 300 }} src={item.img}></img>
                    <div className="descrip">
                    <h1 className="title">{item.title}</h1>
                    <p >
                      {item.description}
                    </p>
                    </div>
                    <div class='date'>12 Oct 2021</div>
                    <div class='tags'>
                      <div class='tag'></div>

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
