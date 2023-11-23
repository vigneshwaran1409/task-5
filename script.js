/*For the given JSON lterate over all forloops(for,for in,for each ,for of)*/

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  console.log(data);
  var result = JSON.parse(data);
  console.log(result[0].name.common);
  console.log(result[249].area);
  //for accessing multiple values use looping
  //!using for loop
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].area);
  } 
//!using for in loop
 for (let index in result){
    console.log(result[index].region)
 }
 //!using for of loop
 for(let obj of result){
    console.log(obj.subregion,obj.population,obj.name.common);
 }
};

/*2.create you  oun resume in data in JSON format*/

{
    basic:{
        name : "vigneshwaran";
        label: " web developer";
        email: "mvigneshwaran1409@gmail.com";
        summary:" i am vigneshwaran come from karur i study at b.sc computer science and study 11,12 std in velammal matric hr.sec school in karur and study course in javascript in guvi";
        location:{
            country:"indian";
            address:"63/1 indira nagar gandhi gramam(south),karur";
            city:"karur";
        }
        profiles:[{
            network:"web development";
            username:"vigneshwaran1409";
            url:
        }]
    }
    project:[{
        names:"near by store";
        description:"delivery by department store product to the customer";
    }]
    education:[{
        institution:"bharathidasan university";
        area:"java script";
        studytype:"b.sc computer science";
        course:[
            nams:"javascript";
        ]
        location:"karur";
    }]
    skills:[{"javascript":"webdevelopment"}]
    language:[{
        language:"tamil,english";
        level:"neative speak tamil";
    }]
}
