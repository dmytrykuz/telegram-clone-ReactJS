import React from "react";
import { generateAvatar } from "utils/helpers";

import "./Avatar.sass";

const Avatar = ({ user }) => {
  if (user.avatar) {
    return (
      <img
        className="avatar"
        src={user.avatar}
        alt={`${user.fullname} avatar`}
      />
    );
  } else {
    const { color, colorLighten } = generateAvatar(user.id);
    const userInitials = user.fullname[0];

    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
        className="avatar avatar--initials"
      >
        {userInitials}
      </div>
    );
  }
};

export default Avatar;
