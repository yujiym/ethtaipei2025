import type React from "react";
import FloatingBox from "~/components/home/FloatingBox";

interface FloatingItem {
  id: string;
  label: string;
  top: string | number;
  left: string | number;
}

const floatingItems: FloatingItem[] = [
  { id: "item1", label: "👤 Link in Bio", top: "20%", left: "15%" },
  { id: "item2", label: "💰 Private mony sending", top: "65%", left: "25%" },
  { id: "item3", label: "🪪 Identity", top: "50%", left: "70%" },
  { id: "item4", label: "📁 Portfolio", top: "15%", left: "60%" },
  { id: "item5", label: "🎖️ Reputation", top: "80%", left: "55%" },
];

const FlowContainer = ({ children }: { childern: React.ReactNode }) => {
  return (
    <div className="relative min-h-180 w-full flex justify-center items-center overflow-hidden m-auto">
      {children}
      {floatingItems.map((item) => (
        <FloatingBox
          key={item.id}
          label={item.label}
          top={item.top}
          left={item.left}
        />
      ))}
    </div>
  );
};

export default FlowContainer;
