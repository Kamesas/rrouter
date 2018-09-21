import React from "react";
import permissionRequired from "./permissionRequired";

const Demo2 = ({ massage }) => <p>I am powerfull {massage} for admin only</p>;

export default permissionRequired("admin")(Demo2);
