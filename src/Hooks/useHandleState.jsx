import { useState } from "react";

const useHandleState = () => {
  const [show, setShow] = useState("Embarcaciones");
  const [view, setView] = useState("Body");

  const handleChange = (e) => setShow(e.target.value);
  const handleView = (e) => setView(e.target.value);

  return { show, view, handleChange, handleView };
};

export default useHandleState;
