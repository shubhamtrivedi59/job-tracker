import Link from 'next/link';
import { Suspense } from 'react';
import ActiveNavLinks from '@/components/active-nav-links';
import NavLinkList from '@/components/nav-link-list';

const NavBar = () => {
    return (
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
            <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
                <Link href="/applications" className="flex items-center gap-2 font-semibold tracking-tight">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-xs text-white dark:bg-white dark:text-zinc-900">
                        JT
                    </span>
                    Job Tracker
                </Link>
                {/* The current URL is only known at request time, so the active highlight
                    streams in; until then the same links render without a highlight. */}
                <Suspense fallback={<NavLinkList pathname={null} />}>
                    <ActiveNavLinks />
                </Suspense>
            </nav>
        </header>
    );
}

export default NavBar;
