import type { Status } from '@/generated/prisma/enums';
import { enumLabel } from '@/lib/format';

// Record<Status, ...> forces an entry for every enum value: add a status to the
// Prisma schema and TypeScript will point here until you give it a colour.
const styles: Record<Status, string> = {
    SAVED: 'bg-zinc-100 text-zinc-700 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700',
    APPLIED: 'bg-blue-50 text-blue-700 ring-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:ring-blue-900',
    SCREENING: 'bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:ring-violet-900',
    INTERVIEW: 'bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:ring-amber-900',
    OFFER: 'bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-900',
    REJECTED: 'bg-red-50 text-red-700 ring-red-200 dark:bg-red-950 dark:text-red-300 dark:ring-red-900',
};

const StatusBadge = ({ status }: { status: Status }) => {
    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[status]}`}>
            {enumLabel(status)}
        </span>
    );
}

export default StatusBadge;
