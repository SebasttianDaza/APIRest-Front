const ReturnInformation = (string) => {
  if (string === "Embarcaciones") {
    return {
      id: "25",
    };
  }
  if (string === "Users") {
    return {
      userID: "25",
    };
  }
  if (string === "Sales") {
    return {
      saleID: "25",
    };
  }
};

export default ReturnInformation;
