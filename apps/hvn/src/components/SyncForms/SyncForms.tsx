'use client'

export function UpdateForms() {
  const updateForms = async () => {
    await fetch('/next/seed', {
      method: 'POST',
    })
  }

  return <button onClick={updateForms}>Seed Forms</button>
}
