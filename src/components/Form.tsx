import * as React from 'react';
import { connect } from 'react-redux';
import * as uuidv1 from "uuid";
import addArticle from "../actions/index";
import IArticle from "../ts/IArticle";

const mapDispatchToProps = (dispatch: any) => {
  return {
    addArticle: (article: IArticle) => dispatch(addArticle(article))
  };
};


class ConnectedForm extends React.Component<{addArticle: (article: IArticle) => undefined}, { title: string }> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg">
        Save
      </button>
    </form>
    )

  }

  private handleTitleChange(event: any) {
    this.setState({title: event.target.value});
  }

  private handleSubmit(event: any) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id, content: "lorem ipsum", author: "Sample Author"});
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)
export default Form;