const LARGEST_NUMBER = Number.MAX_SAFE_INTEGER;
export function generateRandomId(): string {
	return Math.floor(Math.random() * (LARGEST_NUMBER - 1 + 1) + 1).toString();
}
