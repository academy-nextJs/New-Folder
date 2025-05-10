export interface IComment {
    name: string;
    title: string;
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
    user: {
        id: string,
        firstName: string,
        lastName: string,
        fullName: string,
        profilePicture: null | string,
    };
    parent_comment: IParentComment | null
}

export type IParentComment = {
    id: string,
    house_id: string,
    user_id: string,
    title: string,
    caption: string,
    rating: string,
    created_at: string,
    parent_comment_id: null | string,
    user: {
        id: string,
        firstName: string,
        lastName: string,
        fullName: string,
        profilePicture: null | string
    }
}