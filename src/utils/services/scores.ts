import axiosInstance from "../axios";
import { SCORES } from "../endpoints/endpoints";

export const getLeaderboard = async () => {
  try {
    const response = await axiosInstance.get(`${SCORES}/leaderboard`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch leaderboard');
  }
};

export const addScore = async (scoreDto) => {
  try {
    const response = await axiosInstance.post(SCORES, scoreDto);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add score');
  }
};

export const getScoresByUser = async (userId) => {
  try {
    const response = await axiosInstance.get(`${SCORES}/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch scores by user');
  }
};
