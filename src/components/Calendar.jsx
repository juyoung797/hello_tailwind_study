import DateCard from "./DateCard";
import scheduleList from "../scheduleList.json"

const Calendar = () => {
  return (
    <div className="bg-blue-200 min-w-7xl rounded-2xl shadow p-20">
      <h1 className="bg-white mb-6 text-right font-bold text-4xl p-4 rounded-2xl">
        August, 2025
      </h1>
      <div className="grid grid-cols-7 justify-items-center gap-4">
        {scheduleList.map((value) => (
          <DateCard 
            key={value.date} 
            date={value.date}
            todos={value.todos}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;