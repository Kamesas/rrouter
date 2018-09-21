import React from "react";

export default function permissionRequired(Component, requiredLevel) {
  const user = JSON.parse(localStorage.user);

  return class extends React.Component {
    render() {
      if (user.level !== "admin" && requiredLevel === "admin") {
        return null;
      } else {
        return <Component />;
      }
    }
  };
}

//localStorage.user = JSON.stringify({level: 'admin', name: 'Vasja'});
