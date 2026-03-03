import React from 'react';

interface SocialTooltipProps {
  icon: React.ReactNode;
  name: string;
  href: string;
  color?: string;
}

const SocialTooltip: React.FC<SocialTooltipProps> = ({ 
  icon, 
  name, 
  href, 
  color = "#1da1f2"
}) => {
  return (
    <div className="relative cursor-pointer transition-all duration-200 text-[17px] rounded-[10px] group w-full">
      {/* Button */}
      <div className="text">
        <a className="text-white block relative decoration-0 group/icon flex flex-col items-center" href={href} target="_blank" rel="noopener noreferrer">
          <div className="layer w-[55px] h-[55px] transition-transform duration-300 group-hover/icon:rotate-[-35deg] group-hover/icon:skew-x-[20deg] relative">
            <span className="absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 group-hover/icon:opacity-20 bg-card/10 backdrop-blur-sm" style={{ borderColor: color }}></span>
            <span className="absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 group-hover/icon:opacity-40 group-hover/icon:translate-x-[5px] group-hover/icon:-translate-y-[5px]" style={{ borderColor: color }}></span>
            <span className="absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 group-hover/icon:opacity-60 group-hover/icon:translate-x-[10px] group-hover/icon:-translate-y-[10px]" style={{ borderColor: color }}></span>
            <span className="absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 group-hover/icon:opacity-80 group-hover/icon:translate-x-[15px] group-hover/icon:-translate-y-[15px]" style={{ borderColor: color }}></span>
            <span 
              className="absolute top-0 left-0 h-full w-full border rounded-[5px] transition-all duration-300 group-hover/icon:opacity-100 group-hover/icon:translate-x-[20px] group-hover/icon:-translate-y-[20px] flex items-center justify-center bg-card" 
              style={{ borderColor: color, boxShadow: `0 0 15px ${color}40` }}
            >
              <div className="text-[30px] flex items-center justify-center w-full h-full drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]" style={{ color: color }}>
                {icon}
              </div>
            </span>
          </div>
          <div className="absolute left-1/2 -bottom-[5px] opacity-0 font-medium -translate-x-1/2 transition-all duration-300 group-hover/icon:-bottom-[35px] group-hover/icon:opacity-100 whitespace-nowrap text-sm tracking-wider uppercase" style={{ color: color, textShadow: `0 0 10px ${color}60` }}>
            {name}
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialTooltip;
