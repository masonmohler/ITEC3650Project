$(".fade").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  centerPadding: "1rem",
});

async function getData() {
  "use strict";

  // If all of the form elements are valid, the get the form values

  let boxley = "07055646";
  let ponca = "07055660";
  let pruitt = "07055680";
  let carver = "07055780";

  /* URL for AJAX Call */
  let myURL =
    "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=" +
    boxley +
    "," +
    ponca +
    "," +
    pruitt +
    "," +
    carver +
    "&indent=on&period=P7D&siteStatus=all&parameterCd=00065";
  let msgObject = await fetch(myURL);
  if (msgObject.status >= 200 && msgObject.status <= 299) {
    let msgJSONText = await msgObject.text();
    // Parse the JSON string into an object
    let msg = JSON.parse(msgJSONText);

    // gathering data for chart 0
    let dates = [];
    let values = [];
    /* fLen contains the length of the array (number of values) */
    let fLen = msg.value.timeSeries[0].values[0].value.length;
    for (let i = 0; i < fLen; i++) {
      values[i] = msg.value.timeSeries[0].values[0].value[i].value;
      dates[i] = new Date(
        msg.value.timeSeries[0].values[0].value[i].dateTime
      ).toLocaleString();
    }
    let sitename = msg.value.timeSeries[0].sourceInfo.siteName;
    let boxleyLevel = values[fLen - 1];

    document.getElementById("boxley-level").innerHTML =
      "The current water level at Boxley is " + boxleyLevel + " feet deep.";

    // code for chart 0
    let ctx0 = document.getElementById("chartjs-0");
    var myChart = new Chart(ctx0, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Depth of " + sitename + " in Feet",
            data: values,
            fill: true,
            backgroundColor: "rgb(242, 113, 39, 0.5)",
            borderColor: "rgb(242, 113, 39)",
            lineTension: 0.1,
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: "#FFFFFF",
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
          ],
        },
        intersect: true,
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          // Overrides the global setting
          mode: "index",
        },
        title: {
          display: true,
          text: "7 Day History",
          fontColor: "#FFFFFF",
        },
      },
    });

    //gathering data for chart 1
    let dates1 = [];
    let values1 = [];
    /* fLen contains the length of the array (number of values) */
    let fLen1 = msg.value.timeSeries[1].values[0].value.length;
    for (let i = 0; i < fLen1; i++) {
      values1[i] = msg.value.timeSeries[1].values[0].value[i].value;
      dates1[i] = new Date(
        msg.value.timeSeries[1].values[0].value[i].dateTime
      ).toLocaleString();
    }
    let sitename1 = msg.value.timeSeries[1].sourceInfo.siteName;
    let poncaLevel = values1[fLen1 - 1];

    document.getElementById("ponca-level").innerHTML =
      "The current water level at Ponca is " + poncaLevel + " feet deep.";

    // code for chart 1
    let ctx1 = document.getElementById("chartjs-1");
    var myChart1 = new Chart(ctx1, {
      type: "line",
      data: {
        labels: dates1,
        datasets: [
          {
            label: sitename1,
            data: values1,
            fill: true,
            backgroundColor: "rgb(242, 113, 39, 0.5)",
            borderColor: "rgb(242, 113, 39)",
            lineTension: 0.1,
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: "#FFFFFF",
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
          ],
        },
        intersect: true,
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          // Overrides the global setting
          mode: "index",
        },
        title: {
          display: true,
          text: "7 Day History",
          fontColor: "#FFFFFF",
        },
      },
    });

    // gathering data for chart 2
    let dates2 = [];
    let values2 = [];
    /* fLen contains the length of the array (number of values) */
    let fLen2 = msg.value.timeSeries[2].values[0].value.length;
    for (let i = 0; i < fLen2; i++) {
      values2[i] = msg.value.timeSeries[2].values[0].value[i].value;
      dates2[i] = new Date(
        msg.value.timeSeries[2].values[0].value[i].dateTime
      ).toLocaleString();
    }
    let sitename2 = msg.value.timeSeries[2].sourceInfo.siteName;
    let pruittLevel = values2[fLen2 - 1];

    document.getElementById("pruitt-level").innerHTML =
      "The current water level at Pruitt is " + pruittLevel + " feet deep.";

    // code for chart 2
    let ctx2 = document.getElementById("chartjs-2");
    var myChart2 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: dates2,
        datasets: [
          {
            label: sitename2,
            data: values2,
            fill: true,
            backgroundColor: "rgb(242, 113, 39, 0.5)",
            borderColor: "rgb(242, 113, 39)",
            lineTension: 0.1,
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: "#FFFFFF",
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
          ],
        },
        intersect: true,
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          // Overrides the global setting
          mode: "index",
        },
        title: {
          display: true,
          text: "7 Day History",
          fontColor: "#FFFFFF",
        },
      },
    });

    // gathering data for chart 3
    let dates3 = [];
    let values3 = [];
    /* fLen contains the length of the array (number of values) */
    let fLen3 = msg.value.timeSeries[3].values[0].value.length;
    for (let i = 0; i < fLen3; i++) {
      values3[i] = msg.value.timeSeries[3].values[0].value[i].value;
      dates3[i] = new Date(
        msg.value.timeSeries[3].values[0].value[i].dateTime
      ).toLocaleString();
    }
    let sitename3 = msg.value.timeSeries[3].sourceInfo.siteName;
    let carverLevel = values3[fLen3 - 1];

    document.getElementById("carver-level").innerHTML =
      "The current water level at Carver is " + carverLevel + " feet deep.";

    // code for chart 2
    let ctx3 = document.getElementById("chartjs-3");
    var myChart3 = new Chart(ctx3, {
      type: "line",
      data: {
        labels: dates3,
        datasets: [
          {
            label: sitename3,
            data: values3,
            fill: true,
            backgroundColor: "rgb(242, 113, 39, 0.5)",
            borderColor: "rgb(242, 113, 39)",
            lineTension: 0.1,
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: "#FFFFFF",
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#FFFFFF",
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
              },
            },
          ],
        },
        intersect: true,
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          // Overrides the global setting
          mode: "index",
        },
        title: {
          display: true,
          text: "7 Day History",
          fontColor: "#FFFFFF",
        },
      },
    });
  }
}
