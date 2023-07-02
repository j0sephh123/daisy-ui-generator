import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => (
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
    <div className="grid">{children}</div>
  </div>
);

export default Wrapper;
