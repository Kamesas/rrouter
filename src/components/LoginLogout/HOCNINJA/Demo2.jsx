import React from "react";
import permissionRequired from "./permissionRequired";

const Demo2 = ({ massage, user }) => (
  <p>
    I am powerfull {massage} for {user.name} only
  </p>
);

export default permissionRequired("admin")(Demo2);
