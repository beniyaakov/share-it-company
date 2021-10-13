const API="http://localhost:8080";

export const getCourses = async (req, res) => {
    try {
      return await fetch(`${API}/api/Courses/all`).then((res)=>{
          return res.json();
      });
    } catch (error) {
      console.log(error);
    
    }
  };

export const postCourses = async (name,description,url,img) => {
    try {
        await fetch(`${API}/api/Courses/addCourse`, {
          method: "POST",
          body: JSON.stringify({name,description,url,img}),
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        console.log(error);
      }
  };