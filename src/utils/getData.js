export const getData = (coin) => {
  return fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD,ARS`).then((res) => res.json());
};
