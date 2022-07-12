import { useContext } from 'react'
import { SearchContext } from '@/context/SearchContext'
import s from './Search.module.scss'

export default function Search() {
    const { getSearchResults } = useContext(SearchContext);

    function debounce<Params extends any[]>(
        func: (...args: Params) => any,
        timeout: number,
    ): (...args: Params) => void {
        let timer: ReturnType<typeof setTimeout>;
        return (...args: Params) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                func(...args)
            }, timeout)
        }
    }

    function populateSearch(value: string) {
        getSearchResults(value);
    }

    const handler = debounce(populateSearch, 500);

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
