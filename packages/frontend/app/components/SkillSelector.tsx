import { getInputProps } from "@conform-to/react";
import { useState } from "react";
import { SKILLS } from "~/lib/calls";

interface SkillSelectorProps {
  initialValue?: string;
  onChange?: (skills: string) => void;
  field: any;
}

export default function SkillSelector({
  field,
  initialValue = "",
  onChange,
}: SkillSelectorProps) {
  // Parse initial comma-separated values into array
  const initialSkills = initialValue
    ? initialValue.split(",").map((s) => s.trim())
    : [];
  const [selectedSkills, setSelectedSkills] = useState<string[]>(initialSkills);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => {
      const isSelected = prev.includes(skill);
      const newSelection = isSelected
        ? prev.filter((s) => s !== skill)
        : [...prev, skill];

      // Call onChange with comma-separated string if provided
      if (onChange) {
        onChange(newSelection.join(", "));
      }

      return newSelection;
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-3 py-4">
        {SKILLS.map((skill) => (
          <button
            key={skill}
            type="button"
            onClick={() => toggleSkill(skill)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              selectedSkills.includes(skill)
                ? "bg-white text-teal-500 border-teal-500"
                : "bg-white text-gray-950 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Hidden input to store the comma-separated skills for form submission */}
      <input
        {...getInputProps(field, { type: "hidden" })}
        type="hidden"
        name="skills"
        value={selectedSkills.join(", ")}
      />
    </div>
  );
}
