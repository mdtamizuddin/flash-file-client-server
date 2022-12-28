const searchFeild = document.getElementById("search-feild")
const mobileSerach = document.getElementById("search-feild-mobile")
const searchBox = document.getElementById("searchbox")
searchFeild.addEventListener('click', () => {
    searchBox.style.display = 'grid'
})

document.getElementById("close").addEventListener('click', () => {
    if (searchBox.style.display === "grid") {
        searchBox.style.display = 'none'
    }
    else {
        searchBox.style.display = 'grid'
    }
})
mobileSerach.addEventListener('change', () => {
    searchResult()
})
searchFeild.addEventListener('change', () => {
    searchResult()
})

const searchResult = (value) => {
   window.location.pathname =  '/category/samsung'
}