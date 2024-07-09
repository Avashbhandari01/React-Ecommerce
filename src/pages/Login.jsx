import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      toast.error("Enter all the textfields!");
      return;
    }

    if (
      credentials.username !== "mor_2314" ||
      credentials.password !== "83r5^_"
    ) {
      toast.error("Invalid credentials!");
      return;
    }

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: credentials.username,
        password: credentials.password,
      })
      .then((response) => {
        setCredentials({ username: "", password: "" });
        login(JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => {
        toast.error("Invalid credentials!");
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex items-center justify-center mt-10">
        <div className="flex flex-col w-2/4 p-10 border border-stone-300 rounded">
          <h1 className="text-4xl mb-4 font-semibold">Sign In</h1>
          <div className=" flex flex-row gap-5 mb-5 mt-2">
            <p>Username: mor_2314</p>
            <p>Password: 83r5^_</p>
          </div>
          <label className="text-xl">Username</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter your username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
            className="border border-black-300 h-12 mt-2 rounded pl-2 focus:outline-none"
          />
          <label className="mt-5 text-xl">Password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Enter your password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
            className="border border-black-300 h-12 mt-2 rounded pl-2 focus:outline-none"
          />
          <button
            className="w-24 bg-black text-white h-10 mt-6 rounded"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </>
  );
}

export default Login;
