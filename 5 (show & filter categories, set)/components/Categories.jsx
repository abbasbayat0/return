const Categories = ({ allCategories, filter }) => {
  return (
    <div className="flex gap-5 text-blue-700 cursor-pointer select-none">
      {allCategories.map((category) => {
        return (
          <p
            onClick={() => {
              filter(category);
            }}
          >
            {category}
          </p>
        );
      })}
    </div>
  );
};

export default Categories;
