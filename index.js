const buttonRandom = document.getElementById("button-random");

function fetchSimpsonQuotesJSON() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes/`;
  axios
    .get(url)
    .then(function (response) {
      return response.data;
    })
    .then(function (simpsonQuote) {
      console.log("data decoded from JSON:", simpsonQuote);
      const simpsonQuoteHtml = `
        <p><strong>${simpsonQuote[0].character}</strong></p>
        <img src="${simpsonQuote[0].image}" />
        <p>${simpsonQuote[0].quote}</p>
      `;
      document.querySelector("#simpson-quote").innerHTML = simpsonQuoteHtml;
    });
}
fetchSimpsonQuotesJSON();

buttonRandom.addEventListener("click", (e) => {
  e.preventDefault();
  fetchSimpsonQuotesJSON();
});
