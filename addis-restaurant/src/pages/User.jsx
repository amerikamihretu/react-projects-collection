
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function User() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle all input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Clear form
  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // ==================================================
  // SIMULATED GOOGLE SIGN IN / SIGN UP
  // ==================================================
  const handleGoogleAuth = () => {
    // Simulated Google account
    const googleUser = {
      id: Date.now(),
      name: "Mihretu Amerika",
      email: "mihretuamerka@gmail.com",
      provider: "google",
    };

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if Google account already exists
    const existingUser = users.find(
      (user) => user.email === googleUser.email,
    );

    let user;

    if (existingUser) {
      // Existing Google account
      user = existingUser;

      alert(`Welcome back, ${user.name}!`);
    } else {
      // Create new Google account
      users.push(googleUser);

      localStorage.setItem("users", JSON.stringify(users));

      user = googleUser;

      alert("Google account created successfully!");
    }

    // Save logged-in user
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Refresh UI
    window.location.reload();
  };

  // ==================================================
  // FORM SUBMISSION
  // ==================================================
  const handleSubmit = (e) => {
    e.preventDefault();

    // =========================
    // SIGN UP
    // =========================
    if (!isLogin) {
      // Check password confirmation
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Get existing users
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if email already exists
      const existingUser = users.find(
        (user) => user.email === formData.email,
      );

      if (existingUser) {
        alert("An account with this email already exists.");
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        provider: "manual",
      };

      // Add new user
      users.push(newUser);

      // Save users
      localStorage.setItem("users", JSON.stringify(users));

      alert("Account created successfully!");

      // Switch to Login
      setIsLogin(true);

      // Clear form
      clearForm();

      return;
    }

    // =========================
    // LOGIN
    // =========================

    // Get all users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password,
    );

    // No matching account
    if (!user) {
      alert("Invalid email or password.");
      return;
    }

    // Save currently logged-in user
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert(`Welcome back, ${user.name}!`);

    // Clear form
    clearForm();

    // Refresh UI
    window.location.reload();
  };

  // ==================================================
  // LOGOUT
  // ==================================================
  const handleLogout = () => {
    // Remove currently logged-in user
    localStorage.removeItem("currentUser");

    alert("You have been logged out.");

    // Return to login
    setIsLogin(true);

    // Clear form
    clearForm();

    // Refresh UI
    window.location.reload();
  };

  // Get currently logged-in user
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser"),
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-5xl">
        {currentUser ? (
          // ==================================================
          // USER DASHBOARD
          // ==================================================
          <div className="space-y-6">
            {/* Dashboard Header */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-medium text-amber-700">
                    MY ACCOUNT
                  </p>

                  <h1 className="mt-1 text-3xl font-bold text-amber-950">
                    Welcome, {currentUser.name}! 👋
                  </h1>

                  <p className="mt-2 text-gray-600">
                    Manage your account and view your activity.
                  </p>
                </div>

                <button
                  onClick={handleLogout}
                  className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Dashboard Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Account Card */}
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">
                  👤
                </div>

                <h2 className="text-lg font-bold text-gray-900">My Profile</h2>

                <p className="mt-2 text-sm text-gray-500">
                  {currentUser.email}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Account ID: {currentUser.id}
                </p>

                <button className="mt-4 text-sm font-semibold text-amber-700 hover:text-amber-500">
                  Edit Profile →
                </button>
              </div>

              {/* Orders Card */}
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">
                  🛍️
                </div>

                <h2 className="text-lg font-bold text-gray-900">My Orders</h2>

                <p className="mt-2 text-sm text-gray-500">
                  View your previous and current orders.
                </p>

                <button className="mt-4 text-sm font-semibold text-amber-700 hover:text-amber-500">
                  View Orders →
                </button>
              </div>

              {/* Favorites Card */}
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">
                  ❤️
                </div>

                <h2 className="text-lg font-bold text-gray-900">Favorites</h2>

                <p className="mt-2 text-sm text-gray-500">
                  View your favorite restaurant items.
                </p>

                <button className="mt-4 text-sm font-semibold text-amber-700 hover:text-amber-500">
                  View Favorites →
                </button>
              </div>
            </div>

            {/* Account Information */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h2 className="text-xl font-bold text-amber-950">
                Account Information
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>

                  <p className="mt-1 font-medium text-gray-900">
                    {currentUser.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Address</p>

                  <p className="mt-1 font-medium text-gray-900">
                    {currentUser.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Account ID</p>

                  <p className="mt-1 font-medium text-gray-900">
                    {currentUser.id}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Account Status</p>

                  <p className="mt-1 font-medium text-green-600">Active</p>
                </div>
              </div>
            </div>

            {/* Dashboard Actions */}
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <h2 className="text-xl font-bold text-amber-950">
                Account Settings
              </h2>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
                  Edit Profile
                </button>

                <button className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
                  Change Password
                </button>

                <button className="rounded-lg border border-red-200 px-5 py-3 font-medium text-red-600 transition hover:bg-red-50">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        ) : (
          // ==================================================
          // LOGIN / SIGNUP
          // ==================================================
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            {/* Heading */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-amber-950">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>

              <p className="mt-2 text-gray-600">
                {isLogin
                  ? "Login to your Addis Restaurant account"
                  : "Sign up to create your Addis Restaurant account"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name - Sign Up only */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>

              {/* Confirm Password - Sign Up only */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  />
                </div>
              )}

              {/* Forgot Password */}
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm font-medium text-amber-700 hover:text-amber-500"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-700 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-300"></div>

              <span className="px-4 text-sm text-gray-500">OR</span>

              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            {/* Simulated Google Button */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

            {/* Switch Login / Sign Up */}
            <div className="mt-6 text-center text-sm text-gray-600">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="font-semibold text-amber-700 hover:text-amber-500"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="font-semibold text-amber-700 hover:text-amber-500"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

