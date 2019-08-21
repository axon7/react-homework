import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 80%;
  margin: 30px;
`;
const StyledH1 = styled.h1`
  letter-spacing: -2px;
  margin-bottom: 5px;
`;
const StyledText = styled.p`
  width: 100%;
  margin: 25px 0;
`;

const StyledLocation = styled.p`
  color: grey;
  margin: 0;
`;

const StyledBlockquote = styled.blockquote`
  width: 100%;
  font-style: italic;
  border-left: 4px solid #79d6bb;
  color: grey;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
  width: 70%;
  padding-left: 15px;
`;

export default function Profile() {
  return (
    <StyledContainer>
      <StyledH1>Marilyn Monroe</StyledH1>
      <StyledLocation>
        <span style={{ marginRight: "5px" }}>
          <i className='fas fa-map-marker-alt' />
        </span>
        Poznan, PL
      </StyledLocation>

      <article>
        <StyledText>
          Marilyn Monroe (born Norma Jeane Mortenson; June 1, 1926 – August 4,
          1962) was an American actress, model, and singer. Famous for playing
          comic "blonde bombshell" characters, she became one of the most
          popular sex symbols of the 1950s and early 1960s and was emblematic of
          the era's changing attitudes towards sexuality. Although she was a
          top-billed actress for only a decade, her films grossed $200 million
          (equivalent to $2 billion in 2018) by the time of her unexpected death
          in 1962. More than half a century later, she continues to be a major
          popular culture icon.
        </StyledText>
        <StyledBlockquote cite='https://en.wikiquote.org/wiki/Marilyn_Monroe'>
          The truth is I've never fooled anyone. I've let men sometimes fool
          themselves. Men sometimes didn’t bother to find out who and what I
          was. Instead they would invent a character for me. I wouldn't argue
          with them. They were obviously loving somebody I wasn't. When they
          found this out, they would blame me for disillusioning them — and
          fooling them.
        </StyledBlockquote>

        <StyledText>
          Monroe's troubled private life received much attention. She struggled
          with substance abuse, depression, and anxiety. Her second and third
          marriages, to retired baseball star Joe DiMaggio and playwright Arthur
          Miller, were highly publicized and both ended in divorce. On August 4,
          1962, she died at age 36 from an overdose of barbiturates at her home
          in Los Angeles. Although Monroe's death was ruled a probable suicide,
          several conspiracy theories have been proposed in the decades
          following her death.
        </StyledText>
      </article>
    </StyledContainer>
  );
}
