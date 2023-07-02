import { useState, ChangeEvent } from "react";
import { ButtonVariationSelect } from "./ButtonVariationSelect";
import Preview from "./Preview/Preview";

const buttonVariants = [
  { id: "1", name: "Default", class: "btn", text: "Button" },
  { id: "2", name: "Neutral", class: "btn btn-neutral", text: "Neutral" },
  { id: "3", name: "Primary", class: "btn btn-primary", text: "Primary" },
  { id: "4", name: "Secondary", class: "btn btn-secondary", text: "Secondary" },
  { id: "5", name: "Accent", class: "btn btn-accent", text: "Accent" },
  { id: "6", name: "Ghost", class: "btn btn-ghost", text: "Ghost" },
  { id: "7", name: "Link", class: "btn btn-link", text: "Link" },
];

export default function Builder() {
  const [selectedVariant, setSelectedVariant] = useState("btn");

  const selectedButton = buttonVariants.find(
    (variant) => variant.class === selectedVariant
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedVariant(event.target.value);
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <ButtonVariationSelect
          buttonVariants={buttonVariants}
          selectedVariant={selectedVariant}
          handleChange={handleChange}
        />
      </div>

      <div className="w-2/3 p-4">
        <Preview selectedComponent={selectedButton} />
      </div>
    </div>
  );
}
