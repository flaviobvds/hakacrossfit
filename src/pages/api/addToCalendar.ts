import { NextApiRequest, NextApiResponse } from 'next'

const createCalendarEvent = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, date, time } = req.body

    // Combine date and time into a single ISO8601 formatted string in -4GMT timezone
    const isoDateTime = new Date(`${date.substring(0, 10)}T${time.slice(0, 2)}:${time.slice(2)}:00-04:00`).toISOString()

    // Create the JSON payload
    const payload = {
        value1: isoDateTime,
        value2: name,
        value3: email,
    }

    // Make the POST request to IFTTT
    const response = await fetch('https://maker.ifttt.com/trigger/create_calendar_event/with/key/cp_gxqPtj5sWIw6btaHMdx', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
        console.error('Failed to create calendar event:', response.statusText)
        return res.status(500).json({ error: 'Failed to create calendar event' })
    }

    res.status(200).json({ message: 'Calendar event created' })
}

export default createCalendarEvent
