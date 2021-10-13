const API="http://localhost:8080";

export const getStudents = async (req, res) => {
    try {
      return await fetch(`${API}/api/graduates/all`)
      .then((res)=>res.json())
    } catch (error) {
      console.log(error);
    }
  };

export const postStudents = async (name,course,workAt,img,description) => {
    const options = {
      method: "POST",
      body: JSON.stringify({name,course,workAt,img,description}),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${API}/api/graduates/addGraduate`, options).then((res) => {
        return res.json();
      });
    } catch (error) {
      console.log(error);
    }
  };