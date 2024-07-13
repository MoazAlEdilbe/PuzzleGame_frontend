import axiosInstance from "../axios";
import { PUZZLES } from "../endpoints/endpoints";


export const generatePuzzle = async (type, difficulty) => {
    try {
        const { data } = await axiosInstance.get(`${PUZZLES}/generate`, {
            params: { type, difficulty }
        });
        return data;
    } catch (error) {
        throw new Error('Failed to fetch puzzle');
    }
};

export const createPuzzle = async (createPuzzleDto) => {
    try {
        const response = await axiosInstance.post(PUZZLES, createPuzzleDto);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create puzzle');
    }
};

export const getAllPuzzles = async () => {
    try {
        const response = await axiosInstance.get(PUZZLES);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch puzzles');
    }
};

export const getPuzzleById = async (id) => {
    try {
        const response = await axiosInstance.get(`${PUZZLES}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch puzzle');
    }
};



export const fetchPuzzle = async () => {
    const { data } = await axiosInstance.get(PUZZLES);
    return data;
};


