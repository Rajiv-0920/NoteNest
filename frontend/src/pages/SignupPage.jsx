import { Form, Link, redirect } from "react-router-dom";
import { toast } from "sonner";
import { baseApi } from "../../api/base";
import { PublicRoute } from "../routes/PrivateRoute";

function SignupPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-lg border border-gray-300 dark:border-gray-700 p-8 bg-white dark:bg-gray-800 shadow-lg">
        <h1 className="text-3xl font-extrabold text-primary mb-6 text-center select-none">
          NoteNest
        </h1>
        <h2 className="text-xl font-semibold mb-6 text-center">
          Sign Up to Your Account
        </h2>

        <Form method="post" className="space-y-5">
          <div>
            <label htmlFor="username" className="block mb-1 font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="confirm_password"
              className="block mb-1 font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-pink-600 transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            Create Account
          </button>
        </Form>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 select-none">
          Already have an account?
          <Link
            to="/login"
            className="text-primary hover:underline font-semibold"
          >
            {" "}
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

async function action({ request }) {
  const formData = await request.formData();

  const userData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm_password"),
  };

  try {
    const res = await baseApi
      .post("/auth/signup", userData, request.signal)
      .then((res) => res.data);
    localStorage.setItem("jwtToken", res.token);

    toast.success("You're in! Account created successfully!");
    return redirect("/");
  } catch (error) {
    toast.error(error.response?.data?.message);
    return null;
  }
}

export const signupPageRoute = {
  action,
  element: (
    <PublicRoute>
      <SignupPage />
    </PublicRoute>
  ),
};
