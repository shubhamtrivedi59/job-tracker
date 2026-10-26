import { redirect } from 'next/navigation';

// No home page yet (the dashboard comes in Milestone 6), so "/" sends you to the list.
// redirect() makes the server answer with a 307 and a Location header.
export default function Home() {
    redirect('/applications');
}
