const apiUrl = 'https://api.opencovid.ca/summary?geo=pt&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json'
const apiData = document.getElementById('api-data')

let covidData = []

const getData = async () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            covidData = data.data
            console.log(covidData)
            displayData(data.data)
        })
        .catch(err => console.error(err))
}

getData()

const displayData = () => {
    covidData.map((data) => {
        const p = document.createElement('p')
        p.textContent = `${data.region}: ${data.cases}`
        p.classList.add('region-background')
        apiData.appendChild(p)
    })
}