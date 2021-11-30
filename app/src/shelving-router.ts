import * as express from 'express';
import * as bodyParser from 'body-parser';
export const bodyParserJSON = bodyParser.json()

import { ShelvingValidator } from './shelving-validator'

import { ShelvingService } from './shelving-service'
import { BodyValidatingError } from './errors'

const router = express.Router();

router.get('', (req: express.Request, res: express.Response) => {
	const storage = ShelvingService.getStorage()
	res.json(storage)
})

interface AllocateCellReq extends express.Request {
	body: {
		productId: string,
		quantity: string
	}
}

router.post('/allocateCell', bodyParserJSON, (req: express.Request, res: express.Response, next: express.NextFunction) => {
	const validator = new ShelvingValidator(req.body)
	const validationResponse = validator.checkAllocatingCellBody()
	if (!validationResponse.isCorrect) {
		throw new BodyValidatingError(validationResponse.errMsg)
	}
	next()
}, (req: AllocateCellReq, res: express.Response) => {
	const cell = ShelvingService.findAvailableCell(
		req.body.productId,
		Number(req.body.quantity)
	)
	res.json(cell)
})

export { router as ShelvingRouter };
