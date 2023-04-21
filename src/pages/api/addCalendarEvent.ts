import { NextApiRequest, NextApiResponse } from "next";

const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {

        const name: string = req.body.name
        const email: string = req.body.email
        const date: Date = req.body.date
        const time: string = req.body.time

        googleapi(name, email, date, time)

        console.log(name, email, date, time)

        res.status(200).send('success')


    } else {
        // if method is not POST

        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not Allowed')
    }
}



function googleapi(name: string, email: string, date: Date, time: string) {
    const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    const TOKEN_PATH = path.join(process.cwd(), 'token.json');
    const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

    async function loadSavedCredentialsIfExist() {
        try {
            const content = await fs.readFile(TOKEN_PATH);
            const credentials = JSON.parse(content);
            return google.auth.fromJSON(credentials);
        } catch (err) {
            return null;
        }
    }

    async function saveCredentials(client: any) {
        const content = await fs.readFile(CREDENTIALS_PATH);
        const keys = JSON.parse(content);
        const key = keys.installed || keys.web;
        const payload = JSON.stringify({
            type: 'authorized_user',
            client_id: key.client_id,
            client_secret: key.client_secret,
            refresh_token: client.credentials.refresh_token,
        });
        await fs.writeFile(TOKEN_PATH, payload);
    }

    async function authorize() {
        let client = await loadSavedCredentialsIfExist();
        if (client) {
            return client;
        }
        client = await authenticate({
            scopes: SCOPES,
            keyfilePath: CREDENTIALS_PATH,
        });
        if (client.credentials) {
            await saveCredentials(client);
        }
        return client;
    }
}