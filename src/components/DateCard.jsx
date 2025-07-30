const DateCard = ({ date, todos }) => {
  return (
    <div className="bg-white w-40 h-60 rounded-2xl">
      <div className="bg-red-400 text-2xl font-semibold text-right px-2 rounded-t-2xl">{date}</div>
      <div className="text-lg p-2"></div>
      <div className="text-lg p-2 flex-col gap-2">
        <div>{todos.map((value, idx) => (
          <p key={idx}>{value}</p>
        ))}</div>
      </div>
    </div>
  );
}

export default DateCard;