import { ChangeEvent } from "react";
import { buttonVariants } from "../constants";
import { setSelectedVariant } from "../store/previewActions";
import { useStore } from "../store/store";

export const ButtonVariationSelect = () => {
  const {
    preview: { selectedVariant },
  } = useStore();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedVariant(event.target.value);
  };

  return (
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
};
