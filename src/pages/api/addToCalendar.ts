import { NextApiRequest, NextApiResponse } from 'next'
import * as SibApiV3Sdk from '@sendinblue/client'


async function sendMail(email: string, name: string, dateTimeIso: string) {

    // Initialize Sendinblue's TransactionalEmailAPI
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

    // Subtract 4 hours from the date object to adjust for the GMT-4 timezone
    const date = new Date(dateTimeIso);
    date.setHours(date.getHours() - 4);

    // Convert dateIso into date and time strings to be sent through email
    const dateString = date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }); // dd/mm/yyyy
    const timeString = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); // hh:mm

    // Set apiKey
    apiInstance.setApiKey(
        SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
        process.env.SENDINBLUE_API_KEY!
    );

    // Send email using saved template
    var sendSmtpEmail = {
        to: [{
            email: email,
            name: name
        }],
        templateId: 1,
        params: {
            NAME: name,
            DATE: dateString,
            TIME: timeString
        },
    };

    // Log results
    await apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
        console.log('Email sent successfully. Returned data: ' + data);
    }, function (error) {
        console.log('email not sent')
        console.error(error);
    });
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
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

    // Log and return errors
    if (!response.ok) {
        console.error('Failed to create calendar event:', response.statusText)
        return res.status(500).json({ error: 'Failed to create calendar event' })
    }

    // If no errors, send confirmation email and return sucess
    await sendMail(email, name, isoDateTime)
    res.status(200).json({ message: 'Calendar event created' })
}