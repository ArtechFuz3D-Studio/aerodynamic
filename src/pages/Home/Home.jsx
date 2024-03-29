import React, { Suspense } from "react";
import { Hero } from "../../components";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Suspense fallback={null}>
          <Hero className="spline" />
        </Suspense>
      </Wrapper>

      <Content>
        <h1>Daft Punk - Aerodynamic</h1>
        <h3>Featuring - The Crescendolls</h3>
        <p>
          Help Octave, Baryl, Stella and Arpegius
          <br />
          play the next song parts in time.
          <br />
          Click on a character to cue the next music section.
        </p>

        <h3>by Studio Huit</h3>
      </Content>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;
    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;
const Content = styled.div`
  position: absolute;
  top: 300px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 80px;
  @media (max-width: 1024px) {
    gap: 40px;
  }
  h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }
  h3 {
    font-family: "Spline Sans Mono", monospace;
    font-size: 20px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }
  p {
    font-size: smaller;
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  button {
    background: rgba(0, 0, 0, 0.2);

    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 140px;
    /* color: white; */
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;
    display: flex;
    gap: 2px;
    justify-content: center;
    align-items: center;

    :hover {
      border: 1px solid rgba(11, 131, 121, 0.8);

      transform: translateY(-3px);
    }
  }
  h1,
  h3,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
  a {
    color: white;
    transition: 1s;
    text-decoration: none;
    :hover {
      font-style: none;
      color: teal;
    }
  }
`;
