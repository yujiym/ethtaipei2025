export default function Skill({ skills }: { skills: string }) {
  if (!skills) return null;

  const skillArray = skills.split(",").map((skill) => skill.trim());

  return (
    <div className="rounded-xl border border-black/5 px-8 py-6 bg-white h-auto w-full flex-1">
      <h3 className="font-serif text-2xl font-bold">🎓 Skills</h3>
      <div className="flex flex-wrap gap-3 py-4">
        {skillArray.map((skill) => (
          <Item key={`skill-${skill}`}>{skill}</Item>
        ))}
      </div>
    </div>
  );
}

const Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border border-black/5 rounded-full px-4 py-2 bg-white">
      <button type="button" onClick={() => console.log("aaaa")}>
        {children}
      </button>
    </span>
  );
};
