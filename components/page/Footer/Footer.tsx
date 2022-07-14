
import Link from 'next/link'
import s from './Footer.module.scss'
export default function Footer() {

  const footerLinks = [
    { text: 'Privacy Notice', link: '#' },
    { text: 'Cookies', link: '#' },
    { text: 'Terms & Conditions', link: '#' },
    { text: 'Help', link: '#' },
    { text: 'Modern Slavery Statement', link: '#' },
    { text: 'How we work', link: '#' },
    { text: 'Supply Partner Enquiry and Marketplace', link: '#' },
    { text: 'Affiliate Programme', link: '#' },
    { text: 'Careers', link: '#' }
  ]

  return (
    <footer className={s.footer}>
        <nav className={s.nav}>
          <ul className={s.list}>
            {footerLinks && footerLinks.map((item, i) => (
              <li key={i} className={s.listItem}>
                <Link className={s.listIink} href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      <div className={s.content}>
        <p>Rentalcars.com is a trading name of Booking.com Transport Limited which is a limited company registered in England and Wales (Number: 05179829) whose registered address is at 100 New Bridge Street, London, EC4V 6JA. VAT number: GB 855349007.</p>
        <p>Rentalcars.com is part of Booking Holdings Inc., the world leader in online travel &amp; related services.</p>
      </div>

      <div className={s.legal}>
        <p>Copyright &copy;2022 Booking.com Transport Limited trading as Rentalcars.com. All rights reserved</p>
      </div>
    </footer>
  );
}
