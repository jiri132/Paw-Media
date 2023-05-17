import db from '../lib/server/database';
import type { Actions, PageServerLoad } from "./$types"


import { fail} from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions: Actions = {
	default: async ({ request }) => {
		const { content } = Object.fromEntries(await request.formData()) as {
			content: string
		}

		try {
			await db.post.create({
				data: {
					content,
                    author_display: "guest",
                    author_identifier: "guest"
				},
			})
		} catch (err) {
			console.error(err);
			return fail(500, { message: "Could not create the article." })
		}

		return {
			status: 201,
		};
	},
} satisfies Actions
export const load = (async () => {
// 1.
    const response = await db.post.findMany({
        where: { published: true },
    });

    // 2.
    return { feed: response };
}) satisfies PageServerLoad;

