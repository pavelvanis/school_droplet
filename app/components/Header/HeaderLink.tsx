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
                current ? ' underline underline-offset-2' : ' text-primary hover:bg-primary-500 hover:underline underline-offset-2',
                'rounded-md px-3 py-2 text-md font-medium self-center'
            )}
            aria-current={current ? 'page' : undefined}
        >
            {name}
        </Link>
    )
}
