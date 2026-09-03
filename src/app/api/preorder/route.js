import { NextResponse } from 'next/server'

const GOOGLE_FORM_RESPONSE = 'https://docs.google.com/forms/d/e/1FAIpQLSedYlqDy-t5bCV23ye0CHL_LUID_0k5-JFjn-h7jryxypCAUg/formResponse'
const INDUSTRIES = new Set(['Restaurant', 'Retail', 'Other'])
const INSTALLATION_SERVICES = new Set(['Self Install', 'Technician Install — Metro Cincinnati only'])

export async function POST(request) {
  try {
    const data = await request.json()
    const required = ['industry', 'contactName', 'contactPhone', 'contactEmail', 'zipcode', 'installationService']

    if (required.some((field) => !String(data[field] || '').trim())) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
    }

    if (!INDUSTRIES.has(data.industry) || !INSTALLATION_SERVICES.has(data.installationService)) {
      return NextResponse.json({ error: 'Please select a valid option.' }, { status: 400 })
    }

    const form = new URLSearchParams({
      'entry.1963081915': data.industry,
      'entry.1217708066': String(data.contactName).trim().slice(0, 120),
      'entry.494353703': String(data.contactPhone).trim().slice(0, 40),
      'entry.1984274598': String(data.contactEmail).trim().slice(0, 160),
      'entry.403668169': String(data.zipcode).trim().slice(0, 10),
      'entry.359725723': String(data.address || '').trim().slice(0, 300),
      'entry.1806791562': data.installationService === 'Self Install' ? 'Self Install' : 'Technician Install',
      fvv: '1',
      pageHistory: '0',
    })

    const response = await fetch(GOOGLE_FORM_RESPONSE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: form,
      cache: 'no-store',
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'We could not save your order details. Please try again.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'We could not save your order details. Please try again.' }, { status: 500 })
  }
}
