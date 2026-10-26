import Link from 'next/link';
import { getApplications } from '@/lib/applications';

const ApplicationsPage = async () => {
    // Runs on the server: a plain function call, no fetch/useEffect/loading state.
    const applications = await getApplications();

    return (
        <main className="mx-auto max-w-3xl p-6">
            <h1 className="mb-4 text-2xl font-semibold">Applications</h1>
            <ul className="divide-y rounded border">
                {applications.map((app) => (
                    <li key={app.id} className="flex items-center justify-between p-4">
                        <div>
                            <Link href={`/applications/${app.id}`} className="font-medium hover:underline">
                                {app.company}
                            </Link>
                            <p className="text-sm text-zinc-500">{app.role}</p>
                        </div>
                        <span className="rounded bg-zinc-100 px-2 py-1 text-xs dark:bg-zinc-800">{app.status}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ApplicationsPage;
