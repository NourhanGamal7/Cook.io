

/**
 * 
 * @param {Array} queries 
 * @param {Function} successCallback 
 */
window.ACCESS_POINT = " https://api.edamam.com/api/recipes/v2";
const APP_ID = "4b9c7f2b";
const API_KEY = "3d811dc314b7c4ec23218a500095713e";
const TYPE = "public";

 const fetchData = async function (queries, successCallback) {
    const query = queries?.join("&")
     .replace(/,/g, "=")
     .replace(/ /g, "%20")
     .replace(/\+/g, "%2b");

     const url = `${ACCESS_POINT}?app_id={APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""} `;

     const response = await fetch(url);

     if(response.ok) {
        const data = await response.json();
        successCallback(data)
     }
}


