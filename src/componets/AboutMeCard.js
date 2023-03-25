import React from "react";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";


const { Meta } = Card;

const AboutMe = () => (
  <Card
    hoverable={true}
    style={{ width: 300, display: "flex", flexDirection: "column" }}
    cover={
      <img
        alt="example"
        src=""
      />
    }
    actions={[
      <Button
        type="text"
        icon={
          <LinkedinFilled
            style={{ color: "#800797", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://www.linkedin.com/in/marta-wambaugh-94892824b/"
      ></Button>,
      <Button
        type="text"
        icon={
          <GithubFilled
            style={{ color: "#800797", fontSize: "20px" }}
            key="link"
          />
        }
        href="https://github.com/mwambaugh"
      ></Button>,
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://res.cloudinary.com/docfmlnne/image/upload/v1679764633/IMG_9460_1_xrfkow.jpg" />
      }
      title="About Me"
      description="I'm a full stack web developer based out of Washington D.C."
    />
  </Card>
);

export default AboutMe;