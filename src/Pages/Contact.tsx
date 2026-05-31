import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [name, setName] =
    useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    alert("Form Submitted");

    navigate("/");
  };

  return (
    <div className="page">
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;