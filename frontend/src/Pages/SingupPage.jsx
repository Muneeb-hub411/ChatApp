const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#753a88] to-[#cc2b5e]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign Up <span className="text-blue-500">Chat App</span>
        </h2>

        <form className="space-y-4">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              className="input input-bordered w-full"
              required
            />
          </div>

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
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="radio radio-primary"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="radio radio-primary"
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <p className="text-sm text-center mt-4">
          Already have an account?
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
