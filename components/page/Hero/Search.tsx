
import s from './Search.module.scss'
export default function Search() {
    return (
        <div className={s.search}>
            <h2 className={s.header}>Let&apos;s find your ideal car</h2>
            <input
                type="text"
                className="border-none focus:outline-none focus:ring-2 focus:ring-black/25 rounded-sm mr-6"
                placeholder="Pick-up Location"
            />
            <button
                className="border-none bg-emerald-600 text-white rounded-sm p-2 mr-6 focus:outline-none focus:bg-emerald-800"
                type="submit"
            >Search</button>
        </div>
    )
}