import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center mt-10">
        <div className="flex flex-col w-2/4">
          <h1 className="text-4xl mb-8 font-semibold">Sign In</h1>
          <label className="text-xl">Email</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter your email"
            id="email"
            className="border border-black-300 h-12 mt-2 rounded pl-2"
          />
          <label className="mt-5 text-xl">Password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Enter your password"
            id="password"
            className="border border-black-300 h-12 mt-2 rounded pl-2"
          />
          <button className="w-24 bg-black text-white h-10 mt-6 rounded">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
