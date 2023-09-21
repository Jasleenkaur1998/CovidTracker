const apiUrl = 'https://api.opencovid.ca/summary?geo=pt&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json'

let covidData = []

const getData = async () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            covidData = data.data
            console.log(covidData)
        })
        .catch(err => console.error(err))
}

getData()
