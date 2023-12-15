import Link from 'next/link'

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/'>About</Link>
        </li>
        <li>
          <Link href='/blog'>Brog</Link>
        </li>
      </ul>
    </nav>
  )
}
