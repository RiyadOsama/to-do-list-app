import { GoDotFill } from "react-icons/go";

function TaskStatusCard({ color, value, label }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="d-flex flex-column align-items-center gap-2">
      <svg width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="12"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="20"
          fill="var(--titleColor)"
        >
          {value}%
        </text>
      </svg>
      <div className="d-flex align-items-center gap-1">
        <GoDotFill color={color} />
        <span>{label}</span>
      </div>
    </div>
  );
}

export default TaskStatusCard;
