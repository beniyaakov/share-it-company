const API="http://localhost:5000";
export const logIn = async (userName,password) => {
    const options = {
      method: "POST",
      body: JSON.stringify({userName,password}),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return await fetch(`${API}/logIn`, options).then((res) => {
        return res.json();
      });
    } catch (error) {
      console.log(error);
    }
  };

export const register = async(firstName,lastName,password,userName)=>{
    const options = {
        method: "POST",
        body: JSON.stringify({firstName,lastName,password,userName}),
        headers: { "Content-Type": "application/json" },
      };
      try {
        return await fetch(`${API}/register`, options).then((res) => {
          return res.json();
        });
      } catch (error) {
        console.log(error);
      }

}