import { storage, lookupByCategory, lookupByProductId, bookCell } from './initial_products'

export class ShelvingService {
	public static getStorage () {
		return storage
	}

	public static findAvailableCell (productId: string, quantity: number) {
		const product = lookupByProductId(productId)
		const res = product.categories.flatMap(category => lookupByCategory(category))

		if (res.length) {
			bookCell(res[0], quantity)
			return res[0]
		}
	}
}
