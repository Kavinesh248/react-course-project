import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-2 py-2 text-sm text-stone-600 sm:text-xl md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 rounded-full border border-stone-300 bg-white px-6 py-2 text-stone-600 focus:outline-yellow-500"
      />

      {username !== "" && (
        <div>
          <button
            onClick={() => navigate("/cart")}
            className="text-md mt-6 cursor-pointer rounded-full bg-yellow-400 px-6 py-3 uppercase"
          >
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
