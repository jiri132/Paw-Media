import db from '../lib/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
    const response = await db.post.findMany({
        where: { published: true },
    });

    // 2.
    return { feed: response };
}) satisfies PageServerLoad;


// src/routes/create/+page.server.ts

import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    // 1.
    default: async ({ request }) => {
        const data = await request.formData();

        let content = data.get("content")
        let author_identifier = data.get("author_identifier")
        let author_display = data.get("author_display")
        // 2.
        if (!content || !author_identifier || !author_display) {
            return fail(400, { content, author_identifier, author_display, missing: true });
        }

        // 3.
        if (typeof content != "string" || typeof author_identifier != "string" || typeof author_display != "string") {
            return fail(400, { incorrect: true })
        }

        // 4.
        await db.post.create({
            data: {
                content,
                author_display,
                author_identifier
            },
        });

        //5.
        throw redirect(303, `/`)
    }
} satisfies Actions;