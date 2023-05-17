// src/routes/drafts/+page.server.ts
import db from '$lib/database';
import type { PageServerLoad } from '../$types';

export const load = (async () => {
    // 1.
    const response = await db.post.findMany({
        where: { published: false },
        include: { author: true },
    })

    // 2.
    return { drafts: response };
}) satisfies PageServerLoad;
