import React, { useState } from "react";
import "../App.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextBox from "../reusables/textfields";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const FormPage = ({ props }) => {
  const [firstName, setFirstName] = React.useState();

  const [lastName, setLastName] = React.useState();

  const [value, setValue] = React.useState();

  const [startDate, setStartDate] = useState(new Date());

  const [validError, setValidError] = useState({});

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const firstNameHandleChange = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandleChange = (event) => {
    setLastName(event.target.value);
  };

  const validate = () => {
    let isError = false;

    const validError = {
      validError: {},
    };

    if (firstName === "") {
      isError = true;
      validError.validError.firstName = "firstName cannont be null";
    }

    if (lastName === "") {
      isError = true;
      validError.validError.lastName = "lastName cannont be null";
    }

    if (value === "") {
      isError = true;
      validError.validError.value = "Maritual status cannont be null";
    }

    setValidError({ ...validError.validError });

    return isError;
  };

  let roomData = {
    firstName: firstName,
    lastName: lastName,
    maritualStatus: value,
    date: startDate,
  };

  const location = {
    pathname: "/wellcome",
    state: roomData,
  };

  return (
    <div>
      <h2 className="heading">User Profile Card</h2>
      <form>
        <div className="card">
          <TextBox
            label="First Name"
            value={firstName}
            onChange={(e) => firstNameHandleChange(e)}
            errors={validError.firstName}
          />
          <br></br>
          <br></br>
          <TextBox
            label="Last Name"
            value={lastName}
            onChange={(e) => lastNameHandleChange(e)}
            errors={validError.lastName}
          />
          <br></br>
          <br></br>
          <FormControl component="fieldset">
            <FormLabel component="legend">Maritual status</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="married"
                control={<Radio />}
                label="Married"
              />
              <FormControlLabel
                value="un-married"
                control={<Radio />}
                label="Un-Married"
              />
            </RadioGroup>
          </FormControl>
          <h5 className="heading">User Profile Calender</h5>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <br></br>
          <br></br>
            <Link to={location}>
              <Button type="submit" variant="contained" color="primary">
                OK
              </Button>
            </Link>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
