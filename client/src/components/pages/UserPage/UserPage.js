import React from 'react';
import Card from '../../features/Cards/Card';


const userPageData = [
    {title:"תכני לימוד",img:"https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png",link:"/StudyContent"},
    {title:"קורסים",img:"https://s.udemycdn.com/meta/default-meta-image-v2.png",link:"/Courses"},
    {title:"מדריכים",img:"https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png",link:"/Instructors"},
    {title:"בוגרים מספרים",img:"https://images1.ynet.co.il/PicServer5/2019/01/31/9038190/90381890100084640360no.jpg",link:"/Students"},

]

function UserPage() {
    return (
        <div className="userPage">
            {userPageData.map((data)=>{
                return(
                    <Card title={data.title} img={data.img} link={data.link}/>
                )

            })}
            
            
        </div>
    )
}

export default UserPage
