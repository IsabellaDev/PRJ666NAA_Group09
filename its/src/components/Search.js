import { SearchInput } from 'evergreen-ui';

export default function Search({ query, onChange }) {
    return (
     <SearchInput placeholder="Enter ticket number, for example: 2342888919"
       width="80%"
       autoFocus
       value={query} 
       onChange={onChange}
     />
    );
}