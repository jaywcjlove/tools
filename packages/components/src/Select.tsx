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
          const isObjectOption = typeof item === 'object' && item !== null;
          const label = isObjectOption ? item.label : item;
          const value = isObjectOption ? item.value : item;
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
