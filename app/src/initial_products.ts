interface Product {
	id: string,
	quantity: number
}
interface Cell {
	id: number,
	x: number,
	y: number,
	products: Product[],
	categories: string[]
}

const getStorage = () => {
	return [
		{id: 1, x: 1, y: 1, products: [], categories: []},
		{id: 2, x: 2, y: 1, products: [{id: 'bread', quantity: 3}], categories: []},
		{id: 3, x: 3, y: 1, products: [], categories: []},
		{id: 4, x: 4, y: 1, products: [], categories: []},
		{id: 5, x: 5, y: 1, products: [], categories: []},
		{id: 6, x: 6, y: 1, products: [], categories: []},
		{id: 7, x: 7, y: 1, products: [], categories: []},
		{id: 8, x: 8, y: 1, products: [], categories: []},
		{id: 9, x: 9, y: 1, products: [], categories: ['hazardous']},
		{id: 10, x: 1, y: 2, products: [], categories: []},
		{id: 11, x: 2, y: 2, products: [], categories: []},
		{id: 12, x: 3, y: 2, products: [], categories: []},
		{id: 13, x: 4, y: 2, products: [], categories: []},
		{id: 14, x: 5, y: 2, products: [], categories: []},
		{id: 15, x: 6, y: 2, products: [], categories: []},
		{id: 16, x: 7, y: 2, products: [], categories: []},
		{id: 17, x: 8, y: 2, products: [], categories: []},
		{id: 18, x: 9, y: 2, products: [], categories: ['hazardous']},
		{id: 19, x: 1, y: 3, products: [], categories: []},
		{id: 20, x: 2, y: 3, products: [], categories: []},
		{id: 21, x: 3, y: 3, products: [{id: 'bamba', quantity: 3}], categories: []},
		{id: 22, x: 4, y: 3, products: [], categories: []},
		{id: 23, x: 5, y: 3, products: [], categories: []},
		{id: 24, x: 6, y: 3, products: [], categories: []},
		{id: 25, x: 7, y: 3, products: [], categories: []},
		{id: 26, x: 8, y: 3, products: [], categories: []},
		{id: 27, x: 9, y: 3, products: [], categories: ['hazardous']},
		{id: 28, x: 1, y: 4, products: [], categories: []},
		{id: 29, x: 2, y: 4, products: [], categories: []},
		{id: 30, x: 3, y: 4, products: [], categories: []},
		{id: 31, x: 4, y: 4, products: [], categories: []},
		{id: 32, x: 5, y: 4, products: [], categories: []},
		{id: 33, x: 6, y: 4, products: [], categories: []},
		{id: 34, x: 7, y: 4, products: [], categories: []},
		{id: 35, x: 8, y: 4, products: [], categories: []},
		{id: 36, x: 9, y: 4, products: [], categories: ['hazardous']},
		{id: 37, x: 1, y: 5, products: [], categories: []},
		{id: 38, x: 2, y: 5, products: [], categories: []},
		{id: 39, x: 3, y: 5, products: [], categories: []},
		{id: 40, x: 4, y: 5, products: [], categories: []},
		{id: 41, x: 5, y: 5, products: [], categories: []},
		{id: 42, x: 6, y: 5, products: [], categories: []},
		{id: 43, x: 7, y: 5, products: [], categories: []},
		{id: 44, x: 8, y: 5, products: [], categories: []},
		{id: 45, x: 9, y: 5, products: [], categories: ['hazardous']},
		{id: 46, x: 1, y: 6, products: [], categories: []},
		{id: 47, x: 2, y: 6, products: [], categories: []},
		{id: 48, x: 3, y: 6, products: [], categories: []},
		{id: 49, x: 4, y: 6, products: [], categories: []},
		{id: 50, x: 5, y: 6, products: [], categories: []},
		{id: 51, x: 6, y: 6, products: [], categories: []},
		{id: 52, x: 7, y: 6, products: [], categories: []},
		{id: 53, x: 8, y: 6, products: [], categories: []},
		{id: 54, x: 9, y: 6, products: [], categories: ['hazardous']},
		{id: 55, x: 1, y: 7, products: [], categories: []},
		{id: 56, x: 2, y: 7, products: [], categories: []},
		{id: 57, x: 3, y: 7, products: [], categories: []},
		{id: 58, x: 4, y: 7, products: [], categories: []},
		{id: 59, x: 5, y: 7, products: [], categories: []},
		{id: 60, x: 6, y: 7, products: [], categories: []},
		{id: 61, x: 7, y: 7, products: [], categories: ['cooled']},
		{id: 62, x: 8, y: 7, products: [], categories: ['cooled']},
		{id: 63, x: 9, y: 7, products: [], categories: ['cooled', 'hazardous']},
		{id: 64, x: 1, y: 8, products: [], categories: []},
		{id: 65, x: 2, y: 8, products: [], categories: []},
		{id: 66, x: 3, y: 8, products: [], categories: []},
		{id: 67, x: 4, y: 8, products: [], categories: []},
		{id: 68, x: 5, y: 8, products: [], categories: []},
		{id: 69, x: 6, y: 8, products: [], categories: []},
		{id: 70, x: 7, y: 8, products: [], categories: ['cooled']},
		{id: 71, x: 8, y: 8, products: [], categories: ['cooled']},
		{id: 72, x: 9, y: 8, products: [], categories: ['cooled', 'hazardous']},
		{id: 73, x: 1, y: 9, products: [], categories: []},
		{id: 74, x: 2, y: 9, products: [], categories: []},
		{id: 75, x: 3, y: 9, products: [], categories: []},
		{id: 76, x: 4, y: 9, products: [], categories: []},
		{id: 77, x: 5, y: 9, products: [], categories: []},
		{id: 78, x: 6, y: 9, products: [], categories: []},
		{id: 79, x: 7, y: 9, products: [], categories: ['cooled']},
		{id: 80, x: 8, y: 9, products: [], categories: ['cooled']},
		{id: 81, x: 9, y: 9, products: [], categories: ['cooled', 'hazardous']},
	] as Cell[]
}

export const storage = getStorage()

export const lookupByCategory = categoryName => {
	return storage.filter(cell => cell.categories.includes(categoryName))

	// TODO: add indices by each category
}

export const bookCell = (cell: Cell, quantity: number) => {
	if (!cell.products.length) {
		throw new Error('product is empty')
	}

	if (!cell.products[0].quantity) {
		cell.products[0].quantity = quantity
	} else {
		cell.products[0].quantity += quantity
	}
}

const products = [
	{id: 'bread', categories: []},
	{id: 'milk', categories: ['cooled']},
]
export const lookupByProductId = (productId: string) => {
	return products.find(product => product.id === productId)
}
