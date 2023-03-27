const baseURL = process.env.API_URL;
const taskURL = `${baseURL}/task`;

export const getTasks = async () => {
  const response = await fetch(taskURL);
  const data = await response.json();
  return data;
};
