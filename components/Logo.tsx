import Link from 'next/link'
import React from 'react'
// import LogoSrc from "@/public/logo.svg"
import Image from 'next/image'

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