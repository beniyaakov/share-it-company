import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './Courses.css';


const courses = [
    {site:"Go Code",url:"https://gocode.co.il/subjects",description:"קורס פתוח מקוון מרובה משתתפים , הוא קורס אינטרנטי מקוון הפתוח לקהל הרחב. לרוב הגישה אליו פתוחה ללא עלות דרך האינטרנט והוא מאפשר השתתפות למספר בלתי מוגבל של משתמשיםֿ",img:"https://gocode.co.il/logo.png"},
    {site:"Udemy",url:"https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.ROW&utm_term=_._ag_80315195513_._ad_535757779892_._de_c_._dm__._pl__._ti_kwd-310556426868_._li_1007983_._pd__._&utm_term=_._pd__._kw_udemy_._&matchtype=e&gclid=Cj0KCQjw5JSLBhCxARIsAHgO2SfAHOWRJy1QHzjfARG0b_HWqx0QrszVaaTBRF57Gykoy_q1xtEdMjcaAo5xEALw_wcB",description:"קורס פתוח מקוון מרובה משתתפים , הוא קורס אינטרנטי מקוון הפתוח לקהל הרחב. לרוב הגישה אליו פתוחה ללא עלות דרך האינטרנט והוא מאפשר השתתפות למספר בלתי מוגבל של משתמשים",img:"https://digitalsharecropper.com/wp-content/uploads/2016/03/udemy-logo-e1604793745846.png"},
    {site:"To Code",url:"https://www.tocode.co.il/",description:"קורס פתוח מקוון מרובה משתתפים , הוא קורס אינטרנטי מקוון הפתוח לקהל הרחב. לרוב הגישה אליו פתוחה ללא עלות דרך האינטרנט והוא מאפשר השתתפות למספר בלתי מוגבל של משתמשים",img:"https://previews.123rf.com/images/dstarky/dstarky1701/dstarky170101187/69424051-coding-icon-or-logo-in-modern-line-style-high-quality-black-outline-pictogram-for-web-site-design-an.jpg"},
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
       
<div class="container">

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
          <img src={course.img}/>
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