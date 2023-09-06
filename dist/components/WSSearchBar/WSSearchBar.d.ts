import { FC } from 'react';
export interface SearchResult {
    id: string;
    name: string;
}
interface WSSearchBarProps {
    placeholder: string;
    onSearch: (query: string) => Promise<SearchResult[]>;
    onSelect: (result: SearchResult) => void;
    label: string;
    intermediate?: boolean;
    defaultResults?: SearchResult[];
}
declare const WSSearchBar: FC<WSSearchBarProps>;
export default WSSearchBar;
