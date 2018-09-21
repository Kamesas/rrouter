import React from "react";

const permissionRequired = requiredLevel => Component => {
  const user = JSON.parse(localStorage.user);

  return class extends React.Component {
    render() {
      if (user.level !== "admin" && requiredLevel === "admin") {
        return null;
      } else {
        return <Component {...this.props} />;
      }
    }
  };
};

export default permissionRequired;

//localStorage.user = JSON.stringify({level: 'admin', name: 'Vasja'});
