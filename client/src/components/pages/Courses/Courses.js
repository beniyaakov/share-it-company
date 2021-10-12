import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './Courses.css';


const courses = [
    {site:"Go Code",url:"https://gocode.co.il/subjects",description:"קורס פתוח מקוון מרובה משתתפים , הוא קורס אינטרנטי מקוון הפתוח לקהל הרחב. לרוב הגישה אליו פתוחה ללא עלות דרך האינטרנט והוא מאפשר השתתפות למספר בלתי מוגבל של משתמשיםֿ",img:"https://gocode.co.il/logo.png"},
    {site:"Udemy",url:"https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.ROW&utm_term=_._ag_80315195513_._ad_535757779892_._de_c_._dm__._pl__._ti_kwd-310556426868_._li_1007983_._pd__._&utm_term=_._pd__._kw_udemy_._&matchtype=e&gclid=Cj0KCQjw5JSLBhCxARIsAHgO2SfAHOWRJy1QHzjfARG0b_HWqx0QrszVaaTBRF57Gykoy_q1xtEdMjcaAo5xEALw_wcB",description:"קורס פתוח מקוון מרובה משתתפים , הוא קורס אינטרנטי מקוון הפתוח לקהל הרחב. לרוב הגישה אליו פתוחה ללא עלות דרך האינטרנט והוא מאפשר השתתפות למספר בלתי מוגבל של משתמשים",img:"https://sm.pcmag.com/pcmag_ap/review/u/udemy/udemy_kcd3.jpg"},
    {site:"To Code",url:"https://www.tocode.co.il/",description:"קורס פתוח מקוון מרובה משתתפים , הוא קורס אינטרנטי מקוון הפתוח לקהל הרחב. לרוב הגישה אליו פתוחה ללא עלות דרך האינטרנט והוא מאפשר השתתפות למספר בלתי מוגבל של משתמשים",img:"data:image/jpeg;base64,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"},
    {site:"Coderbyte",url:"https://coderbyte.com/organizations?utm_term=coderbyte&utm_campaign=2020+%7C+Main+%E2%80%93+Coderbyte&utm_source=adwords&utm_medium=ppc&hsa_acc=9961249630&hsa_net=adwords&hsa_grp=101711018136&hsa_ver=3&hsa_kw=coderbyte&hsa_tgt=kwd-369057944540&hsa_mt=e&hsa_ad=437770531622&hsa_src=g&hsa_cam=10097874637&gclid=Cj0KCQjw5JSLBhCxARIsAHgO2SdtZmp1Ib76rQAlnvZrBjmwXrtLNs10GS1262obKDYsWX36sfNpoJEaAjGhEALw_wcB",description:"קורס פתוח מקוון מרובה משתתפים , הוא קורס אינטרנטי מקוון הפתוח לקהל הרחב. לרוב הגישה אליו פתוחה ללא עלות דרך האינטרנט והוא מאפשר השתתפות למספר בלתי מוגבל של משתמשים",img:"https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_de0840ae3396b61382ab711b086b7ba2/coderbyte-for-employers.png"},
]

function Courses() {
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
     <div class="btn">
     <Button type="primary" onClick={showModal} style={{}}>
        הוסף קורס
      </Button>
     </div>
       
<div class="courses-container">

      <Modal title="באפשרותך לשתף מידע על קורסים" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="הוסף" cancelText="צא">
        <div className="modal">
        <input placeholder="שם הקורס"/>
        <input placeholder="קישור לקורס"/>
        <textarea placeholder="מידע"/>
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
          <h1 class="title">{course.site}</h1>
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