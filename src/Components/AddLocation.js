import React from "react";

function AddLocation() {
  return (
    <div className="add-location">
      <div className="add-location__search">
        <input
          placeholder="Delhi, London, New York and many more..."
          type="text"
          className="add-location__input"
        />
        <i className="fas fa-search add-location__icon" />
      </div>
    </div>
  );
}
export default AddLocation;
