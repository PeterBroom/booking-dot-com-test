import { useContext, useState, useRef, useEffect } from 'react'
import { SearchContext } from '@/context/SearchContext'
import { useKeyPress } from '@/utils/useKeyPress'
import ResultsItem from './ResultsItem'
import s from './Results.module.scss'

export default function Results({ searchInputRef }: any) {
  const { searchResults } = useContext(SearchContext);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const [selected, setSelected] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [focused, setFocused] = useState<boolean>(false)


  // Use down arrow to iterate list
  useEffect(() => {
    if (searchResults && searchResults.length && downPress) {
      setCursor(prevState => (prevState < searchResults.length - 1 ? prevState + 1 : prevState));
      setFocused(true)

      // prevent arrow keys scrolling document
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.style.overflow = 'unset';
      }, 10);
    }
  }, [downPress, searchResults]);

  // Use up arrow to iterate list
  useEffect(() => {
    if (searchResults && searchResults.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
      setFocused(true)

      // prevent arrow keys scrolling document
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.style.overflow = 'unset';
      }, 10);
    }
  }, [upPress, searchResults]);

  return (
    <div className={s.resultsContainer}>
      {searchResults &&
        <ul aria-labelledby="result-options" className={s.results} data-test-results>
          {searchResults.map((result: any, i: number) => (
            <ResultsItem
              key={`result=${i}`}
              item={{ result, i, cursor, setCursor, searchInputRef, selected, setSelected, focused, setFocused }}
            />
          ))}
        </ul>
      }
    </div>
  )
}
