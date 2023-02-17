import Web3 from 'web3';

export function ether(n: number) {
  return Web3.utils.toBN(
    Web3.utils.toWei(Web3.utils.toBN(n), 'ether').toString(),
  );
}

export function toBN(val: string) {
  return Web3.utils.toBN(val);
}

export function toRealNumber(val: string): number {
  return Number(val);
}

export function toNumber(str: string, decimalPlaces: number): number {
  const powerValue = 18 - decimalPlaces;
  const base = Web3.utils.toBN(10);
  const power = Web3.utils.toBN(powerValue);
  const divisor = base.pow(power);
  return Web3.utils.toBN(str).div(divisor).toNumber() / 10 ** decimalPlaces;
}

export async function getAddressBalance(instance, address) {
  return toNumber(await instance.methods.balanceOf(address).call(), 18);
}

export async function getGasPrice(web3: Web3) {
  return await web3.eth.getGasPrice();
}

export async function getEstimatedGas(tx, from) {
  return await tx.estimateGas({ from });
}

export async function getNonce(web3, address) {
  return await web3.eth.getTransactionCount(address);
}

export async function getTransactionFee(gas, gasPrice) {
  return (gas * gasPrice) / 1e18;
}

export async function getSignedTransaction(web3, tx, nonce, privateKey) {
  const { to, data, gas, contractAddress, gasPrice, chainId } = tx;

  return await web3.eth.accounts.signTransaction(
    {
      to, // contract Address
      data,
      gas,
      contractAddress, // contract Address
      gasPrice,
      nonce,
      chainId,
    },
    privateKey,
  );
}
