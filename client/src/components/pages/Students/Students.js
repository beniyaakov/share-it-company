import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './Students.css';

const students = [
  {
    name: 'Daniel Admaso',
    course: 'FullStack',
    workAt: 'wix',
    img:"https://media-exp1.licdn.com/dms/image/C4D03AQG02Fmgno0AKg/profile-displayphoto-shrink_800_800/0/1611145430193?e=1639612800&v=beta&t=dCJHJgBRd_KbSpBLvhvJmNph1P0RbEFxqR56-WIpCTM",
    desciption:`
    מה הביא אותך לטק-קריירה?
    
    מאז ומתמיד תחום המחשבים ענין אותי. בתיכון הייתי במגמות ביולוגיה ומחשבים, אז משם הבסיס שלי הגיע. במהלך שירותי הצבאי הייתה לי שיחה עם קרוב משפחה שלמד באותה תקופה בטק-קריירה, זה נשמע לי גדול ומעניין ומתאים לקריירה אליה כיוונתי, וכשיצאתי לאזרחות הגשתי מועמדות.
    
    
    
    מה אתה עושה היום ואיפה אתה רואה את עצמך בהמשך הקריירה?
    
    הקורס שעשיתי היה בשיתוף פעולה עם מכללת John Bryce. במסגרת שיתוף הפעולה שלהם עם טק-קריירה הוצע לי להשתתף בפיילוט שיכשיר בוגר מצטיין מתוך הקורס כמרצה בית בקורסים אחרים של John Bryce. עשיתי את התפקיד הזה במשך שנתיים וגיליתי שאני אוהב מאוד את תחום הדרכה.
    
    אחרי שנתיים החלטתי לשלב את ההדרכה עם עבודה בהייטק כדי לצבור את הידע הטכני והניסיון. עשיתי תפקידי QA בסטרטאפים, בחברות Matrix ו- Retalix, 888 וקומו ובהמשך עשיתי תפקידים משולבים של QA ואוטומציה. במהלך הקריירה שלי התקדמתי לתפקידים ניהוליים: בקומו הייתי ראש צוות ובתפקידי האחרון כשכיר ב- BringBring, מנהל תחום QA.
    `
    
    
    
  },
  {
    name: 'Oozy Bitew',
    course: 'FullStack',
    workAt: 'wix',
    img:"https://media-exp1.licdn.com/dms/image/C4D03AQGLxDQoORdUew/profile-displayphoto-shrink_800_800/0/1610991230227?e=1639612800&v=beta&t=r-fqN5LDi8WHfhm8bubT21KZHLeZYqGKsBXhtnpYWCU",
    desciption:`
    מה הביא אותך לטק-קריירה?
    
    מאז ומתמיד תחום המחשבים ענין אותי. בתיכון הייתי במגמות ביולוגיה ומחשבים, אז משם הבסיס שלי הגיע. במהלך שירותי הצבאי הייתה לי שיחה עם קרוב משפחה שלמד באותה תקופה בטק-קריירה, זה נשמע לי גדול ומעניין ומתאים לקריירה אליה כיוונתי, וכשיצאתי לאזרחות הגשתי מועמדות.
    
    
    
    מה אתה עושה היום ואיפה אתה רואה את עצמך בהמשך הקריירה?
    
    הקורס שעשיתי היה בשיתוף פעולה עם מכללת John Bryce. במסגרת שיתוף הפעולה שלהם עם טק-קריירה הוצע לי להשתתף בפיילוט שיכשיר בוגר מצטיין מתוך הקורס כמרצה בית בקורסים אחרים של John Bryce. עשיתי את התפקיד הזה במשך שנתיים וגיליתי שאני אוהב מאוד את תחום הדרכה.
    
    אחרי שנתיים החלטתי לשלב את ההדרכה עם עבודה בהייטק כדי לצבור את הידע הטכני והניסיון. עשיתי תפקידי QA בסטרטאפים, בחברות Matrix ו- Retalix, 888 וקומו ובהמשך עשיתי תפקידים משולבים של QA ואוטומציה. במהלך הקריירה שלי התקדמתי לתפקידים ניהוליים: בקומו הייתי ראש צוות ובתפקידי האחרון כשכיר ב- BringBring, מנהל תחום QA.
    `
  },
  {
    name: 'Yizhak Gete',
    course: 'FullStack',
    workAt: 'wix',
    img:"https://media-exp1.licdn.com/dms/image/C4D03AQGS-oistPXAUQ/profile-displayphoto-shrink_800_800/0/1615235694737?e=1639612800&v=beta&t=k9hoLAKBq5-U8TwpFZf-fZI7mJhbYVox66Emx-JAhkI",
    desciption:`
    מה הביא אותך לטק-קריירה?
    
    מאז ומתמיד תחום המחשבים ענין אותי. בתיכון הייתי במגמות ביולוגיה ומחשבים, אז משם הבסיס שלי הגיע. במהלך שירותי הצבאי הייתה לי שיחה עם קרוב משפחה שלמד באותה תקופה בטק-קריירה, זה נשמע לי גדול ומעניין ומתאים לקריירה אליה כיוונתי, וכשיצאתי לאזרחות הגשתי מועמדות.
    
    
    
    מה אתה עושה היום ואיפה אתה רואה את עצמך בהמשך הקריירה?
    
    הקורס שעשיתי היה בשיתוף פעולה עם מכללת John Bryce. במסגרת שיתוף הפעולה שלהם עם טק-קריירה הוצע לי להשתתף בפיילוט שיכשיר בוגר מצטיין מתוך הקורס כמרצה בית בקורסים אחרים של John Bryce. עשיתי את התפקיד הזה במשך שנתיים וגיליתי שאני אוהב מאוד את תחום הדרכה.
    
    אחרי שנתיים החלטתי לשלב את ההדרכה עם עבודה בהייטק כדי לצבור את הידע הטכני והניסיון. עשיתי תפקידי QA בסטרטאפים, בחברות Matrix ו- Retalix, 888 וקומו ובהמשך עשיתי תפקידים משולבים של QA ואוטומציה. במהלך הקריירה שלי התקדמתי לתפקידים ניהוליים: בקומו הייתי ראש צוות ובתפקידי האחרון כשכיר ב- BringBring, מנהל תחום QA.
    `
  },
  {
    name: 'Yaffa Belete',
    course: 'Automation',
    workAt: 'IBM',
    img:"https://media-exp1.licdn.com/dms/image/C4D03AQExGoCTqwYwrw/profile-displayphoto-shrink_800_800/0/1608139449126?e=1639612800&v=beta&t=1-9M55PvZkRGCXuV9iPMMYM5ekXS4LTAjMRCizitVC8",
    desciption:`
    מה הביא אותך לטק-קריירה?
    
    מאז ומתמיד תחום המחשבים ענין אותי. בתיכון הייתי במגמות ביולוגיה ומחשבים, אז משם הבסיס שלי הגיע. במהלך שירותי הצבאי הייתה לי שיחה עם קרוב משפחה שלמד באותה תקופה בטק-קריירה, זה נשמע לי גדול ומעניין ומתאים לקריירה אליה כיוונתי, וכשיצאתי לאזרחות הגשתי מועמדות.
    
    
    
    מה אתה עושה היום ואיפה אתה רואה את עצמך בהמשך הקריירה?
    
    הקורס שעשיתי היה בשיתוף פעולה עם מכללת John Bryce. במסגרת שיתוף הפעולה שלהם עם טק-קריירה הוצע לי להשתתף בפיילוט שיכשיר בוגר מצטיין מתוך הקורס כמרצה בית בקורסים אחרים של John Bryce. עשיתי את התפקיד הזה במשך שנתיים וגיליתי שאני אוהב מאוד את תחום הדרכה.
    
    אחרי שנתיים החלטתי לשלב את ההדרכה עם עבודה בהייטק כדי לצבור את הידע הטכני והניסיון. עשיתי תפקידי QA בסטרטאפים, בחברות Matrix ו- Retalix, 888 וקומו ובהמשך עשיתי תפקידים משולבים של QA ואוטומציה. במהלך הקריירה שלי התקדמתי לתפקידים ניהוליים: בקומו הייתי ראש צוות ובתפקידי האחרון כשכיר ב- BringBring, מנהל תחום QA.
    `
  },
  {
    name: 'Galit Mahari',
    course: 'QA',
    workAt: 'Sparks',
    img:"https://media-exp1.licdn.com/dms/image/C4D03AQG_8mK3_QRXqg/profile-displayphoto-shrink_800_800/0/1538580466055?e=1639612800&v=beta&t=XuFvWQg-m3ZRYZBytZ1vCOpSAD68_k1JZXm-TCzMJdo",
    desciption:`
    מה הביא אותך לטק-קריירה?
    
    מאז ומתמיד תחום המחשבים ענין אותי. בתיכון הייתי במגמות ביולוגיה ומחשבים, אז משם הבסיס שלי הגיע. במהלך שירותי הצבאי הייתה לי שיחה עם קרוב משפחה שלמד באותה תקופה בטק-קריירה, זה נשמע לי גדול ומעניין ומתאים לקריירה אליה כיוונתי, וכשיצאתי לאזרחות הגשתי מועמדות.
    
    
    
    מה אתה עושה היום ואיפה אתה רואה את עצמך בהמשך הקריירה?
    
    הקורס שעשיתי היה בשיתוף פעולה עם מכללת John Bryce. במסגרת שיתוף הפעולה שלהם עם טק-קריירה הוצע לי להשתתף בפיילוט שיכשיר בוגר מצטיין מתוך הקורס כמרצה בית בקורסים אחרים של John Bryce. עשיתי את התפקיד הזה במשך שנתיים וגיליתי שאני אוהב מאוד את תחום הדרכה.
    
    אחרי שנתיים החלטתי לשלב את ההדרכה עם עבודה בהייטק כדי לצבור את הידע הטכני והניסיון. עשיתי תפקידי QA בסטרטאפים, בחברות Matrix ו- Retalix, 888 וקומו ובהמשך עשיתי תפקידים משולבים של QA ואוטומציה. במהלך הקריירה שלי התקדמתי לתפקידים ניהוליים: בקומו הייתי ראש צוות ובתפקידי האחרון כשכיר ב- BringBring, מנהל תחום QA.
    `
  },
  {
    name: 'Yakov Nagosa',
    course: 'FullStack',
    workAt: 'IronSource',
    img:"https://media-exp1.licdn.com/dms/image/C5603AQHw_KJ9hq7ezg/profile-displayphoto-shrink_800_800/0/1516448311350?e=1639612800&v=beta&t=blDtr4iIFexW1Fq_mfyYPKY39S6zr2u82uV6ZbbK9wI",
    desciption:`
    מה הביא אותך לטק-קריירה?
    
    מאז ומתמיד תחום המחשבים ענין אותי. בתיכון הייתי במגמות ביולוגיה ומחשבים, אז משם הבסיס שלי הגיע. במהלך שירותי הצבאי הייתה לי שיחה עם קרוב משפחה שלמד באותה תקופה בטק-קריירה, זה נשמע לי גדול ומעניין ומתאים לקריירה אליה כיוונתי, וכשיצאתי לאזרחות הגשתי מועמדות.
    
    
    
    מה אתה עושה היום ואיפה אתה רואה את עצמך בהמשך הקריירה?
    
    הקורס שעשיתי היה בשיתוף פעולה עם מכללת John Bryce. במסגרת שיתוף הפעולה שלהם עם טק-קריירה הוצע לי להשתתף בפיילוט שיכשיר בוגר מצטיין מתוך הקורס כמרצה בית בקורסים אחרים של John Bryce. עשיתי את התפקיד הזה במשך שנתיים וגיליתי שאני אוהב מאוד את תחום הדרכה.
    
    אחרי שנתיים החלטתי לשלב את ההדרכה עם עבודה בהייטק כדי לצבור את הידע הטכני והניסיון. עשיתי תפקידי QA בסטרטאפים, בחברות Matrix ו- Retalix, 888 וקומו ובהמשך עשיתי תפקידים משולבים של QA ואוטומציה. במהלך הקריירה שלי התקדמתי לתפקידים ניהוליים: בקומו הייתי ראש צוות ובתפקידי האחרון כשכיר ב- BringBring, מנהל תחום QA.
    `
  },
  {
    name: 'Kineret Asiyahan',
    course: 'Devnet',
    workAt: 'CheckPoint',
    img:"https://media-exp1.licdn.com/dms/image/C4D03AQFxrn7UqoytHQ/profile-displayphoto-shrink_800_800/0/1618231708265?e=1639612800&v=beta&t=LrCe5M434z6QW8JWtgHNOi_j9QikFJ2Z0onXM0DnHKc",
    desciption:`
    מה הביא אותך לטק-קריירה?
    
    מאז ומתמיד תחום המחשבים ענין אותי. בתיכון הייתי במגמות ביולוגיה ומחשבים, אז משם הבסיס שלי הגיע. במהלך שירותי הצבאי הייתה לי שיחה עם קרוב משפחה שלמד באותה תקופה בטק-קריירה, זה נשמע לי גדול ומעניין ומתאים לקריירה אליה כיוונתי, וכשיצאתי לאזרחות הגשתי מועמדות.
    
    
    
    מה אתה עושה היום ואיפה אתה רואה את עצמך בהמשך הקריירה?
    
    הקורס שעשיתי היה בשיתוף פעולה עם מכללת John Bryce. במסגרת שיתוף הפעולה שלהם עם טק-קריירה הוצע לי להשתתף בפיילוט שיכשיר בוגר מצטיין מתוך הקורס כמרצה בית בקורסים אחרים של John Bryce. עשיתי את התפקיד הזה במשך שנתיים וגיליתי שאני אוהב מאוד את תחום הדרכה.
    
    אחרי שנתיים החלטתי לשלב את ההדרכה עם עבודה בהייטק כדי לצבור את הידע הטכני והניסיון. עשיתי תפקידי QA בסטרטאפים, בחברות Matrix ו- Retalix, 888 וקומו ובהמשך עשיתי תפקידים משולבים של QA ואוטומציה. במהלך הקריירה שלי התקדמתי לתפקידים ניהוליים: בקומו הייתי ראש צוות ובתפקידי האחרון כשכיר ב- BringBring, מנהל תחום QA.
    `
  },

];

function Students() {
  const [filteredStudents, SetFilteredStudents] = useState([]);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  const fullStackStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'FullStack';
    });
    SetFilteredStudents(newStudentsArray);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  const socStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'SOC';
    });
    SetFilteredStudents(newStudentsArray);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const qaStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'QA';
    });
    SetFilteredStudents(newStudentsArray);
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const AutomationStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'Automation';
    });
    SetFilteredStudents(newStudentsArray);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const devnetStudents = () => {
    const newStudentsArray = students.filter((student) => {
      return student.course === 'Devnet';
    });
    SetFilteredStudents(newStudentsArray);
  };
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
      <div className='coursesBtn'>
        <Button type='primary' ghost onClick={fullStackStudents}>
          FullStack
        </Button>
        <Button type='primary' ghost onClick={qaStudents}>
          QA
        </Button>
        <Button type='primary' ghost onClick={socStudents}>
          SOC
        </Button>
        <Button type='primary' ghost onClick={AutomationStudents}>
        Automation
        </Button>
        <Button type='primary' ghost onClick={devnetStudents}>
          Devnet
        </Button>
      </div>

      <Button type='primary' onClick={showModal} style={{ marginLeft: "46%",marginTop: "17px",background: "#f07575",border: "solid 2px #f0757" }}>
        אוסף אותי
      </Button>

      

      <Modal
        title=' באפשורתך לשתף מידע אודות עצמך'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText='הוסף'
        cancelText='צא'
      >
        <div className='modal'>
          <input placeholder='שם הסטודנט' />
          <input placeholder='קורס' />
          <input placeholder='מקום עבודה' />
          <input placeholder='תמונה' />
          <textarea placeholder='תיאור' />
        </div>
      </Modal>
      {filteredStudents.map((student)=>{
          return (
            <div className="student-container">
                <div className="studentDetails">
                <h1> {student.name} </h1>
                <h3>קורס : {student.course}</h3>
                <h3>עובד ב : {student.workAt}</h3>
                <h2>{student.desciption}</h2>
                </div>
             
           
                <div className="studentImage">
                <img src={student.img}/>
                </div>
           
                </div>

          
          )

      })}
    </div>
  );
}

export default Students;
