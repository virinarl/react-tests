import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleChanges = ({ target }) => {
    setValues({ ...values, [target.name]: target.name });
  };

  return [values, handleChanges];
};

export default useForm;
