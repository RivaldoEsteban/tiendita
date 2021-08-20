/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";

const DataClientStyled = styled.form`
  padding: 0 1.5rem;
  * {
    display: block;
  }
  input {
    width: 100%;
    padding: 0 0.75rem;
    flex: 1;
    height: 35px;
    box-sizing: border-box;
  }
  label {
    margin-bottom: 0.5rem;
    font: var(--body2-regular);
  }

  .email input,
  .customer-name input {
    overflow: hidden;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 1px 1px 0px #0000000a;
    border: 1px solid #3c42571f;
  }

  .number {
    border: 1px solid red;
  }
  .email,
  .card-data,
  .customer-name {
    margin-bottom: 1.8rem;
    overflow: hidden;
  }

  .data {
    border-radius: 0.25rem;
    overflow: hidden;
    border: 1px solid #3c42571f;
    box-shadow: 0px 1px 1px 0px #0000000a;
    input {
      border: none;
    }
  }
  .mastercard {
    position: relative;
    img {
      position: absolute;
      right: 12px;
      height: 1.4rem;
      top: calc(50% - (1.4rem / 2));
    }
    input {
      border-bottom: 1px solid #3c42571f;
    }
  }
  .expiration-date {
    .clave-card {
      border-left: 1px solid #3c42571f;
    }
    display: flex;
    position: relative;
    .date {
      border-right: 1px solid #3c42571f;
    }
    input {
      width: 50%;
      display: block;
    }
    img {
      position: absolute;
      height: 1.5rem;
      top: calc(50% - (1.5rem / 2));
      right: 12px;
    }
  }
  .buy-button {
    display: block;
    width: 100%;
    font: var(--body1-bold);
    padding: 12px 0;
    border-radius: 0.25rem;
    border: none;
    background: var(--malachite);
    color: var(--white);
  }
  @media (max-width: 850px) {
    padding: 0;
    height: auto;
  }
`;

function DataClient({ finalPrice, setSuccessfulPurchase }) {
  console.log(finalPrice);
  function handleForm(event) {
    event.preventDefault();
    setSuccessfulPurchase(true);
  }

  return (
    <DataClientStyled onSubmit={handleForm}>
      <div className="email">
        <label htmlFor="">Correo electrónico</label>
        <input
          type="email"
          name="email"
          id="imail"
          required
          placeholder="rivaldoestebang@gmail.com"
        />
      </div>
      <div className="card-data">
        <label htmlFor="">Información de la tarjeta</label>
        <div className="data">
          <div className="mastercard">
            <InputMask
              mask="9999 9999 9999 9999"
              placeholder="8371 3332 5420 1030"
            />
            <img src="./icons/mastercard.svg" alt="mastercard card" />
          </div>
          <div className="expiration-date">
            <InputMask mask="99/99" placeholder="DD/MM" />
            <input
              className="clave-card"
              type="text"
              pattern="[0-9]+"
              required
              placeholder="CVC"
              maxLength="3"
            />
            <img src="icons/card-cvc.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="customer-name">
        <label htmlFor="">Nombre en la tarjeta</label>
        <input
          type="text"
          placeholder="rivaldo fabio esteban gonzalez"
          required
        />
      </div>
      <button className="buy-button">Pagar ${finalPrice}</button>
    </DataClientStyled>
  );
}

export default DataClient;
