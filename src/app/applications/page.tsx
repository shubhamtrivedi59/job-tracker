import Link from 'next/link';
import { getApplications } from '@/lib/applications';
import { formatDate } from '@/lib/format';
import StatusBadge from '@/components/status-badge';

const ApplicationsPage = async () => {
    // Runs on the server: a plain function call, no fetch/useEffect/loading state.
    const applications = await getApplications();

    return (
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Applications</h1>
                    <p className="mt-1 text-sm text-zinc-500">
                        {applications.length} {applications.length === 1 ? 'application' : 'applications'} tracked
                    </p>
                </div>
                <Link
                    href="/applications/new"
                    className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                    + New application
                </Link>
            </div>

            {applications.length === 0 ? (
                <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-12 text-center dark:border-zinc-700 dark:bg-zinc-900">
                    <p className="font-medium">No applications yet</p>
                    <p className="mt-1 text-sm text-zinc-500">Add the first job you&apos;re interested in.</p>
                </div>
            ) : (
                <ul className="divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
                    {applications.map((app) => (
                        <li key={app.id}>
                            <Link
                                href={`/applications/${app.id}`}
                                className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
                            >
                                <div className="flex min-w-0 items-center gap-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                                        {app.company.charAt(0)}
                                    </span>
                                    <div className="min-w-0">
                                        <p className="truncate font-medium">{app.company}</p>
                                        <p className="truncate text-sm text-zinc-500">{app.role}</p>
                                    </div>
                                </div>
                                <div className="flex shrink-0 items-center gap-4">
                                    <span className="hidden text-sm text-zinc-500 sm:block">
                                        {formatDate(app.appliedAt) ?? 'Not applied'}
                                    </span>
                                    <StatusBadge status={app.status} />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}

export default ApplicationsPage;
