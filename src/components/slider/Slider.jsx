import { Carousel, Container } from "react-bootstrap";
import image1 from "./../assets/images/1.png";
import image2 from "./../assets/images/2.png";
import image3 from "./../assets/images/3.png";
import Card from "react-bootstrap/Card";
function Slider() {
  return (
    <Container style={{ marginTop: "120px" }}>
      <div className="item">
        <h1>Testimonials</h1>
      </div>
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <Card style={{ width: "40%", marginLeft: "30%" }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>
                <h2>Harshdeep Yadav</h2>
                <span style={{ fontSize: "14px" }}>
                  Posted on :- 21/02/2019
                </span>
              </Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur quibusdam est iusto voluptatibus debitis quasi odit
                  nam temporibus iste beatae, nihil odio libero fugiat nostrum
                  architecto, officia ducimus ratione accusantium.m
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <Card style={{ width: "40%", marginLeft: "30%" }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>
                <h2>E-School</h2>
                <span style={{ fontSize: "14px" }}>
                  Posted on :- 05/01/2022
                </span>
              </Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur quibusdam est iusto voluptatibus debitis quasi odit
                  nam temporibus iste beatae, nihil odio libero fugiat nostrum
                  architecto, officia ducimus ratione accusantium.m
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card style={{ width: "40%", marginLeft: "30%" }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>
                <h2>Anand Stephen</h2>
                <span style={{ fontSize: "14px" }}>Posted on :- 1/05/2021</span>
              </Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur quibusdam est iusto voluptatibus debitis quasi odit
                  nam temporibus iste beatae, nihil odio libero fugiat nostrum
                  architecto, officia ducimus ratione accusantium.m
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slider;
