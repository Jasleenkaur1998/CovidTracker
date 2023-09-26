const apiUrl = 'https://api.opencovid.ca/summary?geo=pt&fill=true&version=true&pt_names=short&hr_names=hruid&fmt=json'
const apiData = document.getElementById('api-data')
const chartData = document.getElementById('chart')

let covidData = []

const getData = async () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            covidData = data.data
            console.log(covidData)
            displayData(data.data)
            displayChart()
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

const displayChart = () => {
    var options = {
        series: [{
            name: "Cases",
            data: [ 634149, 404182, 157105, 91761, 55896, 147179, 11511, 3531, 1637787, 57415, 1360972, 155417, 5588]
        }],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Cases Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], 
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
        }
    };

    var chart = new ApexCharts(chartData, options);
    chart.render();

}


