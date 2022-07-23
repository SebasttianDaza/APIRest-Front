const ReturnInformation = (string) => {
  if (string === "Embarcaciones") {
    return {
      Embarcaciones: [
        {
          id: 1,
          name: "Colombia SAS",
          country: "Colombia",
          continent: "South America",
          coordinates: "1,1",
        },
        {},
        {},
      ],
    };
  }
  if (string === "Users") {
    return {
      Users: [
        {
          userID: 1,
          username: "Juan",
          lastname: "Daza",
          email: "jsebastian@gmail.com",
          embarcacionesID: 1,
        },
      ],
    };
  }
  if (string === "Sales") {
    return {
      Sales: [
        {
          saleID: 1,
          embarcacionesID: 1,
          quantity: 5,
        },
      ],
    };
  }
};

export default ReturnInformation;
