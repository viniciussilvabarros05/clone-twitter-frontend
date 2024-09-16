import {
  IconDefinition,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
type Props = {
  placeholder: string;
  value?: string;
  password?: boolean;
  onChange?: (newValue: string) => void;
  filled?: boolean;
  icon?: IconDefinition;
};
export const Input = ({
  placeholder,
  password,
  filled,
  value,
  onChange,
  icon,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={`flex items-center h-14 rounded-3xl border-2 border-gray-700 has-[:focus]:border-white ${
        filled && "bg-gray-700"
      }`}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className="ml-4 size-6 text-gray-500" />
      )}
      <input
        type={password && !showPassword ? "password" : "text"}
        className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
      />
      {password && (
        <FontAwesomeIcon
            onClick={()=> setShowPassword(!showPassword)}
          icon={showPassword ? faEye : faEyeSlash}
          className="cursor-pointer mr-4 size-6 text-gray-500"
        />
      )}
    </div>
  );
};
