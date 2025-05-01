"use client";

import { DatePicker } from "antd";
import CalendarPage from "@/component/CalenderPage";

export default function TestUI() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是：" + dateString);
  };
  const days = [
    { year: "2025", month: "5月", day: "01", weekDay: "星期一" },
    { year: "2025", month: "5月", day: "01", weekDay: "星期一" },
    { year: "2025", month: "5月", day: "01", weekDay: "星期一" },
    { year: "2025", month: "5月", day: "01", weekDay: "星期一" },
  ];
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center gap-5 flex-wrap overflow-auto">
      {/* <DatePicker onChange={onChange} needConfirm /> */}

      <CalendarPage
        year="2025"
        month="五月"
        day="01"
        weekDay="星期一"
      ></CalendarPage>
      <CalendarPage
        year="2025"
        month="五月"
        day="02"
        weekDay="星期二"
      ></CalendarPage>
      <CalendarPage
        year="2025"
        month="五月"
        day="03"
        weekDay="星期三"
      ></CalendarPage>
      <CalendarPage
        year="2025"
        month="五月"
        day="04"
        weekDay="星期四"
      ></CalendarPage>
      <CalendarPage
        year="2025"
        month="五月"
        day="05"
        weekDay="星期五"
      ></CalendarPage>
      <CalendarPage
        year="2025"
        month="五月"
        day="06"
        weekDay="星期六"
      ></CalendarPage>
      <CalendarPage
        year="2025"
        month="五月"
        day="07"
        weekDay="星期日"
      ></CalendarPage>

      {days.map((day, index) => (
        <CalendarPage
          key={"cal" + index}
          year={day.year}
          month={day.month}
          day={day.day}
          weekDay={day.weekDay}
        ></CalendarPage>
      ))}
    </div>
  );
}
