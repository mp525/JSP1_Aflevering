const fetch = require("node-fetch");

function getPlanetforFirstSpeciesInFirstMovieForPerson(id){
    fetch(`https://swapi.dev/api/people/${id}/`).then(res=>res.json())
    .then(r1=>{
        console.log(r1.name);
        fetch(`${r1.films[0]}`).then(res=>res.json())
        .then(r2=>{
            console.log(r2.title);
            fetch(`${r2.species[0]}`).then(res=>res.json())
            .then(r3=>{
                console.log(r3.name);
                fetch(`${r3.homeworld}`).then(res=>res.json())
                .then(r4=>{
                    console.log(r4.name)
                })
                .catch(err=>{
                    console.log(err);
                })
            })
        })
    })
 }
 //getPlanetforFirstSpeciesInFirstMovieForPerson(1);

 async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id){
     try{
    const r1 = await fetch(`https://swapi.dev/api/people/${id}/`).then(res=>res.json());
    const r2 = await fetch(`${r1.films[0]}`).then(res=>res.json());
    const r3 = await fetch(`${r2.species[0]}`).then(res=>res.json());
    const r4 = await fetch(`${r3.homeworld}`).then(res=>res.json());
    console.log(`Name: ${r1.name}
    First film: ${r2.title}
    First species: ${r3.name}
    Homeworld for specie: ${r4.name}`);
     }catch(err){
         console.log(err);
     }
 }

 getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);

 
 