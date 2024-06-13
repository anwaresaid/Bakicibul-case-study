import axiosInstance from "./httpService";
//add the promise return type to all requests
export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};
