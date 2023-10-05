import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react'
import Footer from './Footer';

export default function Home() {
  return (
    <div>
     <Container >
      <Row>
        <Col xs={6} md={4}>
          <Image src="/img/image.jpg" thumbnail  />
        </Col>
      </Row>
    </Container >
    <div style={{fontSize: "30px" }}>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
