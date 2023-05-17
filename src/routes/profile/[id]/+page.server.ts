// src/routes/p/[id]/+page.server.ts
import db from "$lib/server/database";
import type { PageServerLoad } from './$types';

// 1.
export const load = (async ({ params: { id } }) => {
    // 2.
    const user = await db.user.findUnique({
        where: { name_identifier:id },
    });
    const user_posts = await db.post.findMany({
        where: { author_identifier:id }
    })
    // 3.
    return { user, user_posts };
}) satisfies PageServerLoad;