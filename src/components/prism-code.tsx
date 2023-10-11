import React from "react";
interface PrismCodeProps {
  children: React.ReactNode;
}

const PrismCode: React.FC<PrismCodeProps> = ({ children }) => {
  return (
    <pre className="p-4 line-numbers language-html">
      <code className="language-html text-gray-50">{children}</code>
    </pre>
  );
};

export default PrismCode;
