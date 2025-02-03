interface CategoryProps {
  isSelected: boolean;
  title: string;
  onClick?: () => void;
}

const Category = ({ title, isSelected, onClick }: CategoryProps) => {
  return (
    <p
      onClick={onClick}
      className={`
        md:!text-xl text-sm text-gray-200 font-bold border md:!w-32 w-28 text-center rounded-lg ${
          isSelected ? "border-white" : "border-gray-400"
        }
        p-3 cursor-pointer select-none transition-all active:scale-95
        `}
      style={{
        color: isSelected ? "white" : "gray",
      }}
    >
      {title}
    </p>
  );
};

export default Category;
