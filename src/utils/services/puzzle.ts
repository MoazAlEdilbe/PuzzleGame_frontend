import axiosInstance from "../axios";
import { GENERATE_PUZZLES, PUZZLES } from "../endpoints/endpoints";

export const fetchPuzzle = async () => {
    const { data } = await axiosInstance.get(PUZZLES);
    return data;
};


export const generatePuzzle = async (difficulty) => {
    const { data } = await axiosInstance.get(`${GENERATE_PUZZLES}?difficulty=${difficulty}`);
    return data;
};


