import { useContext, useState, useRef } from 'react'
import { SearchContext } from '@/context/SearchContext'
import ResultsItem from './ResultsItem'
import s from './Results.module.scss'

export default function Results({searchInputRef}: any) {
    const { searchResults } = useContext(SearchContext);
    return (
        <ul aria-labelledby="result-options" className={s.results}>
        {searchResults && searchResults.map((result: any, i: number) => (
            <ResultsItem 
                key={`result=${i}`}
                item={{result, i, searchInputRef}}
            />
        ))}
        </ul>
    )
}