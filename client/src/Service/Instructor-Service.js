const API="http://localhost:8080";

export const getInstructor = async (req, res) => {
    try {
      return await fetch(`${API}/Instructor`);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
export const postInstructor = async (title,subTitle,description,img) => {
    const options = {
      method: "POST",
      body: JSON.stringify({title,subTitle,description,img}),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${API}/Instructor/create`, options).then((res) => {
        return res.json();
      });
    } catch (error) {
      console.log(error);
    }
  };