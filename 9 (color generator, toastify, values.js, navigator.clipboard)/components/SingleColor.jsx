import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const copy = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success("copy");
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("keyboard is unavailable");
    }
  };
  return (
    <div
      onClick={copy}
      className={`m-5 h-20 w-20 ${index > 10 ? "text-white" : "text-black"}`}
      style={{ backgroundColor: "#" + color.hex }}
    >
      #{color.hex}
    </div>
  );
};

export default SingleColor;
