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

export const applications: Application[] = [
  {
    id: '1',
    company: 'Google',
    role: 'Software Engineer',
    jobUrl: 'https://careers.google.com/jobs/results/123456-software-engineer/',
    status: 'APPLIED',
    notes: 'Applied through referral.',
    appliedAt: new Date('2023-08-15'),
    salaryRange: '$120,000 - $150,000',
    recruiterName: 'John Doe',
    emailUsed: 'john.doe@gmail.com',
    permitSupport: 'YES',
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2023-08-15')
  },
  {
    id: '2',
    company: 'Microsoft',
    role: 'Frontend Developer',
    jobUrl: 'https://careers.microsoft.com/us/en/job/123456/frontend-developer',
    status: 'INTERVIEW',
    notes: 'Interview scheduled for next week.',
    appliedAt: new Date('2023-08-10'),
    salaryRange: '$100,000 - $130,000',
    recruiterName: 'Jane Smith',
    emailUsed: 'jane.smith@gmail.com',
    permitSupport: 'YES',
    createdAt: new Date('2023-08-10'),
    updatedAt: new Date('2023-08-10')
  },
  {
    id: '3',
    company: 'Amazon',
    role: 'Backend Engineer',
    jobUrl: 'https://www.amazon.jobs/en/jobs/123456/backend-engineer',
    status: 'SCREENING',
    notes: 'Waiting for response from recruiter.',
    appliedAt: new Date('2023-08-05'),
    salaryRange: '$110,000 - $140,000',
    recruiterName: 'Alice Johnson',
    emailUsed: 'alice.johnson@gmail.com',
    permitSupport: 'YES',
    createdAt: new Date('2023-08-05'),
    updatedAt: new Date('2023-08-05')
  }
];

export function getApplicationById(id: string): Application | undefined {
  return applications.find(app => app.id === id);
}

export function getApplications(): Application[] {
  return applications;
}
