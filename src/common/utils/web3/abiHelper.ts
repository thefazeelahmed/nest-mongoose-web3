import CHRG from 'contracts/CHRG.json';

export const getContractABI = (contractType) => {
  switch (contractType) {
    case 'CHRG':
      return CHRG.abi;
  }
};

export const getContractAddress = async (web3, contractType) => {
  const networkId = await web3.eth.net.getId();

  switch (contractType) {
    case 'CHRG':
      return CHRG.networks[networkId] ? CHRG.networks[networkId].address : '';
  }
};
