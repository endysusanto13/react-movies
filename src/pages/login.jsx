import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth, LoginForm, LogoutButton, useUsername } from "domains/auth";

export const LoginPage = () => {
  const { status } = useAuth();
  const { data : user } = useUsername();
  
  switch (status) {
    case "anonymous":
      return(
        <div className="flex flex-col h-screen bg-indigo-50">
          <div className="h-1/6"></div>
          <div><LoginForm /></div>  
        </div>
      )
    case "authenticated":
        return (
          <div className="flex flex-col h-screen bg-indigo-50">
            <div className="h-1/6"></div>
              <div className="mx-auto m-6 bg-gray-50 shadow-xl rounded-lg">
                {user &&
                  <div className="flex flex-col p-16 text-center text-2xl leading-loose text-indigo-600">
                    <span>Welcome <span className="font-bold">{user.name}</span>, you have logged in successfully!</span>
                    <span>Click <Link to={'/'}><span className="text-yellow-500 font-bold">HERE</span></Link> to start browsing movies!</span>
                    <span className="pt-4 pb-2 text-sm text-right text-black italic">Wrong account?</span>
                    <div className="flex flex-row-reverse items-end w-full">
                      <LogoutButton>
                        Sign Out
                      </LogoutButton>
                    </div>
                  </div>
                }
            </div>
         </div>
      )
    default:
  };
};