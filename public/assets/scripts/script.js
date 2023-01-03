const searchFeild = document.getElementById("search-feild")
const mobileSerach = document.getElementById("search-feild-mobile")
const searchBox = document.getElementById("searchbox")

mobileSerach.addEventListener('change', (e) => {
    searchResult(e.target.value)
})
searchFeild.addEventListener('change', (e) => {
    searchResult(e.target.value)
})

const searchResult = (value) => {
    window.location.pathname = `/search/${value}`
}