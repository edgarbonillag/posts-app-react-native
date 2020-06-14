// EDNPOINTS
import { postsEndpoint } from './endpoints';

// TYPES
import { PostItem } from 'src/types';

interface PostsServiceResponse {
  success: boolean;
  payload: PostItem[];
  error: string;
}

// MAIN CODE

export const getPostsService = async (): Promise<PostsServiceResponse> => {
  try {
    let serviceResponse: PostsServiceResponse;
    const response = await fetch(postsEndpoint());
    const parsedResponse = await response.json();
    if (response.status === 200) {
      serviceResponse = { success: true, payload: parsedResponse, error: '' };
    } else {
      serviceResponse = { success: false, payload: [], error: parsedResponse.error };
    }
    return serviceResponse;
  } catch (err) {
    console.log(`Unable to get the Posts from the database: ${err}`);
    return { success: false, payload: [], error: `${err}` };
  }
};
