const useCheck = (data) => {
  const check = (number) => {
    if (number < 0) {
      const newIndex = data.length - 1;
      return newIndex;
    }

    if (number > data.length - 1) {
      const newIndex = 0;
      return newIndex;
    }
    return number;
  };
  return check;
};

export default useCheck;
