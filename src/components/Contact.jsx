import { useState } from "react";
import Button from "./Button";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);

  const successful = (event) => {
    event.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      phoneNumber.length === 0 ||
      email.length === 0
    ) {
      setError("All information must be provided, please try again");
      return;
    } else if (firstName.length < 2 || lastName < 2) {
      setError("First and Last Name needs to be more than 2 characters");
      return;
    }

    alert(
      `Thank you ${firstName}, your contact form has been submitted! You will be contacted between 1-2 days on the email address provided ${email}.`
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");

    setError("");
  };

  return (
    <>
      <form
        className="bg-white w-full max-w-2xl lg:max-w-7xl ml-auto mr-auto p-8 rounded-md mt-10 font-serif mb-32"
        id="contact"
        onSubmit={successful}
      >
        <h2 className="text-4xl text-center mb-10">Contact Me</h2>

        <div className=" bg-blue-600 flex flex-col items-center justify-center gap-10 font-sans">
          <p className="mt-10 text-lg">
            Please fill out the information below:
          </p>
          <label className="flex gap-4">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-styles w-80 lg:w-96 "
              placeholder="First Name"
            />
          </label>

          <label className="flex gap-5 ">
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-styles w-80 lg:w-96"
              placeholder="Last Name"
            />
          </label>

          <label className="flex gap-12 ">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-styles w-80 lg:w-96"
              placeholder="Email Address"
            />
          </label>

          <label className="flex gap-2">
            <input
              value={[phoneNumber]}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input-styles w-80 lg:w-96"
              placeholder="Phone Number"
            />
          </label>

          {error && <p className="text-white">{error}</p>}

          <button className="bg-black p-2 text-white rounded-full text-2xl w-40 lg:w-80 mt-5 mb-10 hover:text-gray-300">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
