export interface ValidationResponse {
	isCorrect: boolean,
	errMsg: string
}

export class AbstractValidator {
	protected body;
	protected validationResponse: ValidationResponse;

	constructor(body) {
		this.body = body;
		this.validationResponse = {
			isCorrect: true,
			errMsg: '',
		}
	}

	protected checkUnexpectedFields (possibleFields: string[]): void {
		if (false) {
			this.validationResponse.isCorrect = false;
			this.validationResponse.errMsg = `some arguments should not exist<br>`;
		}
	}

}
