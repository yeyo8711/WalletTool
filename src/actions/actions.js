export const addWallet = (form, id) => {
  return {
    type: "ADD_WALLET",
    payload: {
      wallet: form,
      id: id,
    },
  };
};

export const deleteWallet = (walletToDelete) => {
  return {
    type: "DELETE_WALLET",
    payload: walletToDelete,
  };
};
