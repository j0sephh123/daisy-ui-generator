import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type CodeBlockProps = {
  code: string;
};

const CodeBlock = ({ code }: CodeBlockProps) => (
  <div className="relative">
    <svg
      onClick={() => navigator.clipboard.writeText(code)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer w-8 h-8 text-gray-600 absolute top-0 right-0"
    >
      <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
      <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
    </svg>
    <SyntaxHighlighter language={"js"} style={atomOneDark}>
      {code.replace(/\\n/g, "\n")}
    </SyntaxHighlighter>
  </div>
);

export default CodeBlock;
