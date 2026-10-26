'use client';

// The only Client Component in the nav: it needs usePathname() (a browser hook)
// to know which link is active. The rest of the nav stays on the server.
import { usePathname } from 'next/navigation';
import NavLinkList from '@/components/nav-link-list';

const ActiveNavLinks = () => {
    const pathname = usePathname();
    return <NavLinkList pathname={pathname} />;
}

export default ActiveNavLinks;
