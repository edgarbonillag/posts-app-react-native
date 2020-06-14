import Config from 'react-native-config';

const API_URL = Config.API_URL;

export const commentsEndpoint = ({ postId }: { postId: number }) =>
  `${API_URL}comments?postId=${postId}`;

export const postsEndpoint = () => `${API_URL}posts`;
