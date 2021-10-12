const API = "http://localhost:8080";


export const register = async (data) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${API}/api/admin`, options).then(
        (res) => {
          return res.json();
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  