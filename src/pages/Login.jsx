const Login = () => {
  return (
    <main className="page">
      <form
        action=""
        className="border max-w-[600px] h-140 w-[350px]  rounded-lg justify-self-center loginForm "
      >
        <h2 className="text-center  ">LOGIN</h2>
        <div className="flex flex-col gap-5 items-center inputsContainer">
          <div className=" w-full relative w">
            <input
              type="text"
              id="email"
              className=" w-full rounded border-indigo-500 outline-0 bg-indigo-300 text-white "
            />
            <label className="absolute left-2 transition-all" htmlFor="email">
              Email
            </label>
          </div>
          <div className=" w-full relative">
            <input
              type="password"
              id="password"
              className=" w-full rounded border-indigo-500 outline-0 bg-indigo-300 text-white"
            />
            <label
              htmlFor="Password"
              className="absolute left-2 transition-all"
            >
              Password
            </label>
          </div>
        </div>
        <p>Forgot Passord?</p>
        <button type="submit" className="bg-indigo-500 text-white rounded">
          Submit
        </button>
      </form>
    </main>
  );
};
export default Login;
