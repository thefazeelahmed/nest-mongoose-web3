import ERC20 from 'contracts/ERC20.json';
import ERC721 from 'contracts/ERC721.json';

export const getContractABI = (contractType) => {
  switch (contractType) {
    case 'ERC20':
      return ERC20.abi;
    case 'ERC721':
      return ERC721.abi;
  }
};

export const getContractAddress = async (web3, contractType) => {
  const networkId = await web3.eth.net.getId();

  switch (contractType) {
    case 'ERC20':
      return ERC20.networks[networkId] ? ERC20.networks[networkId].address : '';
    case 'ERC721':
      return ERC721.networks[networkId]
        ? ERC721.networks[networkId].address
        : '';
  }
};
