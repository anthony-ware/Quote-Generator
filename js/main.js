$(document).ready(function(){
	$('.button').click(function(){
		// $(this).hide();
		
		let quotes = [{
          "quote":"The man who passes the sentence should swing the sword.",
          "author": "Ned Stark"
        },

        {
          "quote": "When you play the Game of Thrones, you win or you die.",
          "author": "Cersei Lannister"
        },

        {
          "quote": "I'm not going to stop the wheel. I'm going to break the wheel.",
          "author": "Daenerys Targaryen"
        },

        {
          "quote": "Money buys a man's silence for a time. A bolt in the heart buys it forever",
          "author": "Petyr Baelish"
        },

        {
          "quote": "Why are all the Gods such vicious cunts? Where is the God of tits and wine",
          "author": "Tyrion Lannister"
        },

        {
          "quote": "A very small man can cast a very large shadow",
          "author": "Lord Varys"
        },

        {
          "quote": "There's no cure for being a cunt",
          "author": "Bronn"
        },

        {
          "quote": "You're mine and I am yours.And if we die, we die but first we live ",
          "author": "Ygritte"
        },

        {
          "quote": " A lion doesn't concern himself with the opinion of sheep",
          "author": "Twyin Lannister"
        },

        {
          "quote": "Any man who must say 'I am the king' is no true king",
          "author": "Twyin Lannister"
        },

        {
          "quote": "You waste time trying to get people to love you you'll end up the most popular dead-man in town",
          "author": "Bronn"
        },
        {
        	"quote":"That's what I do: I drink and I know things.",
        	"author":"Tyrion Lannister"
        }
      ];

      let randomQuote=quotes[Math.floor(Math.random()* quotes.length)]

     

     $('#quote').html(function(){
     	let $quote =$('#quote')

     	return "<p class='quote'>" + randomQuote.quote + "</p>" +"<p class='author'> "+ "-"+ randomQuote.author +"</p>"
     })


      

     
		
	})

	const countdownTimer= function(){
	
		let currentDate= new Date();// Current Date 
		let currentTime= currentDate.getTime();//Current Date in Milliseconds 
		let eventDate= Date.parse("July 16, 2017");// Countdown Date 

		let timeUntil= eventDate-currentTime;

		const days= Math.floor(timeUntil/(1000*60*60*24));
		const hours=Math.floor(timeUntil/(1000*60*60)% 24);
		const minutes=Math.floor((timeUntil/1000/60)% 60);
		const seconds= Math.floor((timeUntil/1000)% 60);

		//condition,true,else
		//This is for the leading 0 
		//
		//
		//
		//
		//
		

		 let timeLeft= "<p>"+days +" days " + hours +" hours " +minutes+" minutes " + seconds+ " seconds " + " until the season premiere "+ "</p>"

		 $(".countdown").html(timeLeft);
		 setTimeout(countdownTimer,1000);
		

		 

	}
	countdownTimer();

})