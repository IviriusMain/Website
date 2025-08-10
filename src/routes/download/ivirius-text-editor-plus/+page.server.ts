import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, 'https://apps.microsoft.com/detail/9n4t9h9182j5');
}
