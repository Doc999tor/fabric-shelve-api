import * as express from 'express';

import { ShelvingRouter } from './shelving-router'

const port = process.env.PORT || 9000

const app = express();

app.use('/shelving', ShelvingRouter)

app.use((req: express.Request, res: express.Response) => {
	res.sendStatus(404);
});

app.use((error: Error, req: express.Request, res: express.Response, next) => {
	console.log(error);
	res.sendStatus(500)
});

app .listen(port, () => console.log('listening on port ' + port))
	.on('error', e => { console.error(e) })
