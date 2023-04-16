import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {

        const name: string = req.body.name
        const email: string = req.body.email
        const date: Date = req.body.date
        const time: string = req.body.time

        console.log(name, email, date, time)

        res.status(200).send('success')


    } else {
        // if method is not POST
        
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not Allowed')
    }
}