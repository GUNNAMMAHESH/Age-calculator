import React, { useState } from "react";

function AgeCalculator() {
  const [age, Setage] = useState({
    birthDay: "",
    year: 0,
    month: 0,
    days: 0,
  });

  const handleAge = (e) => {
    const birthDay = e.target.value;
    console.log("e.target.value", birthDay);

    let [year, month, days] = birthDay.split("-");
    console.log("after split", year, month, days);

    year = parseInt(year);
    month = parseInt(month);
    days = parseInt(days);
    // console.log( typeof year);
    // console.log( typeof month);
    // console.log( typeof days);

    const presentDate = new Date();
    year = presentDate.getFullYear() - year;
    console.log("getFullYear", year);

    month = presentDate.getMonth() + 1 - month;
    console.log("getMonth", month);

    days = presentDate.getDate() - days;
    console.log("getDate", days);

    if (month < 0) {
      year--;
      month += 12;
    }

    if (days < 0) {
      year--;
      month = presentDate.getMonth() + 1;
      let daysToAdded = new Date(
        presentDate.getFullYear(),
        presentDate.getMonth() - 1,
        0
      ).getDate();
      console.log("yyyyyy", daysToAdded);

      days += daysToAdded;
    }

    Setage({
      birthDay,
      days,
      month,
      year,
    });

    console.log("age", age);
  };

  // const submit = () => {
  //   console.log("age", age);
  // };

  return (
    <div className="bg-gray-300 min-h-screen  flex flex-col items-center justify-center">
      <div className="text-2xl">AgeCalculator</div>

      <form className="w-full p-2">
        <input
          className="w-1/3 p-2 h-10 border-solid border-blue-500 border-2 rounded-md"
          type="date"
          value={age.birthDay}
          onChange={handleAge}
        ></input>
        {/* <input type="submit" onClick={submit}></input> */}
      </form>
      <div className="flex justify-center space-x-5">
        <span>year {age.year}</span>
        <span>month {age.month}</span>

        <span>days {age.days}</span>
      </div>
    </div>
  );
}

export default AgeCalculator;
