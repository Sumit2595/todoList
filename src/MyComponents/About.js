import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
export const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Made By</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Sumit Singh
              </Card.Subtitle>
              <Card.Text>
                A full stack web developer.Having a fair amount of experience in{" "}
                <b>reactjs,nodejs,express</b> and <b>mongoDB</b>
              </Card.Text>
              <Card.Link href="https://github.com/Sumit2595" target="_blank">
                Github Link
              </Card.Link>
              <Card.Link
                href="https://www.linkedin.com/in/sumit2525/"
                target="_blank"
              >
                Linkedin
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Idea By</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Sanchit Smarak
              </Card.Subtitle>
              <Card.Text>
                A front end web developer.Having a fair amount of experience in{" "}
                <b>html,css</b> and <b>javascript</b>
              </Card.Text>
              <Card.Link href="https://www.linkedin.com/in/bsanchit">
                Github Link
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
