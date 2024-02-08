import React, { useState } from "react";

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthdiff = today.getMonth() - birthdateDate.getMonth();

    if (
      monthdiff < 0 ||
      (monthdiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }

    setAge(age);
  };

  return (
    <>
      <div className="container text-center">
        <div className="py-6">
          <h1>Age Calculator</h1>
          <div className="input-cal">
            <input
              type="date"
              name="date"
              onChange={(e) => setBirthdate(e.target.value)}
            />
            <input
              className="button"
              type="submit"
              value="Submit"
              onClick={calculateAge}
            />

            <p>Your are years old {age}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
