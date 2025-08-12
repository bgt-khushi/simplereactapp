import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Static/Gallery.css";

const images = [
  { id: 1, src: "https://picsum.photos/300/200?random=1", title: "Image 1" },
  { id: 2, src: "https://picsum.photos/300/200?random=2", title: "Image 2" },
  { id: 3, src: "https://picsum.photos/300/200?random=3", title: "Image 3" },
  { id: 4, src: "https://picsum.photos/300/200?random=4", title: "Image 4" },
  { id: 5, src: "https://picsum.photos/300/200?random=5", title: "Image 5" },
  { id: 6, src: "https://picsum.photos/300/200?random=6", title: "Image 6" },
];

function Gallery() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">React Bootstrap Gallery</h2>
      <Row>
        {images.map((img) => (
          <Col key={img.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={img.src} />
              <Card.Body>
                <Card.Title>{img.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
