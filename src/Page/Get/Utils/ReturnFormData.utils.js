const Form = [
  {
    value: "Embarcaciones",
    text: `${window.location.origin}/embarcaciones?page=1`,
  },
  {
    value: "Users",
    text: `${window.location.origin}/users?page=1`,
  },
  {
    value: "Sales",
    text: `${window.location.origin}/sales?page=1`,
  },
];

const ReturnFormData = () => Form;

export default ReturnFormData;
