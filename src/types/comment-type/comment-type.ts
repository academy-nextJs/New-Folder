/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IComment {
    name: string;
    email: string;
    caption: string;
}

export interface IGetComment {
    id: string;
    house_id: string;
    user_id: string | null;
    title: string;
    caption: string;
    rating: string;
    created_at: string;
    parent_comment_id: string | null;
    user: { full_name: string } | null;
    parent_comment: any;
}