
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";


function RequireAuth({ children }) {
    return <Navigate to="/auth"/>;
}

export default RequireAuth;