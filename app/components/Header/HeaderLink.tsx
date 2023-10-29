'use client'
import Link from "next/link"

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

interface HeaderLinkProps {
    name: string
    href: string
    current: boolean
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({ name, href, current }: HeaderLinkProps) => {
    
    const clickHandler = () => {

    }

    return (
        <Link
            key={name}
            href={href}
            className={classNames(
                current ? ' bg-primary-500 text-white' : 'text-font-primary hover:bg-primary-500 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
            )}
            aria-current={current ? 'page' : undefined}
        >
            {name}
        </Link>
    )
}
