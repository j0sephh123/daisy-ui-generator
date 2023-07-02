interface PreviewTabProps {
  className: string;
  text: string;
}

const PreviewTab = ({ className, text }: PreviewTabProps) => (
  <div className="tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]">
    <div className="bg-base-300 rounded-b-box rounded-tr-box relative overflow-x-auto">
      <div className="preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined">
        <button className={className}>{text}</button>
      </div>
    </div>
  </div>
);

export default PreviewTab;
