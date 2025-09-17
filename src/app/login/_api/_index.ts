import type { RandomUserResponse, UserData } from "./_types";

export const login = async (): Promise<UserData | undefined> => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=1&nat=us", { method: "GET" });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data: RandomUserResponse = await res.json();

    return data.results[0];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
