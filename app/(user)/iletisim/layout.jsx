import React from "react";

const ContactLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">{children}</div>
      <div className="col-span-3">
        <h1>Sidebar</h1>
      </div>
    </div>
  );
};

export default ContactLayout;
