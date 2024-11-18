import React, { useState } from "react";

function AgeCalculator() {
  const [age, Setage] = useState({
    year: 0,
    month: 0,
    days: 0,
  });

  const handleAge = (e) => {
    const age = e.target.value;
    console.log("e.target.value", age);

    let [year, month, days] = age.split("-");
    console.log("doneeeeeee", year, month, days);

    year = parseInt(year);
    month = parseInt(month);
    days = parseInt(days);
    console.log("mmm", typeof year);
    console.log("mmm", typeof month);
    console.log("mmm", typeof days);

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
      console.log("yyyyyy",daysToAdded);
      
      days += daysToAdded
    }

    Setage({
      days,
      month,
      year,
    });

    console.log("age", age);
  };

  const submit = () => {
    console.log("age", age);
  };
  return (
    <div className="bg-gray-300 min-h-screen  flex flex-col items-center justify-center">
      <div className="text-2xl">AgeCalculator</div>

      <form className="w-full p-2">
        <input
          className="w-1/3 p-2 h-10"
          type="date"
          value={age}
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
