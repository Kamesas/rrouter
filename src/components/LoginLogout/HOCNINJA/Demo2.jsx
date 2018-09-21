import React from "react";
import permissionRequired from "./permissionRequired";

const Demo2 = () => <p>I am powerfull component for admin only</p>;

export default permissionRequired(Demo2, "admin");
