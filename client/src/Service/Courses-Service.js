const API="http://localhost:5000";

export const getCourses = async (req, res) => {
    try {
      return await fetch(`${API}/courses`);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  };

export const postCourses = async (title,description,img) => {
    const options = {
      method: "POST",
      body: JSON.stringify({title,subTitle,description,img}),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${API}/courses/create`, options).then((res) => {
        return res.json();
      });
    } catch (error) {
      console.log(error);
    }
  };