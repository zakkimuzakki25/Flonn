import './FlointProgress.css';

// eslint-disable-next-line react/prop-types
const FlointProgress = ({ value, max, level, title }) => {
  const radius = 100;
  const stroke = 17;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (      
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circular-progress"
      >
        {/* Background circle */}
        <circle
          stroke="rgba(0, 0, 0, 0.5)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke="#83AFA0"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="progress-circle"
        />
        {/* Persentase di tengah */}
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          fontFamily='Barlow'
          fontWeight={'bold'}
          dy=".3em"
          fontSize="24"
          fill="#475C59"
        >
          {Math.round((value / max) * 100)}%
        </text>
        {/* Level di tengah */}
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dy=".3em"
          fontSize="10"
          fill="#475C59"
        >
          level {level}
        </text>
        {/* Title di tengah */}
        <text
          x="50%"
          y="70%"
          textAnchor="middle"
          dy=".3em"
          fontSize="10"
          fill="#475C59"
        >
          {title}
        </text>
      </svg>
  );
};

export default FlointProgress;
