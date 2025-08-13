import React from "react";
import { Switch,Label,Field } from "@headlessui/react";

import "./Toggle.css";

function Toggle({label, enabled, onChange}) {
  return (
    <Switch.Group className="toggle">
      <div className="toggle__container">
        <Switch.Label className="toggle__label">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`toggle__switch ${
            enabled ? "toggle__switch--enabled" : "toggle__switch--disabled"
          }`}
        >
          <span
            className={`toggle__handle ${
              enabled ? "toggle__handle--enabled" : "toggle__handle--disabled"
            }`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default Toggle;
