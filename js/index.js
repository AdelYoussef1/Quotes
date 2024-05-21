var changeBtn =document.getElementById("changeBtn")

var quoteOutput = document.getElementById("quoteOutput")
var authorOutput = document.getElementById("authorOutput")
function generateQuote() {

    var quotes = [{ quote: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`, author: `― William W. Purkey` },
    {quote: `“So many books, so little time.”`, author: `― Frank Zappa` },
    { quote: `“A room without books is like a body without a soul.”`, author: `― Marcus Tullius Cicero` },
    { quote: `“You only live once, but if you do it right, once is enough.”`, author: `― Mae West` },
    { quote:`"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.`, author:`"― John Lennon`}
    ]

    var random = Math.trunc(Math.random() * quotes.length);

    quoteOutput.innerHTML=quotes[random].quote;
    authorOutput.innerHTML=quotes[random].author;
}

