import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <form className="bg-white sm:max-w-2xl sm:p-10 lg:max-w-7xl ml-auto mr-auto p-5 font-serif">
        <h2 className="text-4xl text-center mb-10">Contact Me</h2>

        <div className="flex flex-col items-center bg-blue-900  justify-center gap-10">
          <label className="flex gap-4 mt-10 ">
            First Name:
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-styles w-96"
            />
          </label>

          <label className="flex gap-5 ">
            Last Name:
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-styles w-96 "
            />
          </label>

          <label className="flex gap-12 ">
            E-mail:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-styles w-96"
            />
          </label>

          <label className="flex gap-2">
            Cell Number:
            <input
              value={[phoneNumber]}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input-styles w-96"
            />
          </label>

          <button className="bg-black p-2 text-white rounded-full text-2xl w-80 ml-10 mt-5 mb-10 hover:text-gray-300">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
