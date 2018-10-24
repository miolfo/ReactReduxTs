

import * as React from 'react';
import { connect } from "react-redux";
import IArticle from '../ts/IArticle';

const mapStateToProps = (state: any) => {
  return { articles: state.articles };
};

/*const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);*/

class ConnectedList extends React.Component <{articles: IArticle[]}>{
  
  public render() {
    return (
      <ul className="list-group list-group-flush">
      {this.props.articles.map((el: IArticle) => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))}
    </ul>
    )
  }
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;
// export default ConnectedList;