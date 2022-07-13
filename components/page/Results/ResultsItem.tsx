import { useContext, useState, useRef } from 'react'
import { SearchContext } from '@/context/SearchContext'
import s from './Results.module.scss'

export default function ResultsItem(props: any) {
    const {result, i, searchInputRef} = props.item;

    const itemRef = useRef(i)

    const { setSearchResults } = useContext(SearchContext);

    function selectHandler(result: any) {
        searchInputRef.value = result
        focus();
        setSearchResults(null)
    }

    function blur(){
        itemRef.current.blur();
    }

    function focus() {
        itemRef.current.focus();
    }

    const PlaceType = ({placetype}:any) => {
        let text: string;
        let colour: string;
        let contrast: string;
        switch (placetype){
            case 'A':
                colour = '#ff8000'
                contrast = '#262626'
                text = 'Airport';
                break;
            case 'C':
                colour = '#0071c2'
                contrast = '#FFFFFF'
                text = 'City';
                break;
            case 'T':
                colour = '#474747'
                contrast = '#FFFFFF'
                text = 'Station';
                break;
            case 'D':
                colour = '#008009'
                contrast = '#FFFFFF'
                text = 'District';
                break;
            default:
                colour = '#CCC'
                contrast = '#262626'
                text = ''
                break
        }
        return (
            <div className={s.placeType}>
                <span style={{'backgroundColor': colour, 'color': contrast}}>{text}</span>
            </div>
        )
    }

    return (
        <li 
            className={s.resultItem} 
            id={`result-options-${i}`} 
            role="option" 
            aria-selected={false} 
            tabIndex={i}
        >
            <button
                className={s.resultAction} 
                onClick={() => selectHandler(result.name)}
                onFocus={() => focus()}
                onBlur={() => blur()}
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