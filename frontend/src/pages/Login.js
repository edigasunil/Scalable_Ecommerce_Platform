import React from "react";

function Login() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="border p-2 w-full"/>
        <input type="password" placeholder="Password" className="border p-2 w-full"/>
        <button className="bg-blue-500 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
}

export default Login;
