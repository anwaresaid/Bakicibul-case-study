import { createContext, useContext, useState } from "react";

interface checkboxContext {
  locationchecked: boolean;
  radioValue: string;
  setRadioValue: (value: string) => void;
  setChecked: (checked: boolean) => void;
}

export const InputContext = createContext<checkboxContext | undefined>(
  undefined
);

export const InputProvider = ({ children }: any) => {
  const [locationchecked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  return (
    <InputContext.Provider
      value={{ locationchecked, setChecked, setRadioValue, radioValue }}
    >
      {children}
    </InputContext.Provider>
  );
};

export const useCheck = () => {
  const context = useContext(InputContext);
  if (context === undefined) {
    throw new Error("useCheck must be used within a InputProvider");
  }
  return context.locationchecked;
};

export const useLocationCheck = () => {
  const context = useContext(InputContext);
  if (context === undefined) {
    throw new Error("useLocationCheck must be used within a InputProvider");
  }
  return context.setChecked;
};

export const useRadioValue = () => {
  const context = useContext(InputContext);
  if (context === undefined) {
    throw new Error("useRadioValue must be used within a InputProvider");
  }
  return context.radioValue;
};

export const useSetRadioValue = () => {
  const context = useContext(InputContext);
  if (context === undefined) {
    throw new Error("useSetRadioValue must be used within a InputProvider");
  }
  return context.setRadioValue;
};
