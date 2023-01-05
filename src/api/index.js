import axios from "axios";

export const getAreaData = async (input) => {
  const { data } = await axios.get(`https://api.zippopotam.us/GB/LE2`);
  console.log(data.places);

  return data.places;
};
