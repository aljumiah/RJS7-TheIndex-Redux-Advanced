import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

//redux
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class AuthorsList extends Component {
  render() {
    const authorCards = this.props.filteredAuthors.map(author => (
      <AuthorCard key={author.id} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors,
    filteredAuthors: state.rootAuthors.filteredAuthors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterAuthors: query => dispatch(actionCreators.filterAuthors(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsList);
