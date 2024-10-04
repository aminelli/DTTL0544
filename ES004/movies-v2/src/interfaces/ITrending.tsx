export interface ITrendingItem {
    id: number;
    name?: string;
    title?: string;
    poster_path?: string;
    first_air_date?: string;
    release_date?: string;
    media_type: "movie" | "tv";
};
