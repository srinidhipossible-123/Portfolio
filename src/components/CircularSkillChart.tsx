import { useEffect, useRef } from "react";

interface CircularSkillChartProps {
  name: string;
  level: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export const CircularSkillChart = ({
  name,
  level,
  size = 120,
  strokeWidth = 8,
  color = "hsl(51 100% 50%)",
}: CircularSkillChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!svgRef.current) return;
    const circle = svgRef.current.querySelector("circle") as SVGCircleElement;
    if (!circle) return;
    
    const offset = circumference - (level / 100) * circumference;
    circle.style.strokeDashoffset = `${offset}`;
    circle.style.transition = "stroke-dashoffset 1.5s ease-out";
  }, [level, circumference]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          ref={svgRef}
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted opacity-30"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            className="drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]"
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary text-glow">{level}%</div>
            <div className="text-xs text-muted-foreground mt-1">Voltage</div>
          </div>
        </div>
      </div>
      {/* Skill name */}
      <div className="mt-4 text-center">
        <div className="text-sm font-semibold text-foreground">{name}</div>
      </div>
    </div>
  );
};

