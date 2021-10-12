import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FilmIcon, UserCircleIcon } from "@heroicons/react/outline"
import { LogoutButton, useAuth, useUsername } from "domains/auth";

export const NavBar = (props) => {
  const { status } = useAuth();
  const { data : user } = useUsername();

  return(
    <div className="fixed grid grid-cols-3 justify-items-stretch h-12 w-full bg-indigo-700 z-50">
      <div className="flex flex-row items-center justify-start">
          <FilmIcon className="w-12 h-6 text-white pl-4"/> 
        <Link to={"/"} className="pb-0.5">
          <span className="text-white font-sans text-2xl font-semibold tracking-wider pl-2">MOVIES</span>
        </Link>
      </div>
        {props.children}
      <div className="col-start-3 flex flex-row items-center justify-end">
        <span className="text-white font-sans text-lg font-semibold tracking-wider pr-2">
          {status === "authenticated" ? (
            <div className="flex flex-row items-center justify-end">
              <UserCircleIcon className="w-12 h-6 text-white pl-4" />
                <span className="pr-2">
                  {user && user.name}
                </span>
                <LogoutButton>
                  Sign Out
                </LogoutButton>
            </div>
          ) : (
            <Link to={`/login`}>Sign In</Link>
          )}
        </span>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
};