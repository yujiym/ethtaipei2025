export default function Skill() {
  return (
    <div className="rounded-xl border border-black/5 shadow-sm px-8 py-6 bg-white h-auto max-w-full col-span-2 md:col-span-1">
      <h3 className="font-serif text-2xl font-bold">🎓 Skills</h3>
      <li className="flex items-center gap-2 pt-6">
        <Item>React</Item>
        <Item>UI/UX</Item>
        <Item>Skill</Item>
      </li>
    </div>
  );
}

const Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="border border-black/5 rounded-full px-3 py-1">
      <a href="/">{children}</a>
    </span>
  );
};
