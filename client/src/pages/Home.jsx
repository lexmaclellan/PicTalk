import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react'
import Footer from './Footer';
const handleLogout = () => {
  localStorage.setItem('isSignedIn', 'false');

  // ... any other logout operations you want to add
};

export default function Home() {

  return (
    <div>
      <br />
      {/* <div style={{float: "right", borderRadius: "8px", width: "100px", fontSize: "20px"}}
      >
            <a href="/" onClick={handleLogout}>Log Out</a>
          
        </div> */}
      <br />
     <Container >
      <Row>
        <Col style={{textAlign: "center"}}>
          <Image src="/img/logo.png" thumbnail  />
        </Col>
      </Row>
    </Container >
    <div style={{fontSize: "30px" }}>
        Hello, friends! Wellcome to our application called PicTalk - 
        here you can share your pictures and thoughts, 
        follow people with same interests, leave comments and likes - 
        let's make our life more colorful with the pictures of the beauty around us!
    </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
