type Props = {
  placeholder: string;
  value?: string;
  password?: boolean;
  onChange?: (newValue: string) => void;
};
export const Input = ({ placeholder,password, value, onChange }: Props) => {
  return (
    <div className="flex flex-items h-14 rounded-3xl border-2 border-gray-700 has-[:focus]:border-white">
      <input
      className="flex-1 outline-none bg-transparent h-full px-4"
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};
