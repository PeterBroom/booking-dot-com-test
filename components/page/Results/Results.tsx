import { useContext, useState, useEffect, useRef } from 'react'
import { SearchContext } from '@/context/SearchContext'
import ResultsItem from './ResultsItem'
import s from './Results.module.scss'


const useKeyPress = function(targetKey: any) {
    const [keyPressed, setKeyPressed] = useState(false);
  
    function downHandler({ key }: any) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
  
    const upHandler = ({ key }: any) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
  
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });
  
    return keyPressed;
};

export default function Results({searchInputRef}: any) {
    const { searchResults } = useContext(SearchContext);

  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const tabPress = useKeyPress("Tab");
  const [selected, setSelected] = useState(0);
  const [cursor, setCursor] = useState(0);

  // Use down arrow to iterate list
  useEffect(() => {
    if (searchResults && searchResults.length && downPress) {
      setCursor(prevState => (prevState < searchResults.length - 1 ? prevState + 1 : prevState));
    }
  }, [downPress, searchResults]);

  // Use up arrow to iterate list
  useEffect(() => {
    if (searchResults && searchResults.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [searchResults, tabPress, upPress]);

  // Disable cursor if user is using 'Tab' to iterate list
  useEffect(() => {
    if (searchResults && searchResults.length && tabPress) {
        setCursor(-1);
    }
  }, [cursor, searchResults, tabPress]);

    return (
        <ul aria-labelledby="result-options" className={s.results}>
        {searchResults && searchResults.map((result: any, i: number) => (
            <ResultsItem 
                key={`result=${i}`}
                item={{result, i, cursor, searchInputRef, selected, setSelected}}
            />
        ))}
        </ul>
    )
}