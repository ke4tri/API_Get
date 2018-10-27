

//https://shibe.online/


const build = (data) => {
    let domString = `
    <h3>${data[0].additional_location_information}</h3>
    <h3>${data[0].cemetery_name}</h3>
    <h3> Address : ${data[0].number} ${data[0].street}</h3>
    <h3>${data[0].mapped_location_address}</h3>
    `;
    
    $('#printHere').html(domString); // prints to DOM

}
//data[0].additional_location_information


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

  const callApi = () =>{   
    apiGet().then(data => { 
        console.log(data)
        build(data);
    })
    .catch((error)=>{
        console.log(error);
    });
};

callApi();
/////////////////////////////////////////////////////////

// const initialPinView = (boardId) => {
//     loadPinsForBoard(boardId)
//     .then(data => {
//         writePins(data);
//         bindEvents();
//     })
//     .catch(error => {
//         console.error('things messed up in pins', error);
//     });
// }
// const loadPinsForBoard = (boardId) => {
//     return new Promise((resolve, reject) => {
//         $.get('../db/pins.json')
//         .done((data) => {
//             const pinsForBoards = data.pins.filter(pin => pin.board_id == boardId)
//             resolve(pinsForBoards)
//         })
//         .fail((error) => {
//             console.error(error);
//             reject(error);
//         })
//     })
// } 