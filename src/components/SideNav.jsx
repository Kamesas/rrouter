import React from "react";
import { NavLink } from "react-router-dom";

import topics from "../data/topics";

function SideNav() {
  return (
    <aside>
      <nav className="sideNav">
        {topics.map(topic => (
          <NavLink
            to={`/books/${topic.id}`}
            activeClassName="activeLink"
            key={topic.id}
          >
            {topic.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default SideNav;
