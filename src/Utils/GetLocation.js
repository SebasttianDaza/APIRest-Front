const GetLocation = () => {
  const HOTS_PR = import.meta.env.VITE_HOSTPR;
  const HOTS_LH = import.meta.env.VITE_HOSTLH;
  const response = import.meta.env.DEV ? HOTS_LH : HOTS_PR;

  return response;
};

export default GetLocation;
