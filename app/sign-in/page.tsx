import React from "react";
import Navigation from "@/components/Navigation";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Navigation /> {/* Include Navigation component */}
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-slate-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-white text-center">Login</h1>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-white rounded-lg bg-slate-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-white rounded-lg bg-slate-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-white rounded-lg bg-slate-700 text-white font-semibold shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
