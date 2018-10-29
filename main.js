const build1 = (data2) => {
    let domString = 
     `
    <h3>Location Information : ${data2[0].additional_location_information}</h3>
    <h3>Cemetery Name : ${data2[0].cemetery_name}</h3>
    <h3> Address : ${data2[0].number} ${data2[0].street}</h3>
    <h3>${data2[0].mapped_location_address}</h3>
    `
    ;
    $('#printFirst').append(domString);
}

//Use this Object.values(data[0])
const build = (data) => {
    let domString = '';
    for(let i=0;i<data.length;i++){
        // domString += `<div>${data[i].death_date}</div>`;
        domString += `<div>${Object.values(data[i])}</div>`;
    } 
    $('#printHere').append(domString); 
}

const apiGet = () => {
    return new Promise((resolve, reject)=> {
        $.get('https://data.nashville.gov/resource/jrij-nn43.json').done(data => {
       resolve(data) 
      })
      .fail((error) => {
        console.error(error);
        reject(error)
      }); 
    })
};

const callApi2 = () =>{   
    apiGet().then(data => { 
        console.log(data)
        build(data);
    })
    .catch((error)=>{
        console.log(error);
    });
};

const callApi = () =>{   
    apiGet().then(data => { 
        console.log(data)
        build1(data);
        callApi2();
    })
    .catch((error)=>{
        console.log(error);
    });
};

callApi();
