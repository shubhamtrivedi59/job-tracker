import Link from 'next/link';
import { Permit, Status } from '@/generated/prisma/enums';
import { enumLabel } from '@/lib/format';

const inputClass =
    'mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:border-zinc-400 dark:focus:ring-white/10';
const labelClass = 'block text-sm font-medium';

// The static folder "new" wins over the dynamic "[id]" folder, so /applications/new
// renders this page instead of looking up an application with id "new".
const NewApplicationPage = () => {
    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
            <Link href="/applications" className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white">
                ← All applications
            </Link>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight">New application</h1>
            <p className="mt-1 text-sm text-zinc-500">Track a job you&apos;ve saved or applied to.</p>

            {/* No `action` yet: wiring this form to the server is the first step of Milestone 3. */}
            <form className="mt-6 space-y-8 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <section className="grid gap-5 sm:grid-cols-2">
                    <h2 className="text-sm font-semibold text-zinc-500 sm:col-span-2">The job</h2>
                    <div>
                        <label htmlFor="company" className={labelClass}>Company *</label>
                        <input id="company" name="company" required className={inputClass} placeholder="Spotify" />
                    </div>
                    <div>
                        <label htmlFor="role" className={labelClass}>Role *</label>
                        <input id="role" name="role" required className={inputClass} placeholder="Frontend Engineer" />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="jobUrl" className={labelClass}>Job URL</label>
                        <input id="jobUrl" name="jobUrl" type="url" className={inputClass} placeholder="https://…" />
                    </div>
                    <div>
                        <label htmlFor="salaryRange" className={labelClass}>Salary range</label>
                        <input id="salaryRange" name="salaryRange" className={inputClass} placeholder="60–70k SEK/month" />
                    </div>
                    <div>
                        <label htmlFor="permitSupport" className={labelClass}>Work permit support</label>
                        <select id="permitSupport" name="permitSupport" defaultValue={Permit.UNKNOWN} className={inputClass}>
                            {Object.values(Permit).map((permit) => (
                                <option key={permit} value={permit}>{enumLabel(permit)}</option>
                            ))}
                        </select>
                    </div>
                </section>

                <section className="grid gap-5 border-t border-zinc-200 pt-6 sm:grid-cols-2 dark:border-zinc-800">
                    <h2 className="text-sm font-semibold text-zinc-500 sm:col-span-2">Progress</h2>
                    <div>
                        <label htmlFor="status" className={labelClass}>Status</label>
                        <select id="status" name="status" defaultValue={Status.SAVED} className={inputClass}>
                            {Object.values(Status).map((status) => (
                                <option key={status} value={status}>{enumLabel(status)}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="appliedAt" className={labelClass}>Applied on</label>
                        <input id="appliedAt" name="appliedAt" type="date" className={inputClass} />
                    </div>
                    <div>
                        <label htmlFor="recruiterName" className={labelClass}>Recruiter</label>
                        <input id="recruiterName" name="recruiterName" className={inputClass} placeholder="Jane Smith" />
                    </div>
                    <div>
                        <label htmlFor="emailUsed" className={labelClass}>Email used</label>
                        <input id="emailUsed" name="emailUsed" type="email" className={inputClass} placeholder="you@example.com" />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="notes" className={labelClass}>Notes</label>
                        <textarea id="notes" name="notes" rows={4} className={inputClass} placeholder="Referral, interview prep, follow-up dates…" />
                    </div>
                </section>

                <div className="flex justify-end gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                    <Link
                        href="/applications"
                        className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                        Save application
                    </button>
                </div>
            </form>
        </main>
    );
}

export default NewApplicationPage;
