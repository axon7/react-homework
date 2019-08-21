import React from "react";
import { fetchPictures } from "../actions/actions";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledFlexContainer = styled.div`
  width: 75vw;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const FlexImage = styled.img`
  height: 100%;
  width: 100%;
  background-color: lightgray;
  object-fit: cover;

  :hover {
    opacity: 0.6;
    transition: 0.2s;
  }
`;

const FlexImageLink = styled.a`
  max-width: 350px;
  height: 350px;
  width: 100%;
  margin: 15px;
`;

class Gallery extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPictures());
  }
  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  render() {
    let nineMarilyns = this.props.data.slice(0, 9);

    if (this.props.error) {
      return <div>Error: {this.props.error.message}</div>;
    }

    if (this.props.loading) {
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "50vh",
            alignItems: "center"
          }}
        >
          <Loader type='TailSpin' color='#79d6bb' height={150} width={150} />
        </div>
      );
    }
    return (
      <StyledFlexContainer>
        {nineMarilyns.map((item, index) => {
          return (
            <FlexImageLink href={item.link} target='blank' key={index}>
              <FlexImage src={item.media.m} alt='marilyn monroe' />
            </FlexImageLink>
          );
        })}
      </StyledFlexContainer>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  loading: state.loading
});

export default connect(mapStateToProps)(Gallery);
