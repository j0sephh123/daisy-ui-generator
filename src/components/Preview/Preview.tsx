import { useState } from "react";
import TabSwitcher, { TabState } from "../TabSwitcher";
import Wrapper from "./Wrapper";
import PreviewTab from "./PreviewTab";
import MarkupTab from "./MarkupTab";

export interface ComponentVariant {
  id: string;
  name: string;
  class: string;
  text: string;
}

interface PreviewProps {
  selectedComponent: ComponentVariant | undefined;
}

const Preview = ({ selectedComponent }: PreviewProps) => {
  const [tabState, setTabState] = useState<TabState>("preview");

  if (!selectedComponent) {
    return <div>Please select a button variation...</div>;
  }

  const { class: className, text } = selectedComponent;

  return (
    <Wrapper>
      <TabSwitcher tabState={tabState} setTabState={setTabState} />
      {tabState === "preview" && <PreviewTab className={className} text={text} />}
      {tabState === "markup" && (
        <MarkupTab code={`<button className="btn">Button</button>`} />
      )}
    </Wrapper>
  );
};

export default Preview;