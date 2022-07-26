const ReturnJson = (string) => {
  if (string === "Body") {
    return {
      username: "yourusername",
      password: "yourpassword",
    };
  }
  if (string === "Preview") {
    return {
      status: "ok",
      result: {
        id: 1,
        status: "active",
        token: "yourtoken",
      },
    };
  }
};

export default ReturnJson;
