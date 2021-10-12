import * as React from "react";
import { RegisterForm } from "domains/auth";

export const RegisterPage = () => {
  return(
    <div className="flex flex-col h-screen bg-indigo-50">
      <div className="h-8"></div>
      <div><RegisterForm /></div>  
    </div>
  )
};