// Use the D3 Lib to read in samples.json
const json = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Use the D3 Library to ready in samples.json
function buildCharts(sample) {
    d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json')
    let samples = data.samples;
    //filter the data for the object with the desired sample number
    let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];
    console.log(result)

    //Bar chart
    let bar_data = [{
        type: 'bar',
        x: result.sample_values.slice(0,10).reverse(),
        y: result.otu_ids.slice(0,10).map(otu_id => "OTU " + otu_id).reverse(),
        orientation: 'n',
        text: result.otu_labels.slice(0,10).reverse()
    }];

        let bar_layout = {
            title: "Top 10 OTUs"
        };

        Plotly.newPlot('bar', bar_data, bar_layout);

    //Bubble chart
    let bub_data = [{
        mode:'markers',
        x: result.otu_ids,
        y: result.sample_values.reverse(),
        text: result.otu_labels.reverse(),
        marker: {
            size: result.sample_values.reverse(),
            color: result.otu_ids
        }
    }];

    let bub_layout = {
        xaxis: {
            title: {
                text: 'OTU ID'
            }
        }
    }
    Plotly.newPlot('bubble', bub_data, bub_layout)

    buildCharts("940")

}

// Display the sample metadata. i.e an individuals demographic information
function buildMetadata(sample) {
    d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json')
        let metadata = data.metadata;
        // Filter the data for the object with the desired sample number
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];
        // use d3 to select the panel with id of '#sample-metadata
        let panel = d3.select('#sample-metadata');

        //Use '.html("") to clear any existing metadata
        panel.html("");

        for (key in result) {
            panel.append("h6").text('${key.toUpperCase()}: ${result[key]}');
            
        };
    };
