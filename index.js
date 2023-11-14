const div = document.getElementById('div')
const btn = document.getElementById('btn')

let page = 1
const limit = 15

async function getProducts () {

    let skip = (page - 1) * limit

    const response = await fetch(`https://dummyjson.com/products?page=${page}&limit=${limit}&skip=${skip}`)
    const data = await response.json()
    console.log(data);
    
    data.products.forEach(item => {
        const p = document.createElement('p')
        p.textContent = `${item.title}`
        div.appendChild(p)
    })

    page++
}

btn.addEventListener('click', getProducts)
getProducts()