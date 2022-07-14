/**
 * Takes a value from an input field and queries API
 * @event onChange invokes debounce utility to throttle the requests
 * @param value of search input returns a location
 * @returns a location for API endpoint in the search context provider
 */
import { useContext, useRef, useState } from 'react'
import { SearchContext } from '@/context/SearchContext'
import { Results } from '@/components/page'
import debounce from '@/utils/debounce'
import { SearchIcon } from '@heroicons/react/outline'
import s from './Search.module.scss'

export default function Search() {
    const { getSearchResults, setSearchResults } = useContext(SearchContext);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null)

    const placeHolderText = "Pick-up Location"
    const [placeholderString, setPlaceholderString] = useState<string>(placeHolderText)
    const [showResults, setShowResults] = useState<boolean>(false)


    function populateSearch(value: string) {
        if (value.length >= 2) {
            setShowResults(true)
            getSearchResults(value);
        } else {
            setShowResults(false)
            setSearchResults(null)
        }
    }
    // on change debounce populateSearch function
    const handler = debounce(populateSearch, 500);

    return (
        <div className={s.searchComponent} data-test-search-container>
            <h2 className={s.heading}>Let&apos;s find your ideal car</h2>
            <div className={s.dropOffLocationMobile}>
                <label htmlFor="v">
                    <input name="dropOffLocationMobile" id="dropOffLocationMobile" className={s.checkbox} type="checkbox" />
                    Drop car off at different location
                </label>
            </div>
            <div className={s.search} ref={containerRef}>
                <label htmlFor="searchInput" className="sr-only" data-test-search-label>Pick-up Location</label>
                <div className={s.formGroup}>
                <SearchIcon className={s.icon}/>
                <input
                    data-test-search-input
                    tabIndex={1}
                    className={s.searchInput}
                    name="searchInput"
                    id="searchInput"
                    type="text"
                    placeholder={placeholderString}
                    onChange={(e) => handler(e.target.value)}
                    onFocus={() => setPlaceholderString('')}
                    onBlur={() => setPlaceholderString(placeHolderText)}
                    autoComplete="off"
                    ref={searchInputRef}
                />
                </div>
                <div className={s.formGroupDate}>
                    <input 
                        className={s.dateInput}
                        name="startDateInput"
                        id="startDateInput"
                        type="date"
                    />
                    <input
                        name="startTimeInput"
                        id="startTimeInput"
                        type="time"
                        className={s.timeInput}
                    />
                </div>
                <div className={s.formGroupDate}>
                    <input 
                        className={s.dateInput}
                        name="finishDateInput"
                        id="finishDateInput"
                        type="date"
                    />
                    <input
                        name="finishTimeInput"
                        id="finishTimeInput"
                        type="time"
                        className={s.timeInput}
                    />
                </div>
                <button
                    className={s.searchAction}
                    type="submit"
                >Search</button>
                {showResults &&
                <Results searchInputRef={searchInputRef} tabIndex={2} />
                }
            </div>

            <div className={s.carOptions}>
                <div className={s.dropOffLocation}>
                    <label htmlFor="dropOffLocation">
                        <input name="dropOffLocation" id="dropOffLocation" className={s.checkbox} type="checkbox" />
                        Drop car off at different location
                    </label>
                </div>
                <div className={s.driverAge}>
                    <label htmlFor="driverAge">
                        <input name="driverAge" id="driverAge" className={s.checkbox} type="checkbox" />
                        Driver aged 30 - 65?
                    </label>
                </div>        
            </div>
        </div>
    )
}
