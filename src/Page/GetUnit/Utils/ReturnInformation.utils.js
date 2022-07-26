const ReturnInformation = (string) => {
  if (string === "Embarcaciones") {
    return [
      {
        id: 25,
        name: "Inte core International",
        country: "Colombia",
        continent: "South America ",
        coordinates: "12.43",
      },
    ];
  }
  if (string === "Users") {
    return [
      {
        userID: 1,
        username: "Juan",
        lastname: "Daza",
        email: "jsebastian@gmail.com",
        embarcacionesID: 1,
      },
    ];
  }
  if (string === "Sales") {
    return [
      {
        saleID: 1,
        embarcacionesID: 1,
        quantity: 5,
      },
    ];
  }
};

export default ReturnInformation;
