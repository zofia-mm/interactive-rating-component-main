
const rateUsMain = document.getElementById("rate-us");
const rateUsRating = document.getElementById("rate-us-rating").cloneNode( true );
rateUsRating.style.display = 'block';
const rateUsThankYou = document.getElementById("rate-us-thank-you").cloneNode( true );
rateUsThankYou.style.display = 'block';

// starting off with rating div as content of rate us component 
rateUsMain.appendChild( rateUsRating );

// starting off with submit button disabled
document.getElementById("rate-us-rating-submit").disabled = true
document.getElementsByName("rate-us-options").forEach( element =>
{
    element.onclick = ()=>
    {
        // enabling the submit button after a click on any of the rating buttons
        document.getElementById("rate-us-rating-submit").disabled = false
    }
} )


document.getElementById("rate-us-rating-submit").onclick = ()=>
{
    var selected = 0;
    document.getElementsByName("rate-us-options").forEach( element =>
    {
        if( element.checked ) { selected = element.value }
        console.log( element.checked )
    });

    // changing rate us component's content to thank you div
    rateUsMain.replaceChild( rateUsThankYou, rateUsRating );

    document.getElementById("rate-us-thank-you-selected").textContent
        = `You selected ${selected} out of 5`;
}
