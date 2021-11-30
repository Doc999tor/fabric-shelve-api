export const BAD_REQUEST = 400

export class BodyValidatingError extends Error {
	public status: number
	constructor(message: string, status = BAD_REQUEST) {
		super(message)
		this.status = status
	}
}
