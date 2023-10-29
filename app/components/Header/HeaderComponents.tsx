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
    return (
        <Link
            key={name}
            href={href}
            className={classNames(
                current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
            )}
            aria-current={current ? 'page' : undefined}
        >
            {name}
        </Link>
    )
}
