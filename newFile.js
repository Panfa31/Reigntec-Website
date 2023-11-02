fetch("https://api.valr.com/v1/public/currencieskey=${apiKey}")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });