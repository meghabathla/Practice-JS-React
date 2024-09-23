import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toogle, setToogle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToogle() {
      setToogle(!toogle);
    },
  }));
  return (
    <div>
      <button>Button from Child</button>
      {toogle && <span>Toogle</span>}
    </div>
  );
});

export default Button;
