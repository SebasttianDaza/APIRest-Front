const objOrignal = [
  { tr: ["Name", "Email", "Phone"] },
  [
    ["Name", "Email", "Phodfsdne"],
    ["Name", "Desc", "Phone"],
  ],
];

const ReturnInformationTable = (string) => {
  let obj;

  if (string === "Embarcaciones") {
    obj = [
      { tr: ["Name", "Description", "Type"] },
      [
        ["ID", "Identity unique every element", "Integer"],
        ["Name", "Name every ship", "String"],
        ["Country", "Country every ship", "String"],
        ["Continent", "Continent every ship", "String"],
        ["Coordinates", "Coordinates every ship", "String"],
      ],
    ];
  }

  if (string === "Users") {
    obj = [
      { tr: ["Name", "Email", "Phone"] },
      [
        ["userID", "Identity unique every element", "Integer"],
        ["username", "Username of the property every ship", "String"],
        ["lastname", "Lastname of the property every ship", "String"],
        ["email", "Email every user", "String"],
        ["embarcacionesID", "Identity unique every ship", "Integer"],
      ],
    ];
  }

  if (string === "Sales") {
    obj = [
      { tr: ["Name", "Email", "Phone"] },
      [
        ["saleID", "Identity unique every sale", "Integer"],
        ["embarcacionesID", "Identity unique every ship", "Intenger"],
        ["userID", "Identity unique every user", "Integer"],
      ],
    ];
  }

  return obj || objOrignal;
};

export default ReturnInformationTable;

/**
 * {
    thead: {
      tr: {
        th: "Name",
        th: "Email",
        th: "Phone",
      },
    },
    tbody: {
      tr: {
        td: "Name",
        td: "Email",
        td: "Phone",
      },
      tr: {
        td: "Name",
        td: "Email",
        td: "Phone",
      },
    },
  };
 */
