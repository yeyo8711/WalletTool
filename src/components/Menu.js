import React, { useRef } from "react";
import { addWallet } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const dispacth = useDispatch();
  const walletForm = useRef(null);
  const idForm = useRef(null);
  //Selects the wallet Array from the State
  const wallets = useSelector((state) => state.addWalletReducer);
  // Creates new array with the wallets to validate
  const allWallets = [];
  wallets.forEach((i) => allWallets.push(i.wallet));

  const addNewWallet = () => {
    const form = walletForm.current.value;
    const id = idForm.current.value;
    //Checks to see if the wallet is duplicated or invalid
    if (allWallets.includes(form)) {
      alert("Duplicate Wallet");
    } else if (form.length !== 42) {
      alert("Invalid Wallet");
    } else if (!id) {
      alert("Please add Discord ID");
    } else {
      dispacth(addWallet(form, id));
    }
  };

  return (
    <div>
      <form className="ui left icon input" onSubmit={(e) => e.preventDefault()}>
        <input name={"id"} type="text" placeholder="Discord ID" ref={idForm} />
        <input
          ref={walletForm}
          name={"wallet"}
          type="text"
          placeholder="Wallet"
        />
        <i className="users icon"></i>
      </form>
      <button className="ui positive button" onClick={addNewWallet}>
        Add
      </button>
    </div>
  );
};

export default Menu;
