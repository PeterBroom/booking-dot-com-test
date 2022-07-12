import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/solid'
import { Search } from '@/components/page'
import s from './Hero.module.scss'

export default function Hero() {  
  return (
    <div className={s.hero}>
      <div className={s.imageWrapper}>
        <Image
          src='/background-large.jpeg'
          alt='Image of a holiday destination'
          width={1440}
          height={596}
          className={s.image}
        />
      </div>

      <div className={s.content}>
      <div className={s.container}>
      <h1 className={s.heading}>Car Hire - Search, Compare &amp; Save</h1>
      <ul className={s.list}>
        <li className={s.list__item} ><CheckIcon className={s.icon} /> Free cancellations on most bookings</li>
        <li className={s.list__item} ><CheckIcon className={s.icon} /> 60,000+ locations</li>
        <li className={s.list__item} ><CheckIcon className={s.icon} /> Customer support in 40+ languages</li>
      </ul>
      <Search/>
      </div>
      </div>
      </div>
  );
}
