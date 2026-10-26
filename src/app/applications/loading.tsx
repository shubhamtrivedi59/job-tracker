// Suspense fallback for /applications: the list needs a database query at request
// time, so this skeleton is sent first and the real list streams in after.
const Loading = () => {
    return (
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <div className="mb-6 h-8 w-48 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="space-y-px overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="h-[72px] animate-pulse bg-white dark:bg-zinc-900" />
                ))}
            </div>
        </main>
    );
}

export default Loading;
