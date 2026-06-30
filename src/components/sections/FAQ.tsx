import { useScrollReveal } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Accordion } from '../ui/Accordion'
import { Section, SectionHeader } from '../ui/Section'

const faqItems = [
  {
    question: 'What is bean-bag?',
    answer:
      'bean-bag is a design and technology studio that builds digital products and business systems. Our product portfolio includes SchoolDash — a school management system — and CollegeDash — a complete college ERP and campus automation platform.',
  },
  {
    question: 'What is SchoolDash?',
    answer:
      'SchoolDash is our school management system for K-12 institutions. It digitizes attendance, academics, exams, timetables, fee collection, and parent-teacher communication through a unified admin portal and mobile apps. Visit schooldash.in to learn more.',
  },
  {
    question: 'What is CollegeDash?',
    answer:
      'CollegeDash is our college management and automation platform for higher education. It covers admissions, academics, LMS, library, staff management, grievances, announcements, NAAC reporting, and student portals — all from one dashboard. Visit collegedash.in to learn more.',
  },
  {
    question: 'Can I migrate from my existing tools?',
    answer:
      'Yes. We offer migration assistance for schools and colleges moving from legacy ERPs, spreadsheets, or disconnected tools. Our team helps you transition data and onboard staff with minimal disruption.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. All bean-bag products use end-to-end encryption, role-based access control, and comprehensive audit logs. We maintain strict security standards and a 99.9% uptime SLA for production deployments.',
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'We provide onboarding, training, and ongoing support for SchoolDash and CollegeDash customers. Enterprise clients receive dedicated account management, custom SLAs, and priority response times.',
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <Section>
      <div
        ref={ref}
        className={cn(
          'mx-auto max-w-3xl transition-all duration-700',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about bean-bag. Can't find what you're looking for? Contact our team."
        />
        <Accordion items={faqItems} />
      </div>
    </Section>
  )
}
