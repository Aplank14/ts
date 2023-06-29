import { Server } from 'http'
import { NextApiRequest, NextApiResponse } from 'next'
 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
    setTimeout(() => {
        res.status(200).json({ message: 'Hello from Next.js!' })
    }, 5000);
}
 
export default handler