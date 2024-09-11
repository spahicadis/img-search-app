//DOM
const searchBox = document.getElementById('search-box');
const searchBtn = document.querySelector('.search-btn');
const rootRenderingDiv = document.querySelector('.rendering-photos');


//STATES
const ID = '2Hg3VfHcbx2p8Whb_c8P4MKGw_ocZxVPYKo6kcvIixM';
let querySearch;

//BINDING

searchBox.addEventListener('input', ((e) => {
querySearch = e.target.value;
console.log(querySearch)

}))

searchBtn.addEventListener('click', () => {

  fetch(`https://api.unsplash.com/search/photos?query=${querySearch}`, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID 2Hg3VfHcbx2p8Whb_c8P4MKGw_ocZxVPYKo6kcvIixM`
    }
    }).then((results) => results.json())
      .then((data) => {
        console.log(data.results)
        console.log(data.results.length)
        for(let i = 0; i<=data.results.length; i++) {
          const divs = document.createElement('div')
          const imgs = document.createElement('img');
          const ps = document.createElement('alt');
          imgs.setAttribute('src', `${data.results[i].urls.small_s3}`)
          imgs.classList.add('grid-items')
          ps.innerHTML = `${data.results[i].alt_description}`;
          divs.classList.add('divs');
          ps.classList.add('ps');
          divs.appendChild(imgs)
          divs.appendChild(ps)
          rootRenderingDiv.appendChild(divs)
        }
      });

})
















//.then((data) => console.log(data.results.length))








