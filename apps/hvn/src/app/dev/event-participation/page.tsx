import EventParticipationForm from '../../../components/EventParticipationForm/EventParticipationForm'

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Dev: Event Participation Form</h1>
      {/* Render the form with no applicationForm prop (uses defaults) */}
      <EventParticipationForm />
    </main>
  )
}
