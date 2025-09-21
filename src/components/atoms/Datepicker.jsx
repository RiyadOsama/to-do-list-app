import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker({ value, onChange }) {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      timeInputLabel="Time:"
      dateFormat="dd/MM/yyyy h:mm aa"
      showTimeInput
    />
  );
}

export default Datepicker;
