import Tour from "./Tour";

const Tours = ({ tours, remove }) => {
  return (
    <div className="flex gap-5 flex-col p-12">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} remove={remove} />;
      })}
    </div>
  );
};

export default Tours;
