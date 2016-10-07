import React from "react";

export default ({ photo }) => {
  return (
    <div>
      {"photo component"}
      <img src={photo.url} />
    </div>
  );
};
