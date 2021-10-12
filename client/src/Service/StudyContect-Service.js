export const getStudyContent = async (req, res) => {
    try {
      return await fetch(`${API}/studyContent`);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  };

  const API="http://localhost:5000";
export const postStudyContent = async (title,subTitle,description,img) => {
    const options = {
      method: "POST",
      body: JSON.stringify({title,subTitle,description,img}),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${API}/studyContent/create`, options).then((res) => {
        return res.json();
      });
    } catch (error) {
      console.log(error);
    }
  };

