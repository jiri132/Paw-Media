import db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
    const response = await db.post.findMany({
        where: { published: true },
    });

    // 2.
    return { feed: response };
}) satisfies PageServerLoad;