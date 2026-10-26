import Link from 'next/link';

const links = [
    { href: '/applications', label: 'Applications' },
    { href: '/applications/new', label: 'New' },
];

// "/applications/abc" should highlight Applications, but "/applications/new" has its own link.
function isActive(href: string, pathname: string) {
    if (pathname === href) return true;
    return pathname.startsWith(`${href}/`) && !links.some((link) => link.href === pathname);
}

// pathname is null while the real URL is still streaming in (see the Suspense in NavBar).
const NavLinkList = ({ pathname }: { pathname: string | null }) => {
    return (
        <div className="flex items-center gap-1">
            {links.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        pathname && isActive(href, pathname)
                            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                            : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'
                    }`}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}

export default NavLinkList;
