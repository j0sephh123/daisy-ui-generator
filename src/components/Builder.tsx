import { ButtonVariationSelect } from "./ButtonVariationSelect";
import Preview from "./Preview/Preview";

export default function Builder() {
  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <ButtonVariationSelect />
      </div>

      <div className="w-2/3 p-4">
        <Preview />
      </div>
    </div>
  );
}
