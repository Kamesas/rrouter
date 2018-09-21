import React from "react";
import permissionRequired from "./permissionRequired";

const Demo1 = () => <p>I am powerfull component for everyone</p>;

export default permissionRequired("everyone")(Demo1);
