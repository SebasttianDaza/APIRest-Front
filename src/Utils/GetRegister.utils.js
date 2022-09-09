const GetRegister = () => {
  const REGISTER_PR = import.meta.env.VITE_REGISTERPR;
  const REGISTER_LH = import.meta.env.VITE_REGISTERLH;
  const response = import.meta.env.DEV ? REGISTER_LH : REGISTER_PR;

  return response;
};

export default GetRegister;
