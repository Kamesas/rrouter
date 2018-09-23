import React from "react";

const permissionRequired = requiredLevel => Component => {
  const user = JSON.parse(localStorage.user);

  return class extends React.Component {
    render() {
      console.log(this.props);
      if (user.level !== "admin" && requiredLevel === "admin") {
        return null;
      } else {
        return <Component user={user} {...this.props} />;
      }
    }
  };
};

export default permissionRequired;

//localStorage.user = JSON.stringify({level: 'admin', name: 'Vasja'});
