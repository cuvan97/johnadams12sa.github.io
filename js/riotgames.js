let APIKEY = 'RGAPI-69cb8f27-1604-4961-b3c2-ae47bac8377f';
let riotURL = 'https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=';
let championJSONURL = 'http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json';
let queryURL = riotURL + APIKEY;
var riotChampionJson = {};
var freeChampionRotations = {};
let championSearch = document.getElementById("searchBtn3").value;
let champion = "";

function parseChampionJSON(championJSONURL){
    fetch(championJSONURL).then(results =>{
        return results.json();
    }).then(results =>{
        riotChampionJson = results;
        console.log(riotChampionJson);
    })
}

function freeChampionRotationJSON(){
    fetch(queryURL).then(results => {
        return results.json();
    }).then(results => {
        freeChampionRotations = results;
        console.log(freeChampionRotations);
    })
}

function searchChampion(){
    for(x in riotChampionJson.data){
        if(championSearch == x){
            champion = x.name;
            let modifiedChampionJSONURL = championJSONURL;
            modifiedChampionJSONURL.splice(-4,0,"/"+champion);
            parseChampionJSON(modifiedChampionJSONURL);
            console.log(modifiedChampionJSONURL);
        }
    }
}

function init(){
    parseChampionJSON(championJSONURL);
    /*freeChampionRotationJSON();*/
}

window.onload = init();