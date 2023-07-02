import clsx from "clsx";
import { useState } from "react";
import CodeBlock from "./CodeBlock";

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
  const [state, setState] = useState(1);

  if (!selectedComponent) {
    return <div>Please select a button variation...</div>;
  }

  const { class: className, text } = selectedComponent;

  return (
    <div
      className="component-preview not-prose text-base-content my-6 lg:my-12"
      id="button"
    >
      <div className="pb-2 text-sm font-bold">
        <a className="opacity-20 hover:opacity-60" href="#button">
          #
        </a>
        <span className="component-preview-title">Button</span>
      </div>
      <div className="grid">
        <div className="tabs z-10 -mb-px">
          <button
            onClick={() => setState(1)}
            className={clsx(
              "tab tab-lifted [--tab-bg:hsl(var(--b1))]",
              state === 1 && "tab-active"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setState(2)}
            className={clsx(
              "tab tab-lifted [--tab-border-color:transparent]",
              state === 2 && "tab-active"
            )}
          >
            JSX
          </button>
        </div>
        {state === 1 && (
          <div className="tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]">
            <div className="bg-base-300 rounded-b-box rounded-tr-box relative overflow-x-auto">
              <div className="preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined">
                <button className={className}>{text}</button>
              </div>
            </div>
          </div>
        )}
        {state === 2 && (
          <CodeBlock
            code={`<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Button</button>
<button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button>
<button className="btn btn-ghost">Button</button>
<button className="btn btn-link">Button</button>`}
          />
        )}
      </div>
    </div>
  );
};

export default Preview;
