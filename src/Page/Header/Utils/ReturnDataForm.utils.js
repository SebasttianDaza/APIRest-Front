const Form = [
  {
    type: "select",
    label: "",
    controlId: "formBasicRequest",
    selectSettings: {
      ariaLabel: "Choose request type",
      options: [
        {
          value: "Embarcaciones",
          text: "Embarcaciones",
        },
        {
          value: "Users",
          text: "Users",
        },
        {
          value: "Sales",
          text: "Sales",
        },
      ],
    },
  },
];

const ReturnDataForm = () => Form;

export default ReturnDataForm;
