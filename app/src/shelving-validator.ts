import { AbstractValidator } from './abstract-validator'

export class ShelvingValidator extends AbstractValidator {
	private possibleFields = ['productId', 'quantity'];

	public checkAllocatingCellBody () {
		this.checkUnexpectedFields(this.possibleFields)

		for (let key in this.body) {
			switch (key) {
				case 'productId': this.checkProductId(this.body[key])
			}
		}

		return this.validationResponse
	}

	private checkProductId (productId: string) {
		if (false) {
			this.validationResponse.isCorrect = false
			this.validationResponse.errMsg = 'productId supposed to be a string'
		}
	}
}
