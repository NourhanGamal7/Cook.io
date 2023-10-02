
// /**
// *@param {NodeList} $elements
// *@param {String} eventType
// *@param {Function} callblack
// */
window.addEventOnElements = ($elements, eventType, callblack) => {
    for(const $element of $elements) {
        $element.addEventListener(eventType, callblack);
    }
}


// export const cardQueries = [
//   ["field", "uri"],
//   ["field", "label"],
//   ["field", "image"],
//   ["field", "totalTime"]
// ];

// export const $skeletonCard = `
// <div class="card skeleton-card">

//     <div class="skeleton card-banner">

//       <div class="card-body">
//         <div class="skeleton card-title">

//           <div class="skeleton card-text">
            
//           </div>
//         </div>
//       </div>

//     </div>

// </div>


// `;



// const cardQueries = [
//     ["field", "uri"],
//     ["field", "label"],
//     ["field", "image"],
//     ["field", "totalTime"],
//   ];
  
//   const $skeletonCard = `
//   <div class="card skeleton-card">
//       <div class="skeleton card-banner">
//           <div class="card-body">
//               <div class="skeleton card-title">
//                   <div class="skeleton card-text"></div>
//               </div>
//           </div>
//       </div>
//   </div>
//   `;
  
//   export { cardQueries, $skeletonCard };




// window.ACCESS_POINT = " https://api.edamam.com/api/recipes/v2 ";
// const APP_ID = "598e65d4";
// const API_KEY = "ac52f9f4ef8be7a256cdb703d5598a99";
// const TYPE = "public";

// /**
//  * @param {Array} queries
//  *  @param {Function} successCallback
//  * 
//  */


//  const fetchData = async function(queries, successCallback) {
//     const query = queries?.join("&")
//     .replace(/,/g, "=")
//     .replace(/ /g, "%20")
//     .replace (/\+/g, "%2B");

//     const url = `${ACCESS_POINT}?app_id=${APP_ID}&app-key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

//     const response = await fetch(url);

//     if(response.ok) {
//         const data = await response.json();
//         successCallback(data);
//     }
// }
// import {fetchData} from './api'

  const cardQueries = [
    ["field", "uri"],
    ["field", "label"],
    ["field", "image"],
    ["field", "totalTime"]
];

 const $skeletonCard = `

    <div class= "card skeleton-card ">

        <div class="skeleton card-banner"></div>

        <div class="card-body">
            <div class="skeleton card-title"></div>

            <div class="skeleton card-text"></div>
        </div>
    </div>

`;

const ROOT = "https://api.edamam.com/api/recipes/v2";
window.saveRecipe = function(element, recipeId) {
    const isSaved = window.location.getItem(`cookio-recipe${recipeId}`);
    ACCESS_POINT = `${ROOT}/${recipeId}`;

    if(!isSaved) {
        fetchData(cardQueries, function(data) {
            window.localStorage.setItem(`cookio-recipe${recipeId}`, JSON.stringify(data));
            element.classList.toggel("saved");
            element.classList.toggel("removed");
        });
        ACCESS_POINT = ROOT;
    }else {
        window.localStorage.removeItem(`cookio-recipe${recipeId}`);
            element.classList.toggel("saved");
            element.classList.toggel("removed");
    }
}