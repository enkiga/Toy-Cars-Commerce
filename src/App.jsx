import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { product } from "./product";

// Create function if firstName is not defined show a pop-up asking for the user's name
let firstName = sessionStorage.getItem("firstName");
if (!firstName || firstName === "null") {
  firstName = prompt("What is your name?");
  sessionStorage.setItem("firstName", firstName);
}

function App() {
  return (
    <div className="main">
      <Container className="app-container">
        {product.map((product) => (
          <Card className="product-card shadow-lg">
            <Image imageUrl={product.imageUrl} name={product.name} />
            <Card.Body>
              <Name name={product.name} />
              <Price price={product.price} />
              <Description description={product.description} />
            </Card.Body>
          </Card>
        ))}
      </Container>

      <div className="greeting-section">
        <h2 className="greeting">
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h2>
        {firstName && (
          <img
            src="https://images.unsplash.com/vector-1740391339979-a81640867755?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            className="user-avatar"
          />
        )}
      </div>
    </div>
  );
}

export default App;
