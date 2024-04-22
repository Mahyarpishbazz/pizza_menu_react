import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>our menu</h2>
      {pizzaData.map((pizzas) => (
        <Tempxd pizzadatainfo={pizzas} key={pizzas.name} />
      ))}
    </main>
  );
}

function Tempxd(props) {
  //if (props.pizzadatainfo.soldOut) return null;

  return (
    <li className={`pizza ${props.pizzadatainfo.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzadatainfo.photoName} alt="image is not loaded" />
      <div>
        <h3>{props.pizzadatainfo.name}</h3>
        <p>{props.pizzadatainfo.ingredients}</p>
        <span>{props.pizzadatainfo.soldOut ? "SOLD OUT" : props.pizzadatainfo.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const houers = new Date().getHours();
  const opens = 12;
  const closes = 21;
  const isOpen = houers >= opens && houers <= closes;
  return (
    <footer className="footer">
      {isOpen ? <p>we open untill {closes} at night</p> : <p>you should be happy,we will back as soon as possible</p>}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
