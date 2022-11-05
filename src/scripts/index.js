import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

function list(){
    let result = data.restaurants;
    let container = document.querySelector(".restaurant-container");
    let html = ``;
    for(let i = 0; i < result.length; i++){
        html += 
            `
            <div class="restaurant-card">
                <div class="restaurant-card-img">
                <span class="rating">&#9734; ${result[i].rating}</span>
                <img src="${result[i].pictureId}" alt="" style="
                    width: 100%;
                ">
                </div>
                <div class="restaurant-card-content">
                <h4>${result[i].name}</h4>
                ${result[i].description.substring(0, 200)} ...
                </div>
            </div>
            `
        ;
    }
    container.innerHTML = html
}
list();


