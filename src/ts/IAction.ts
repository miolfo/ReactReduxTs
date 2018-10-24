import IArticle from './IArticle';

export default interface IAction {
  type: string;
  payload: IArticle;
}