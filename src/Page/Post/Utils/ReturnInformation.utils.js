const ReturnInformation = (string) => {
  if (string === "Embarcaciones") {
    return {
      name: "Mac",
      country: "EE.UU",
      continent: "South America ",
      coordinates: "12.43",
      token: "fce618d00f91b95270fa58ecbe9ec4aa",
    };
  }
  if (string === "Users") {
    return {
      username: "Brayan Gym",
      lastname: "Olarte",
      email: "brs@gmail.com",
      embarcacionesID: 12,
      token: "44fd810dd9eeaf9885889ebe8625541d",
    };
  }
  if (string === "Sales") {
    return {
      embarcacionesID: 23,
      quantity: 40,
      token: "44fd810dd9eeaf9885889ebe8625541d",
    };
  }
};

export default ReturnInformation;
