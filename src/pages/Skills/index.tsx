import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Category from "./components/Category";
import Skill from "./components/Skill";
import { Techs, TechType } from "./consts";

const Skills = () => {
  const categories = Object.keys(Techs)
    .map((tech) => {
      return ((Techs as any)[tech] as any).type;
    })
    .flat()
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);

  const [selectedCategory, setSelectedCategory] = useState<
    TechType[] | "All" | undefined
  >("All");

  const skills = useMemo(() => {
    if (selectedCategory === "All") {
      return Object.values(Techs);
    }
    const techs = Object.values(Techs).filter((tech) => {
      return selectedCategory?.some((category) =>
        tech.type.some((value) => value === category)
      );
    });

    return techs;
  }, [selectedCategory]);

  const selectCategory = (category: TechType | "All") => {
    if (category === "All") {
      if (selectedCategory === "All") {
        setSelectedCategory(undefined);
        return;
      }
      setSelectedCategory("All");
      return;
    }
    setSelectedCategory((prev) => {
      if (prev === "All") {
        const cats = categories.filter((value) => value !== category);
        return cats;
      }

      if (prev?.find((value) => value === category)) {
        return prev.filter((value) => value !== category);
      }
      return [...(prev || []), category];
    });
  };

  useEffect(() => {
    if (selectedCategory?.length == categories.length) {
      setSelectedCategory("All");
    }
  }, [selectedCategory, categories]);

  return (
    <div className="h-full flex items-center gap-10">
      <div className="flex gap-4 flex-col justify-center items-center flex-1">
        <Category
          title={"All"}
          onClick={() => selectCategory("All")}
          isSelected={selectedCategory === "All"}
        />
        {categories.map((category) => (
          <Category
            title={category}
            onClick={() => selectCategory(category)}
            isSelected={
              selectedCategory == "All" ||
              !!selectedCategory?.find((value) => value === category)
            }
          />
        ))}
      </div>

      <div className="flex gap-4 flex-wrap flex-[4] pr-10">
        <AnimatePresence mode="popLayout">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              layout="preserve-aspect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
            >
              <Skill
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
                onClick={
                  skill.link
                    ? () => window.open(skill.link, "_blank")
                    : undefined
                }
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
