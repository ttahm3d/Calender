const btnCalc = document.querySelector("#btnCalc");
const iMonth = document.querySelector("#month-select");
const iDate = document.querySelector("#date-select");
const iYear = document.querySelector("#year-select");
const res = document.querySelector(".result-section");

function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

iMonth.addEventListener("change", () => {
  const year = parseInt(iYear.value);
  const month = iMonth.value;
  // console.log(year);
  //Remove all the currently populated dates
  while (iDate.options.length > 0) {
    iDate.options.remove(0);
  }

  //Define array of Dates for seperate set of months
  //Define empty array to store dates
  let Dates = [];
  if (
    month == "0" ||
    month == "2" ||
    month == "4" ||
    month == "6" ||
    month == "7" ||
    month == "9" ||
    month == "11"
  ) {
    Dates = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ];
  } else if (month == "3" || month == "5" || month == "8" || month == "10") {
    Dates = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ];
  } else if (month == "1") {
    if (leapYear(year)) {
      Dates = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29
      ];
    } else {
      Dates = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28
      ];
    }
  } else {
  }

  //use option constructor to create options form Dates array
  const opt = new Option("Date", "");
  iDate.appendChild(opt);
  Dates.forEach((date) => {
    let option = new Option(date, date);
    iDate.appendChild(option);
  });
});

btnCalc.addEventListener("click", () => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const month = iMonth.value;
  const date = iDate.value;
  const year = parseInt(iYear.value);

  const DateObj = new Date(year, month, date);

  const day = DateObj.getDay();
  res.innerHTML = weekdays[day];
  res.classList.add("show");
});
