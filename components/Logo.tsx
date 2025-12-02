import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="hidden lg:flex">
        <Link aria-label="Home" href="/"> 
            <Image src="/logo.svg" alt="Protocol" className="" height={24} width={100} priority/>
        </Link>
      </div>
  )
}

export default Logo