import React, { useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <section className="flex lg:flex-row flex-col justify-between bg-black text-white font-poppins md:w-[95%] lg:w-[88%] w-full sm:max-w-screen-xl shadow-lg shadow-gray-500 rounded mx-auto my-28 py-14 lg:px-10 px-4">
      <div className=" sm:mr-10 text-left">
        <div className="flex">
          <IconContext.Provider value={{ size: "2.8em" }}>
            <FaTelegramPlane />
          </IconContext.Provider>
          <p className="sm:text-4xl text-3xl font-bold ml-2 mb-3">Sign up to My Newsletter</p>
        </div>
        <p>
          {
            "If you're into JavaScript, React, Next js, TailwindCSS, and anything related to self-learning, self-help, and much more, then consider joining my Newsletter. "
          }
        </p>
      </div>

      <div className="sm:ml-3 flex flex-col sm:flex-row mt-5 sm:mt-0 pt-3">
        <form onSubmit={subscribe}>
          <div className="flex justify-center items-center sm:flex-row flex-col">
            <div className="flex items-center  ">
              <input
                id="email-input"
                name="email"
                placeholder="Enter your Email"
                ref={inputEl}
                required
                type="email"
                className="h-10 font-poppins rounded-md sm:w-[300px] w-[90%] bg-white mb-3 p-3 sm:mr-3 mx-auto sm:mx-0"
              />
            </div>
            <button
              type="submit"
              className="bg-white mb-3 text-black rounded-md p-2 shadow-gray-500 font-extrabold shadow-sm hover:bg-gray-200"
            >
              Subscribe
            </button>
          </div>

          <div className="mx-auto text-center">
            <small className="text-xs">
              {message ? message : `I'll not be sending any spam Emails`}
            </small>
          </div>
        </form>
      </div>
    </section>
  );
}
