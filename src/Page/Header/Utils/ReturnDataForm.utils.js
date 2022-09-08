const Form = [
  {
    type: "select",
    label: "",
    controlId: "formBasicRequest",
    selectSettings: {
      ariaLabel: "Choose request type",
      options: [
        {
          value: "ships",
          text: "Ships",
        },
        {
          value: "users",
          text: "Users",
        },
        {
          value: "sales",
          text: "Sales",
        },
      ],
    },
  },
];

const ReturnDataForm = () => Form;

export default ReturnDataForm;
