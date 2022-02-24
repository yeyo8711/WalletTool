import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { deleteWallet } from "../actions/actions";

const DisplayWallet = () => {
  const dispatch = useDispatch();
  // Function that Deletes Wallet from State
  const deleteThisWallet = (currentWallet) => {
    dispatch(deleteWallet(currentWallet));
  };

  //Selects the wallet Array from the State
  const wallets = useSelector((state) => state.addWalletReducer);

  // Renders out the wallets inside the State
  return (
    <div className="ui middle aligned selection list">
      {wallets.map((currentWallet) => {
        return (
          <div className="item" key={currentWallet.wallet}>
            <div className="content">
              <div className="header">
                <span>Name:</span>
                {currentWallet.id}
                <span>Wallet:</span>
                {currentWallet.wallet}
              </div>
              <button
                className="mini negative ui button"
                onClick={() => deleteThisWallet(currentWallet.wallet)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  wallet: state.addWalletReducer,
});

export default connect(mapStateToProps)(DisplayWallet);
