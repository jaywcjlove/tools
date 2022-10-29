import { Label } from './CheckboxOption';

interface SelectProps
  extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options?: string[] | { label: string; value: string }[];
}
export const Select: React.FC<React.PropsWithChildren<SelectProps>> = ({ children, options = [], ...other }) => (
  <Label>
    <span>
      <select {...other}>
        {options.map((item, key) => {
          const label = item?.label || item;
          const value = item?.value || item;
          return (
            <option value={value} key={`${key} ${value || ''}`}>
              {label}
            </option>
          );
        })}
      </select>
      <span>{children}</span>
    </span>
  </Label>
);
