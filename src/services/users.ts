// EDNPOINTS
import { userDetailsEndpoint } from './endpoints';

// TYPES
import { User } from '../types';

interface UsersServiceResponse {
  success: boolean;
  payload: User | undefined;
  error: string;
}

// MAIN CODE

export const getUserInfoService = async ({
  userId,
}: {
  userId: number;
}): Promise<UsersServiceResponse> => {
  try {
    let serviceResponse: UsersServiceResponse;
    const response = await fetch(userDetailsEndpoint({ userId }));
    const parsedResponse = await response.json();
    if (response.status === 200) {
      serviceResponse = { success: true, payload: parsedResponse, error: '' };
    } else {
      serviceResponse = { success: false, payload: undefined, error: parsedResponse.error };
    }
    return serviceResponse;
  } catch (err) {
    console.log(`Unable to get the User Info from the database: ${err}`);
    return { success: false, payload: undefined, error: `${err}` };
  }
};
