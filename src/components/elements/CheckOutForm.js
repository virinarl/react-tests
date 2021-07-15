import React, { useState, useContext } from "react";
import { getFirestore } from "../../firebase";
import useForm from "../../Hooks/useForm";
import firebase from "firebase/app";
import validator from "validator";
import { CartContext } from "../../contexts/CartContext";

import "./styles/CheckOutForm.css";

function CheckOutForm(props) {
  const useCart = useContext(CartContext);
  const { cart, setCart } = useCart;

  const db = getFirestore();
  const [error, setError] = useState(false);
  const [errorMssg, setErrorMssg] = useState("");
  const [venta, completoVenta] = useState(false);
  const [idCompra, setIdCompra] = useState("");

  const [formValues, handleChange] = useForm({
    name: "",
    lastName: "",
    email: "",
    card: "",
  });

  const { name, lastName, email, card } = formValues;

  const compra = {
    user: formValues,
    items: cart,
    totalPrice: props.total,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  const submit = (e) => {
    e.preventDefault();

    const isFormValid = () => {
      if (name.trim().length === 0) {
        setError(true);
        setErrorMssg("Por favor, completa tu Nombre");
        return false;
      } else if (lastName.trim().length === 0) {
        setError(true);
        setErrorMssg("Por favor, completa tu Apellido");
        return false;
      } else if (!validator.isEmail(email)) {
        setError(true);
        setErrorMssg("Por favor, ingresá un Correo Electrónico válido");
        return false;
      } else if (card.trim().length < 16) {
        setError(true);
        setErrorMssg("Por favor, Ingresa un medio de pago válido");
        return false;
      }
      return true;
    };

    if (isFormValid()) {
      db.collection("ventas")
        .add(compra)
        .then(({ id }) => {
          completoVenta(true);
          setIdCompra(id);
          setCart([]);
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <>
      {!venta ? (
        <form onSubmit={submit} className="checkOutForm">
          {error && <div>{errorMssg}</div>}

          <div className="checkOutForm__PersonalInfo">
            <p>Tus datos de la compra</p>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Nombre"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Apellido"
              onChange={handleChange}
            />
            <input
              type="mail"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="checkOutForm__PaymentInfo">
            <p>Especifica el medio de pago</p>
            <input
              type="text"
              name="card"
              value={card}
              placeholder="Tarjeta"
              onChange={handleChange}
            />
          </div>

          <button type="submit">Confirma la compra</button>
        </form>
      ) : (
        <p>
          La compra fue exitosa. El identificador es: <stron>{idCompra}</stron>
        </p>
      )}
    </>
  );
}

export default CheckOutForm;
