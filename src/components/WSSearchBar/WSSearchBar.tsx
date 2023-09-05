import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';

import WSInput from '../WSInput/WSInput';
import styles from './WSSearchBar.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';

export interface SearchResult {
    id: string;
    name: string;
}
  
  interface CustomSearchProps {
    placeholder: string;
    onSearch: (query: string) => Promise<SearchResult[]>;
    onSelect: (result: SearchResult) => void;
    label: string;
    intermediate?: boolean;
    defaultResult?: SearchResult[] | null;
  }
  

const WSSearchBar: FC<CustomSearchProps> = ({ placeholder, defaultResult=null, onSearch, onSelect, label, intermediate=false, ...props }) => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>(defaultResult ? defaultResult : []);
    const [showResults, setShowResults] = useState(false);
  
    useEffect(() => {
        const search = async () => {
          if (query.trim() === '') {
            setResults([]);
            setShowResults(false)
            return;
          }
    
          try {
            const searchResults = await onSearch(query);
            setResults(searchResults);
            setShowResults(true);
          } catch (error) {
            console.error('Search error:', error);
          }
        };
    
        search();
    }, [query, onSearch]);
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    
    const handleInputBlur = () => {
        // Delay hiding the results to allow for selection
        setTimeout(() => {
          setShowResults(false);
        }, 200);
    };

    const handleFocus = () => {
        if (defaultResult){
            setShowResults(true)
        }
    }

    const handleSelectResult = (result: SearchResult) => {
        setQuery(result.name); // Populate input with selected result
        onSelect(result); // Callback to handle the selected result
        setShowResults(false);
    };

    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && results.length > 0) {
          handleSelectResult(results[0]); // Select the first result on Enter key press
        }
    };

    return (
        <div className={`${styles.WSSearchBar}`}>
            <WSInput name='searchInput' intermediate={intermediate} onFocus={handleFocus} autoComplete='off' id='searchInput' placeholder={placeholder} label={label} value={query} change={() => {}} onChange={handleInputChange} onBlur={handleInputBlur} onKeyDown={handleInputKeyDown}  {...props} />
            {showResults && (
                <ul className={`${styles.results}  ${intermediate && styles.intermediateResults}`}>
                    {
                    Array.from(results).length < 1 && query.length !== 0
                        ?
                            <WSParagraph style={{margin: 0, padding: '.5rem'}}>Нет данных</WSParagraph>
                        :
                            Array.from(results).map((result) => {
                                return  <li key={result.id} className={`${styles.result}`} onClick={() => handleSelectResult(result)}>
                                            {result.name}
                                        </li>
                            })
                    }
                </ul>
            )}
        </div>
    );
};

export default WSSearchBar;