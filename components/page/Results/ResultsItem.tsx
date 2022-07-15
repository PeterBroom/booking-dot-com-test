import { useContext, useRef, useEffect, useState } from 'react'
import { SearchContext } from '@/context/SearchContext'
import useOutsideClick from "@/utils/useOutsideClick";
import { PlaceType } from './Placetype';
import s from './Results.module.scss'

export default function ResultsItem(props: any) {
    const {result, i, cursor, setCursor, searchInputRef, focused, setFocused} = props.item;
    const { setSearchResults, searchResults } = useContext(SearchContext);
    const itemRef = useRef<any>(i)
    const [hover, setHover] = useState<boolean>(false)

    // set focus
    useEffect(()=>{
        itemRef && itemRef.current && cursor === i ? itemRef.current.focus() : itemRef.current.blur()
    },[cursor, i, setCursor])

    function selectHandler(result: any) {
        searchInputRef.current.value = result
        setCursor(0)
        setSearchResults(null)
    }

    // If user clicks outside of search container hide results and choose first result
    useOutsideClick(itemRef, () => {
        const first = itemRef !== null ? searchResults[0].name : '';
        setSearchResults(null) // resets all results
        if (searchInputRef && searchInputRef.current) {
            searchInputRef.current.value = first
        }
    });

    let activeClass: string = cursor === i || hover === true  && focused === false ? s.active : ''

    return (
        <li 
            className={s.resultItem} 
            id={`result-options-${i}`} 
            role="option" 
            aria-selected={i === cursor || hover === true ? true : false} 

        >
            <button
                tabIndex={i}
                className={`${s.resultAction} ${activeClass}`} 
                onClick={() => selectHandler(result.name)}
                ref={itemRef}
                onMouseEnter={()=> {
                    setHover(true)
                    setFocused(false)
                }}
                onMouseLeave={()=> {
                    setHover(false)
                    setCursor(null)
                }}
            >
                {result.name !== 'No results found' &&
                <PlaceType placetype={result.placeType} />
                }

                <div className={s.content}>
                    <div className={s.heading} data-test-results-heading>
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