export function parseStoredToken(raw: string | null): StoredToken | undefined {
	if (!raw) return undefined;
	try {
		const parsed = JSON.parse(raw);
		const keys = Object.keys(parsed ?? {});
		const valid =
			keys.length === 2 &&
			keys.includes('token') &&
			keys.includes('expires') &&
			typeof parsed.token === 'string' &&
			parsed.token.trim() !== '' &&
			typeof parsed.expires === 'number' &&
			Number.isFinite(parsed.expires);
		return valid ? { token: parsed.token, expires: parsed.expires } : undefined;
	} catch {
		return undefined;
	}
}
export interface StoredToken {
	token: string;
	expires: number;
}
