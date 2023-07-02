import { ChangeEvent } from "react";
import { ComponentVariant } from "./Preview/Preview";

interface ButtonVariationSelectProps {
  buttonVariants: ComponentVariant[];
  selectedVariant: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const ButtonVariationSelect = ({
  buttonVariants,
  selectedVariant,
  handleChange,
}: ButtonVariationSelectProps) => (
  <select
    className="select w-full max-w-xs"
    value={selectedVariant}
    onChange={handleChange}
  >
    <option disabled selected>
      Pick a variant
    </option>
    {buttonVariants.map((variant) => (
      <option key={variant.id} value={variant.class}>
        {variant.name}
      </option>
    ))}
  </select>
);
