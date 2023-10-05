import React, { useEffect, useRef, useState } from "react";

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
    
    const [isHighlight, setHighlight] = useState(!isTripleBacktick && ((children.toString()).split(' '))[0] === 'highlight')
    
    
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

    if (isHighlight) {

      const term = (((children.toString()).split(' ')).splice(1)).join(' ');
      const content = term.split('$ws-description')
      const termRef = useRef<HTMLSpanElement | null>(null);
      const descriptionRef = useRef<HTMLSpanElement | null>(null);
      const [showDescription, setShowDescription] = useState(false);
    
      const toggleDescription = () => {
        setShowDescription(!showDescription);
      };
    
      useEffect(() => {
        const termElement = termRef.current;
        const descriptionElement = descriptionRef.current;
    
        if (termElement && descriptionElement) {
          const termRect = termElement.getBoundingClientRect();
          const descriptionRect = descriptionElement.getBoundingClientRect();
    
          // Check if there is enough space below the term element
          if (termRect.bottom + descriptionRect.height > window.innerHeight) {
            // Display description above the term element
            descriptionElement.style.bottom = `calc(${termRect.height}px + .75rem)`;
            descriptionElement.style.top = 'auto';
          } else {
            // Display description below the term element
            descriptionElement.style.top = `calc(${termRect.height}px + .75rem)`;  
            descriptionElement.style.bottom = 'auto';
          }
    
          // Check if there is enough space on the left side of the page
          if (termRect.left + descriptionRect.width > window.innerWidth) {
            // Translate description to the left to keep it visible
            descriptionElement.style.transform = `translateX(-${termRect.left + descriptionRect.width - window.innerWidth}px)`;
          }
        }
      }, [showDescription]);
    
      return (
        <span className={`${styles.WSHighlight}`} onMouseEnter={toggleDescription} onMouseLeave={toggleDescription}>
          <span className={`${styles.WSText}`} ref={termRef}>
            {(content[0]).trim()}
          </span>
          <span className={`${styles.WSDescription}`} ref={descriptionRef} style={{ display: showDescription ? 'flex' : 'none' }}>
            {(content[1]).trim()}
          </span>
        </span>
      );
    
    }

    else if (isTripleBacktick) {
        return (
            <div className={`${styles.WSCodeBlock}`}>
              <button type="button" onClick={handleCopy} className={`${styles.WSCopyButton}`}>
                {copied ? 'Copied' : 'Copy'}
              </button>
              <div className={`${styles.highlighter}`}>
                <SyntaxHighlighter
                  language={match ? match[1] : 'javascript'}
                  style={atelierDuneLight}
                  customStyle={{
                    backgroundColor: "transparent",
                    width: "min-content",
                    overflowWrap: "break-word",
                    wordBreak: "break-all",
                    whiteSpace: "normal",
                    fontSize: "14px",
                    lineHeight: "1.5rem",
                    padding: "0",
                  }}
                  codeTagProps={{ className: `${styles.syntaxHighlighter}` }}
                >
                  {children}
                </SyntaxHighlighter>
              </div>
              
            </div>
        )
    }

    else {
        return  <span className={`${styles.WSCodeBlockOneBacktick}`}>{children}</span>
    }
}


export default WSMDCode;