import clsx from "clsx";

export type TabState = "preview" | "markup";

interface TabSwitcherProps {
  tabState: TabState;
  setTabState: React.Dispatch<React.SetStateAction<TabState>>;
}

const TabSwitcher = ({ tabState, setTabState }: TabSwitcherProps) => (
  <div className="tabs z-10 -mb-px">
    <button
      onClick={() => setTabState("preview")}
      className={clsx(
        "tab tab-lifted [--tab-bg:hsl(var(--b1))]",
        tabState === "preview" && "tab-active"
      )}
    >
      Preview
    </button>
    <button
      onClick={() => setTabState("markup")}
      className={clsx(
        "tab tab-lifted [--tab-border-color:transparent]",
        tabState === "markup" && "tab-active"
      )}
    >
      JSX
    </button>
  </div>
);

export default TabSwitcher;
