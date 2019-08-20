import React from "react";
import { italic } from "ansi-colors";

export default function Profile() {
  return (
    <div>
      <h1>Marilyn Monroe</h1>
      <p>icon Poznan, PL</p>

      <article>
        <p>
          Marilyn Monroe (born Norma Jeane Mortenson; June 1, 1926 – August 4,
          1962) was an American actress, model, and singer. Famous for playing
          comic "blonde bombshell" characters, she became one of the most
          popular sex symbols of the 1950s and early 1960s and was emblematic of
          the era's changing attitudes towards sexuality. Although she was a
          top-billed actress for only a decade, her films grossed $200 million
          (equivalent to $2 billion in 2018) by the time of her unexpected death
          in 1962. More than half a century later, she continues to be a major
          popular culture icon.
        </p>
        <blockquote cite='https://en.wikiquote.org/wiki/Marilyn_Monroe'>
          <i>
            The truth is I've never fooled anyone. I've let men sometimes fool
            themselves. Men sometimes didn’t bother to find out who and what I
            was. Instead they would invent a character for me. I wouldn't argue
            with them. They were obviously loving somebody I wasn't. When they
            found this out, they would blame me for disillusioning them — and
            fooling them.
          </i>
        </blockquote>

        <p>
          Monroe's troubled private life received much attention. She struggled
          with substance abuse, depression, and anxiety. Her second and third
          marriages, to retired baseball star Joe DiMaggio and playwright Arthur
          Miller, were highly publicized and both ended in divorce. On August 4,
          1962, she died at age 36 from an overdose of barbiturates at her home
          in Los Angeles. Although Monroe's death was ruled a probable suicide,
          several conspiracy theories have been proposed in the decades
          following her death.
        </p>
      </article>
    </div>
  );
}
