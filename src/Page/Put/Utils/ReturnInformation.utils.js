const ReturnInformation = (string) => {
  if (string === "Embarcaciones") {
    return {
      id: "25",
      name: "Optional",
      country: "Optional",
      continent: "Optional",
      coordinates: "Optional",
      token: "Your-token",
    };
  }
  if (string === "Users") {
    return {
      userID: "25",
      username: "Optional",
      lastname: "Optional",
      email: "Optional",
      embarcacionesID: "Optional",
      token: "Your-token",
    };
  }
  if (string === "Sales") {
    return {
      saleID: "25",
      embarcacionesID: "Optional",
      quantity: "Optional",
      token: "Your-token",
    };
  }
};

export default ReturnInformation;
