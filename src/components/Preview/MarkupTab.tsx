import CodeBlock from "../CodeBlock";

interface MarkupTabProps {
  code: string;
}

const MarkupTab = ({ code }: MarkupTabProps) => <CodeBlock code={code} />;

export default MarkupTab;