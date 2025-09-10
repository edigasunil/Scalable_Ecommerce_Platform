import React from "react";

function Register() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="border p-2 w-full"/>
        <input type="email" placeholder="Email" className="border p-2 w-full"/>
        <input type="password" placeholder="Password" className="border p-2 w-full"/>
        <button className="bg-green-500 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
}

export default Register;
