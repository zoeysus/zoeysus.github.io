function generateQuote(){
  var inputWord = document.getElementById("word").value;
  var quote = " ";
  
//quote for love  
  if (inputWord === "love"){
    quote +="Settle! Because, otherwise, you're just gonna get older and harder and more alone. And you're gonna do everything you can to fill that hole- with friends and your career and meaningless sex, but the hole... doesn't get filled. And one day you're going to look around and you're going to realize that everybody loves you... but nobody likes you. And that is the loneliest feeling in the world.- Bojack Horseman";
  }
 
//quote for sad    
    if (inputWord === "sad"){
    quote +="Just pretend you are happy, and eventually you'll forget you're pretending - Bojack Horseman";
  }
  
  //quote for tired
    if (inputWord === "tired"){
    quote +="When you get sad, you run straight ahead and you keep running forward, no matter what. - Secretariat";
  }
  
  //quote for suicidal
    if (inputWord === "suicidal"){
    quote +="Thrash to break from gravity. What now could slow the drop? All I’d give for toes to touch the safety back at top. But this is it, the deed is done. Silence drowns the sound. Before I leaped I should've seen the view from halfway down. - Secretariat";
  }
  
  //quote for happy
    if (inputWord === "happy"){
    quote +="The universe is a cruel, uncaring void. The key to being happy isn't a search for meaning. It's just to keep yourself busy with unimportant nonsense, and eventually, you'll be dead. - Mr.Peanutbutter";
  }
  
//quote for friends
    if (inputWord === "friends"){
    quote +="In this terrifying world, all we have are the connections that we make. - Bojack Horseman";
  }
  
//quote for gratitude
    if (inputWord === "gratitude"){
    quote +="It doesn't matter what we did in the past, or how we'll be remembered. The only thing that matters is right now, this moment. - Bojack Horseman";
  }
  
  document.getElementById("quote").innerHTML = quote
};