const select = document.getElementById("people");
const charPic = document.getElementById("pic");
var gender = document.getElementById("gender");
var home = document.getElementById("home");
var species = document.getElementById("species");
var player = document.getElementById("player");
const url = 'https://swapi.dev/api/people/';
const url1 = 'https://swapi.dev/api/people/1/';
const url2 = 'https://swapi.dev./api/people/2/';
const url3 = 'https://swapi.dev/api/people/3/';
const url4 = 'https://swapi.dev/api/people/4/';
const url5 = 'https://swapi.dev/api/people/5/';
const url6 = 'https://swapi.dev/api/people/6/';
const url7 = 'https://swapi.dev/api/people/7/';
const url8 = 'https://swapi.dev/api/people/8/';
const url9 = 'https://swapi.dev/api/people/9/';
const url10 = 'https://swapi.dev/api/people/10/';
window.onload = StartMusic();


StartMusic(){
  player.play();
}

fetch(url)
  .then((response) => response.json())
  .then(function(data){
    let characters = data.results;
    return characters.map(function(character){
    select.options[select.options.length] = new Option(`${character.name}`);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
  
  function ShowInfo(){
    var strCharacter = select.options[select.selectedIndex].text;
    if(strCharacter === 'Luke Skywalker'){
        async function getStarwarsName(){
        const resp = await fetch(url1);
        const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "Luke Skywalker.JPG";
        var planet = data.homeworld;
        var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = 'https://swapi.dev/api/species/1';
        getHomePlanet(urlPlanet);
        getSpecies(strSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
        
    }else if(strCharacter === 'C-3PO'){
        async function getStarwarsName(){
        const resp = await fetch(url2);
         const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "C-3P0.JPG";
        var planet = data.homeworld;
        var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = data.species;
        var strSpeciesSplit = strSpecies.toString().split(":");
        var protocolSpecies = strSpeciesSplit[0];
        var addressSpecies = strSpeciesSplit[1];
        var urlSpecies = protocolSpecies + "s:" + addressSpecies;
        console.log(urlSpecies);
        getHomePlanet(urlPlanet);
        getSpecies(urlSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
    }else if(strCharacter === 'R2-D2'){
        async function getStarwarsName(){
        const resp = await fetch(url3);
        const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "R2-D2.JPG";
        var planet = data.homeworld;
        var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = data.species;
        var strSpeciesSplit = strSpecies.toString().split(":");
        var protocolSpecies = strSpeciesSplit[0];
        var addressSpecies = strSpeciesSplit[1];
        var urlSpecies = protocolSpecies + "s:" + addressSpecies;
        getHomePlanet(urlPlanet);
        getSpecies(urlSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
    }else if(strCharacter === 'Darth Vader'){
        async function getStarwarsName(){
        const resp = await fetch(url4);
        const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "Darth Vader.JPG";
        var planet = data.homeworld;
        var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = 'https://swapi.dev/api/species/1';
        getHomePlanet(urlPlanet);
        getSpecies(strSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
    }else if(strCharacter === 'Leia Organa'){
        async function getStarwarsName(){
        const resp = await fetch(url5);
        const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "Leia.JPG";
        var planet = data.homeworld;
        var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = 'https://swapi.dev/api/species/1';
        getHomePlanet(urlPlanet);
        getSpecies(strSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
    }else if(strCharacter === 'Owen Lars'){
        async function getStarwarsName(){
        const resp = await fetch(url6);
        const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "Owen Lars.JPG";
        var planet = data.homeworld;
        var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = 'https://swapi.dev/api/species/1';
        getHomePlanet(urlPlanet);
        getSpecies(strSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
    }else if(strCharacter === 'Beru Whitesun lars'){
        async function getStarwarsName(){
        const resp = await fetch(url7);
        const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "Beru Whitesun Lars.JPG";
       var planet = data.homeworld;
       var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = 'https://swapi.dev/api/species/1';
        getHomePlanet(urlPlanet);
        getSpecies(strSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
    }else if(strCharacter === 'R5-D4'){
        async function getStarwarsName(){
        const resp = await fetch(url8);
        const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "R5-D4.JPG";
        var planet = data.homeworld;
        var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = data.species;
        var strSpeciesSplit = strSpecies.toString().split(":");
        var protocolSpecies = strSpeciesSplit[0];
        var addressSpecies = strSpeciesSplit[1];
        var urlSpecies = protocolSpecies + "s:" + addressSpecies;
        getHomePlanet(urlPlanet);
        getSpecies(urlSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
    }else if(strCharacter === 'Biggs Darklighter'){
        async function getStarwarsName(){
        const resp = await fetch(url9);
        const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "Biggs Darklighter.JPG";
        var planet = data.homeworld;
        var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = 'https://swapi.dev/api/species/1';
        getHomePlanet(urlPlanet);
        getSpecies(strSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
    }else if(strCharacter === 'Obi-Wan Kenobi'){
        async function getStarwarsName(){
        const resp = await fetch(url10);
        const data = await resp.json();
        gender.innerHTML = data.gender;
        charPic.src = "Obi-Wan.JPG";
        var planet = data.homeworld;
        var planetSplit = planet.split(":");
        var protocolPlanet = planetSplit[0];
        var addressPlanet = planetSplit[1];
        var urlPlanet = protocolPlanet + "s:" + addressPlanet;
        var strSpecies = 'https://swapi.dev/api/species/1';
        getHomePlanet(urlPlanet);
        getSpecies(strSpecies);
        }
        getStarwarsName();
        
        async function getHomePlanet(planet){
        const resp = await fetch(planet);
        const data = await resp.json();
        home.innerHTML = data.name;
        }
        
        async function getSpecies(speciesType){
        const resp = await fetch(speciesType);
        const data = await resp.json();
        species.innerHTML = data.name;
        }
    }
}
