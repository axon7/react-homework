import React from "react";
import { fetchPictures } from "../actions/actions";
import { connect } from "react-redux";

class Gallery extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPictures());
  }
  render() {
    return (
      <div>
        {this.props.data.map(item => {
          return (
            <ul>
              <li>
                <img src={item.media.m} alt='marilyn' />
              </li>
              ;
            </ul>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(Gallery);
