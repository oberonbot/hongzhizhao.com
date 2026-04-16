'use client';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialLight,
  atomDark,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  code: string;
  language: string;
}

const CodeSnippet = ({ code, language }: CodeSnippetProps) => {
  const { theme } = useTheme();
  const [codeTheme, setCodeTheme] = React.useState<Record<string, React.CSSProperties>>(
    theme === 'dark' ? atomDark : materialLight
  );

  useEffect(() => {
    setCodeTheme(theme === 'dark' ? atomDark : materialLight);
  }, [theme]);

  return (
    <SyntaxHighlighter language={language} style={codeTheme}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
