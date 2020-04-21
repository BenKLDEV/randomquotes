(function() {
  const quotes = [ 
    {
      quote: 
      "Life is blabla",
      author: "Jamapel"
    },

    {
      quote: 
      "Life is all about kebab",
      author: "Obama"
    },
    
    {
      quote: 
      "Life is all about walls",
      author: "Donald El Trumpo"
    },
    
    {
      quote: 
      "Life is blabla",
      author: "Jamapel"
    },
    
    {
      quote: 
      "Life is full of people willing to give me money #facts",
      author: " Marilyn Monroe"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;

    document.querySelector(".author").textContent = quotes[random].author;
  });
}) ();