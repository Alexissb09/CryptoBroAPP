import { useState } from "react";
  
export const FiatSelector = () => {
  const [isUsd, setIsUsd] = useState(true);

  const handleChangeFIAT = (e) => {
    e.target.value == "USD" ? setIsUsd(true) : setIsUsd(false);
  };

  return (
    <select className="form-select" onChange={(e) => handleFiatChange(e)}>
      <option value={"USD"}>USD</option>
      <option value={"ARS"}>ARS</option>
    </select>
  );
};
