import { useContext, useRef, useEffect } from 'react'
import { SearchContext } from '@/context/SearchContext'
import useOutsideClick from "@/utils/useOutsideClick";
import { PlaceType } from './Placetype';
import s from './Results.module.scss'

export default function ResultsItem(props: any) {
    const {result, i, cursor, setCursor, searchInputRef, setSelected} = props.item;
    const itemRef = useRef(i)
    const { setSearchResults, searchResults } = useContext(SearchContext);

    useEffect(()=>{
        if (itemRef && itemRef.current && cursor === i) {
            itemRef.current.focus()
        }
    },[cursor, i])

    function selectHandler(result: any) {
        searchInputRef.current.value = result
        focus();
        setCursor(0)
        setSearchResults(null)
    }

    function focus() {
        itemRef.current.focus();
        console.log(`cursor ${cursor}`)
        setSelected(result)
    }

    // If user clicks outside of search container hide results and choose first result
    useOutsideClick(itemRef, () => {
        const first = itemRef !== null ? searchResults[0].name : '';
        setSearchResults(null) // resets all results
        if (searchInputRef && searchInputRef.current) {
            searchInputRef.current.value = first
        }
    });

    return (
        <li 
            className={s.resultItem} 
            id={`result-options-${i}`} 
            role="option" 
            aria-selected={i === cursor ? true : false} 

        >
            <button
                tabIndex={i}
                className={`${s.resultAction} ${i === cursor ? s.active : ''}`} 
                onClick={() => selectHandler(result.name)}
                ref={itemRef}
            >
                {result.name !== 'No results found' &&
                <PlaceType placetype={result.placeType} />
                }

                <div className={s.content}>
                    <div className={s.heading}>
                        {result.name}
                        {result.iata && ` (${result.iata})`}
                    </div>
                    <div className={s.details}>
                        {result.city && result.city + ', '}
                        {result.region && result.region + ', '}
                        {result.country && result.country}
                    </div>
                </div>
            </button>
        </li>
    )
}