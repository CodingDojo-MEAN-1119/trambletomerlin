var users = [
    {
      fname: "Tramble",
      lname: "Tomerlin",
      languages: ["C#", "JavaScript", "PHP", "HTML", "Ruby", "Java"],
      interests: {
        cars: ["Trackhawk", "Tesla"],
        woodworking: ["Tables", "Artwork"],
        football: ["Michigan", "Lions"]
      }
    },
    {
      fname: "Kimberlee",
      lname: "Tomerlin",
      languages: ["English", "Spanish", "French"],
      interests: {
        medicine: ["Doctor", "Womens Health"],
        wine: ["cabernet",'pino'],
      }
    },
    {
      fname: "Carter",
      lname: "Tomerlin",
      languages: ["Barley English"],
      interests: {
        tv: ["Wild Krats", "Tumble Leaf", "Spongebob"],
        soccer: ["Balls", "Yellow Cards"]
      }
    }
  ]    
function Languages(lang){    
    for (let index = 0; index < lang.length; index++){ 
        var result = lang[index].languages;

        var join = ""; 
        for(j=0; j<result.length-2; j++){
            var join= result[j] + ",";
        }
        join+= " and " + result[result.length-1] + ".";
        console.log(lang[index].fname +" "+ lang[index].lname + " knows "+ join);
      }     
}
Languages(users);