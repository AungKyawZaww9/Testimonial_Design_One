// UI 
const testiimgel = document.getElementById('testiimg');
const testitext = document.querySelector('.testi');
const namel = document.querySelector('.name');
const roleel = document.querySelector('.role');


let idx = 0;

let testimonialarrs = [

    {
        name: "Mr.Jose",
        role: "Designer",
        text: "Jose Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo: `./img/boytwo.jpg`
    },



    {
        name: "Ms.Sandi",
        role: "Marketing",
        text: "Sandi Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo: `./img/girlone.jpg`
    },



    {
        name: "Ms.Phoo Phoo",
        role: "Sale",
        text: "Phoo Phoo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo: `./img/girltwo.jpg`
    },



    {
        name: "Ms.Anna",
        role: "Accountant",
        text: "Anna Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        photo: `./img/girlthree.jpg`
    },




];

// console.log(testimonialarrs[0]);


function changingphoto(){
    
    let {name,role,text,photo} = testimonialarrs[idx];

    namel.innerText = name;
    roleel.innerText = role;
    testitext.textContent = text;
    testiimgel.src = photo;


    idx++;

    if(idx > testimonialarrs.length -1){
        idx = 0;
    }
    

}


// changingphoto();

setInterval(changingphoto,10000);