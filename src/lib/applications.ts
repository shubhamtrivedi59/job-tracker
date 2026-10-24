export type Status = 'SAVED' | 'APPLIED' | 'SCREENING' | 'INTERVIEW' | 'OFFER' | 'REJECTED';

export type Permit = 'UNKNOWN' | 'YES' | 'NO';

export interface Application {
  id: string;
  company: string;
  role: string;
  jobUrl: string | null;
  status: Status;
  notes: string | null;
  appliedAt: Date | null;
  salaryRange: string | null;
  recruiterName: string | null;
  emailUsed: string | null;
  permitSupport: Permit;
  createdAt: Date;
  updatedAt: Date;
}