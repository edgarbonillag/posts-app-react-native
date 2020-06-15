// EDNPOINTS
import { commentsEndpoint } from './endpoints';

// TYPES
import { Comment } from '../types';

interface CommentsServiceResponse {
  success: boolean;
  payload: Comment[];
  error: string;
}

// MAIN CODE

export const getCommentsService = async ({
  postId,
}: {
  postId: number;
}): Promise<CommentsServiceResponse> => {
  try {
    let serviceResponse: CommentsServiceResponse;
    const response = await fetch(commentsEndpoint({ postId }));
    const parsedResponse = await response.json();
    if (response.status === 200) {
      serviceResponse = { success: true, payload: parsedResponse, error: '' };
    } else {
      serviceResponse = { success: false, payload: [], error: parsedResponse.error };
    }
    return serviceResponse;
  } catch (err) {
    console.log(`Unable to get the Comments from the database: ${err}`);
    return { success: false, payload: [], error: `${err}` };
  }
};
