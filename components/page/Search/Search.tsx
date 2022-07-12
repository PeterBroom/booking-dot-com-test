import { useContext, useState } from 'react'
import { SearchContext } from '@/context/SearchContext'
import s from './Search.module.scss'

export default function Search() {

    function handler(e: any) {
        getSearchResults(e);
    }

    const { getSearchResults } = useContext(SearchContext);
    
    return (
        <div className={s.search}>
            <h2 className={s.header}>Let&apos;s find your ideal car</h2>
            <label htmlFor="searchInput" className="sr-only">Pick-up Location</label>
            <input
                name="searchInput"
                id="searchInput"
                type="text"
                className="border-none focus:outline-none focus:ring-2 focus:ring-black/25 rounded-sm mr-6"
                placeholder="Pick-up Location"
                onChange={(e) => handler(e.target.value)}
            />
            <button
                className="border-none bg-emerald-600 text-white rounded-sm p-2 mr-6 focus:outline-none focus:bg-emerald-800"
                type="submit"
            >Search</button>
        </div>
    )
}
