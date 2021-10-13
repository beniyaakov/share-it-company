import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import SliderNews from '../../features/Slider/SliderNews';
import { userPageData } from './UsetPageData';
import './userPageCard.css';
import './UserPage.css';
import { quizData } from './quizData';

const { Meta } = Card;

const UserPage = () => {

    const [quizAnswer, setQuizAnswer] = useState("");
    const [counter, setCounter] = useState(0)
    return (
        <div className="cardMainUser">
            <SliderNews />
            <div className="cardMainStudent">
                <div className="cardStudent">

                    {userPageData.map((item) => {
                        return <Link to={item.link}> <div className="userCard"> <Card key={item.id}
                            hoverable
                            style={{ width: 320, margin: 10,borderRadius:10 }}
                            cover={<img alt="example" className="imgUser" src={item.img} />
                            }
                        >
                            <Meta className="descriptionUser" title={item.title} description={item.description} />
                        </Card>
                        </div>
                        </Link>

                    })}
                </div>
                <div className="quizMain">
                    <h2>בחן את עצמך</h2>
                    <div>
                        <h1>{quizData[counter]?.question}</h1>
                        <p>{quizAnswer}</p>
                        {quizAnswer ? (
                            <Button style={{borderRadius:8,background:"white" ,color:"black",border:"none"}} onClick={() => {
                                quizAnswer !== "" &&
                                setCounter((old) => old + 1); setQuizAnswer("")
                            }}>עבור לשאלה הבאה</Button>
                        ) :
                            <Button style={{borderRadius:8,background:"white" ,color:"black",border:"none"}}  onClick={() => { quizAnswer === "" && setQuizAnswer(quizData[counter]?.answer) }}>לחץ כאן לתשובה</Button>
                        }

                    </div>


                </div>

          
          </div>
        </div>
  );
};

export default UserPage;
