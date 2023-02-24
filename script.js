


let url = "https://api.coinlore.net/api/exchange/?id=5";
let response= fetch(url);
response.then((crypto)=>{
        return crypto.json();
    }).then((crypto)=>{
        // console.log(crypto)
        ihtml="";
    for (let key in crypto.pairs) {
        var epoch = crypto.pairs[key].time;
     var date = new Date(epoch * 1000);
     console.log();
      ihtml+= `<div class="price"><h2>${crypto.pairs[key].base} </h2>
      <span>/${crypto.pairs[key].quote}</span> 
      <p>VOLUME: ${crypto.pairs[key].volume}</p>
     <p>PRICE:${crypto.pairs[key].price_usd}</p>
     <p class="foot">LAST UPDATED AT ${date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()}</p>
  </div>`




    }
   
    prices.innerHTML = ihtml
}).catch((err)=>{
    console.log(err);

})




    
 






