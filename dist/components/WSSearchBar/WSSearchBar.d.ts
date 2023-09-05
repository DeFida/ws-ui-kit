import { FC } from 'react';
export interface SearchResult {
    id: string;
    name: string;
}
interface CustomSearchProps {
    placeholder: string;
    onSearch: (query: string) => Promise<SearchResult[]>;
    onSelect: (result: SearchResult) => void;
    label: string;
}
declare const WSSearchBar: FC<CustomSearchProps>;
export default WSSearchBar;
