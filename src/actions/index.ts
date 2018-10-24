import { ADD_ARTICLE } from '../constants/action-constants';
import IArticle from '../ts/IArticle';

const addArticle = (article: IArticle) => ({ type: ADD_ARTICLE, payload: article });
export default addArticle;