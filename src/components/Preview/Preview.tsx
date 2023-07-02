import { useState } from "react";
import TabSwitcher, { TabState } from "../TabSwitcher";
import Wrapper from "./Wrapper";
import PreviewTab from "./PreviewTab";
import MarkupTab from "./MarkupTab";
import { buttonVariants } from "../../constants";
import { useStore } from "../../store/store";

const Preview = () => {
  const {
    preview: { selectedVariant },
  } = useStore();

  const selectedComponent = buttonVariants.find(
    (variant) => variant.class === selectedVariant
  );

  const [tabState, setTabState] = useState<TabState>("preview");

  if (!selectedComponent) {
    return <div>Please select a button variation...</div>;
  }

  const { class: className, text } = selectedComponent;

  let buttonCode = "";
  if (selectedComponent) {
    buttonCode = `<button className="${selectedComponent.class}">${selectedComponent.text}</button>`;
  }

  return (
    <Wrapper>
      <TabSwitcher tabState={tabState} setTabState={setTabState} />
      {tabState === "preview" && (
        <PreviewTab className={className} text={text} />
      )}
      {tabState === "markup" && <MarkupTab code={buttonCode} />}
    </Wrapper>
  );
};

export default Preview;
