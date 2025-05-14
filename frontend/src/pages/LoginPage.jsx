import { useEffect, useRef, useState } from "react";
import {
  Link,
  Form,
  redirect,
  useNavigate,
  useActionData,
} from "react-router-dom";
import { toast } from "sonner";
import { baseApi } from "../../api/base";
import { googleLogin } from "../../api/auth.js";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const data = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setIsLogin(localStorage.jwtToken);
    }
    if (isLogin) {
      navigate("/notes");
    }
  }, [data, isLogin, navigate]);

  async function handleGoogleSignIn() {
    await googleLogin();
    setIsLogin(true);
    toast.success("Logged in with Google");
    navigate("/notes");
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full rounded-lg border border-gray-300 dark:border-gray-700 p-8 bg-white dark:bg-gray-800 shadow-lg">
          <h1 className="text-3xl font-extrabold text-primary mb-6 text-center select-none">
            NoteNest
          </h1>
          <h2 className="text-xl font-semibold mb-6 text-center">
            Login to Your Account
          </h2>

          {/* <!-- Google Authentication Button --> */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50 mb-6"
            onClick={handleGoogleSignIn}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c3.54 0 6.31 1.53 7.76 2.81l5.75-5.75C32.46 3.53 28.63 2 24 2 14.66 2 6.88 7.88 3.56 16.88l6.7 5.23C11.94 15.01 17.37 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.5 24c0-1.58-.14-3.1-.4-4.58H24v8.7h12.7c-.54 2.87-2.1 5.3-4.5 6.93l6.9 5.27C43.85 34.87 46.5 29.88 46.5 24z"
              />
              <path
                fill="#FBBC05"
                d="M10.26 28.11a14.39 14.39 0 0 1 0-8.22v-5.24L3.56 16.9a24 24 0 0 0 0 14.15l6.7-5.23z"
              />
              <path
                fill="#EA4335"
                d="M24 46c6.54 0 12.04-2.17 16.04-5.89l-7.66-5.85c-2.23 1.5-5.05 2.39-8.38 2.39-6.63 0-12.06-5.51-12.49-12.22l-6.7 5.23A23.9 23.9 0 0 0 24 46z"
              />
            </svg>
            <span className="font-semibold">Login with Google</span>
          </button>

          <Form method="POST" className="space-y-5">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoFocus
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                ref={emailRef}
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                ref={passwordRef}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-primary text-white font-semibold hover:bg-pink-600 transition-colors focus:outline-none focus:ring-4 focus:ring-primary/50"
            >
              Log In
            </button>
          </Form>

          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 select-none">
            Don't have an account?
            <Link
              to="/signup"
              className="text-primary hover:underline font-semibold"
            >
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

async function action({ request }) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await baseApi
      .post("/auth/login", { email, password }, request.signal)
      .then((res) => res.data);
    localStorage.setItem("jwtToken", res.data.token);
    toast.success(res.message);
    return redirect("/notes");
  } catch (error) {
    toast.error(error.response?.data?.message);
    return null;
  }
}

export const loginPageRoute = {
  action,
  element: <LoginPage />,
};
