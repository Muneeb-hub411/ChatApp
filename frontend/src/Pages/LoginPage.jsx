import { useState } from "react";
import useLogin from "../hooks/UseLogIn";
import { Link } from "react-router-dom";

const Login = () => {
  // Separate states for username and password
  const { loading, login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle input changes individually
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    console.log("Form submitted", { username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#753a88] to-[#cc2b5e]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to <span className="text-blue-500">Chat App</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered w-full"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Don't have an account */}
        <Link
          to="/signup"
          className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
        >
          {"Don't"} have an account?
        </Link>
      </div>
    </div>
  );
};

export default Login;
