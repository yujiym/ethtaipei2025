import type React from "react";

interface FloatingBoxProps {
  label: string;
  top: string | number;
  left: string | number;
  style?: React.CSSProperties;
}

const FloatingBox: React.FC<FloatingBoxProps> = ({
  label,
  top,
  left,
  style,
}) => {
  const boxStyle: React.CSSProperties = {
    top: top,
    left: left,
    ...style,
  };

  return (
    <div
      className="absolute px-6 py-3 whitespace-nowrap shadow-sm rounded-full text-lg border border-black/5 font-serif"
      style={boxStyle}
    >
      {label}
    </div>
  );
};

export default FloatingBox;
