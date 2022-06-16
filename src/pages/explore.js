import React from "react";
import "./index.css";
import styled from "styled-components";

import Badge from "../components/Badge";
import Card from "../components/Cards";
import websites from "../websites";

import Video from "../assets/video.mp4";


const Page = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: auto;
  scroll-behavior: smooth;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-left: calc(50vw - 160px);

  /* Fake padding-right */
  &::after {
    content: "";
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(50vw - 160px);
    height: 1px;
  }
  > button {
    margin-right: 50px;
    margin-top: 20px;
    width: auto;
    height: auto;
  }

  /* Hide the others cards */
  > button:not(:first-child) {
    visibility: visible; /* switch to 'visible' */
  }
`;


const Explore = () => {
  return (
    // <div className="home-style">
    //   <h1>Explore</h1>
    // </div>
    <div className="custom-page">
    <video
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        scale: "7.5",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1",
      }}
    >
      <source src={Video} type="video/mp4" />
    </video>


    <Page>
      {/* <Badge fixed>Contract Checker NFT's</Badge> */}
      <Grid>
        {websites.map((website, index) => (
          <Card
            key={website.description}
            hexa={website.hexa}
            title={website.title}
            description={website.description}
            image={website.image}
          />
        ))}
      </Grid>


    </Page>
    </div>
  );
};
export default Explore;
