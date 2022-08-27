
const rateUsMain = document.getElementById("rate-us");
const rateUsRating = document.getElementById("rate-us-rating").cloneNode( true );
rateUsRating.style.display = 'block'
const rateUsThankYou = document.getElementById("rate-us-thank-you").cloneNode( true );
rateUsThankYou.style.display = 'block'

// starting off with rating div as content of rate us component 
rateUsMain.appendChild( rateUsRating )

document.getElementById("button").onclick = ()=>
{
    // changing rate us component's content to thank you div
    rateUsMain.replaceChild( rateUsThankYou, rateUsRating )
}