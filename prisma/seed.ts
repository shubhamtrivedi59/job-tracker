import 'dotenv/config';
import { prisma } from '../src/lib/prisma';

async function main() {
    await prisma.application.deleteMany();   // start clean, so the seed can be re-run

    await prisma.application.createMany({
        data: [
            // your 3 applications from src/lib/applications.ts
                        {
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
            },
            {
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
            },
            {
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
            },
        ],
    });
}

main().finally(() => prisma.$disconnect());