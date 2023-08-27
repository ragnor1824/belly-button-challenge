// Use the D3 Library to ready in samples.json
url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'
d3.json(url).then(data => {
    console.log(data)

// Pulling just "samples" from data
let Samples = console.log(data.samples)

//Display Results
console.log(Samples)

//Extract the top 10 otu_ids from the top 10 sample_values
function TopTenOTU(Samples)
    return Samples.sample_value > 50

//Display results
console.log(TopTenOTU)

})
