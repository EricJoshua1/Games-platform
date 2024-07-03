import genres from "../data.ts/genres";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => ({data: genres , isLoading: false, error: null}); 

export default useGenres;