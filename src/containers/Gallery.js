import React from "react";
import { fetchPictures } from "../actions/actions";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

class Gallery extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPictures());
  }

  render() {
    let nineMarilyns = this.props.data.slice(0, 9);

    if (this.props.error) {
      return <div>Error: {this.props.error.message}</div>;
    }

    if (this.props.loading) {
      return <Loader type='TailSpin' color='blue' height={80} width={80} />;
    }
    return (
      <div>
        {nineMarilyns.map((item, index) => {
          return (
            <a href={item.link} target='blank' key={index}>
              <img src={item.media.m} alt='marilyn monroe' />
            </a>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  loading: state.loading
});

export default connect(mapStateToProps)(Gallery);
