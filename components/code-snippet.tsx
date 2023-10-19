'use client';
import { set } from 'date-fns';
import { useTheme } from 'next-themes';
import React from 'react';
import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialLight,
  atomDark,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ code, language }) => {
  const { theme } = useTheme();
  const [codeTheme, setCodeTheme] = React.useState(theme);
  useEffect(() => {
    if (theme === 'dark') {
      setCodeTheme(atomDark);
    } else {
      setCodeTheme(materialLight);
    }
  });

  return (
    <SyntaxHighlighter language={language} style={codeTheme}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
