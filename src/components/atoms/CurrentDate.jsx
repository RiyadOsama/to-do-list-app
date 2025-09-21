function CurrentDate() {
  const date = new Date();

  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className="mx-3">
      <div style={{ color: "var(--primaryColor)", fontWeight: "500" }}>
        {dayName}
      </div>
      <div style={{ color: "var(--titleColor)" }}>
        {day}/{month}/{year}
      </div>
    </div>
  );
}

export default CurrentDate;
