// Dates like appliedAt are stored as midnight UTC. Formatting in UTC with a fixed
// locale keeps "15 Aug 2023" the same no matter which timezone the server runs in.
const dateFormatter = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeZone: 'UTC' });

// Enum values are SHOUTING_CASE in the database; "INTERVIEW" → "Interview" for display.
export function enumLabel(value: string) {
    return value.charAt(0) + value.slice(1).toLowerCase();
}

export function formatDate(date: Date | null) {
    return date ? dateFormatter.format(date) : null;
}
