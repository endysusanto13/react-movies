import PropTypes from "prop-types";
import { Button } from "components/button";
import { useLogout, useAuth } from "domains/auth";

export const LogoutButton = (props) => {
  const logout = useLogout();
  const { status } = useAuth();

  return status === "anonymous" ? null : (
    <Button variant="outline" onClick={logout}>
      {props.children}
    </Button>
  );
};

LogoutButton.propTypes = {
  children: PropTypes.node,
};