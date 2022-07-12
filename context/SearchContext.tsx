import { createContext, useState } from "react";
import axios from "axios";

const SearchContext = createContext<any>(undefined);

export default function SearchProvider({ children }: any) {
  const [searchResults, setSearchResults] = useState(null)

  async function getSearchResults(location: string) {
    console.log('api param', location)
    axios.post("/api/search/" + location).then((res) => {
      setSearchResults(res.data.docs)
    })
  }

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        getSearchResults
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

const SearchConsumer = SearchContext.Consumer;

export { SearchConsumer, SearchContext };