import React, { useState } from "react";

import styles from './WSMDStyles.module.scss';
import clipboardCopy from 'clipboard-copy';
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export interface CodeBlockProps {
    children?: any;
    className?: any
}


{/* @ts-ignore */}
const WSMDCode = ({className, children, ...props}) => {

    const match = /language-(\w+)/.exec(className || '')
    const isTripleBacktick = /language-(\w+)/.test(className || '');
    const [copied, setCopied] = useState(false);
    
    
    function handleCopy() {
        clipboardCopy(children)
        .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        })
        .catch((error) => {
            console.error('Copy failed:', error);
        });
    }

    if (isTripleBacktick) {
        return (
            <div className={`${styles.WSCodeBlock}`}>
              <button type="button" onClick={handleCopy} className={`${styles.WSCopyButton}`}>
                {copied ? 'Copied' : 'Copy'}
              </button>
              <SyntaxHighlighter
                      language={match ? match[1] : 'javascript'}
                      style={atelierDuneLight}
                      customStyle={{
                        backgroundColor: "transparent",
                        width: "max-content",
                        fontSize: "14px",
                        lineHeight: "1.5rem",
                        padding: "0",
                      }}
                      codeTagProps={{ className: `${styles.syntaxHighlighter}` }}
                    >
                      {children}
                    </SyntaxHighlighter>
            </div>
        )
    }

    else {
        return  <span className={`${styles.WSCodeBlockOneBacktick}`}>{children}</span>
    }
}


export default WSMDCode;