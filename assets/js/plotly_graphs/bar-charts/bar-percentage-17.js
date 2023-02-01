// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plotly.com/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  meta: {columnNames: {
      x: 'Region',
      y: 'Religious_observation',
      marker: {color: 'Religious_observation'}
    }},
  name: 'Regional religious observance',
  type: 'bar',
  xsrc: 'chloepap:23:be7a81',
  x: ['Piemonte', "Valle d'Aosta", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:23:7127ca',
  y: ['23.1498989289666', '17.430851021685562', '16.347278470050423', '25.42314669866572', '26.675211475831684', '20.063493111946865', '18.75877208766689', '24.98273664827114', '18.372607250768308', '20.19448314102937', '26.468701742937803', '23.94968591796566', '23.73552802744745', '29.35765451912162', '30.22789437728195', '32.942044496254155', '29.13131829873101', '32.32416459963508', '30.18905796380065', '23.420639591916814'],
  marker: {
    line: {
      color: 'rgb(111, 102, 102)',
      width: 1
    },
    meta: {columnNames: {color: 'Religious_observation'}},
    color: 'rgb(199, 12, 67)',
    opacity: 0.75
  },
  opacity: 1,
  hoverlabel: {align: 'auto'},
  orientation: 'v',
  autocolorscale: false
};
trace2 = {
  meta: {columnNames: {
      x: 'Region',
      y: 'Female Early Leavers'
    }},
  name: 'Female early leavers of education',
  type: 'bar',
  xsrc: 'chloepap:23:be7a81',
  x: ['Piemonte', "Valle d'Aosta", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:23:131eeb',
  y: ['3.9109142233025', '6.026635924983956', '7.050464437857961', '4.190327609136792', '5.473131628851515', '3.7586753140597193', '4.474809870622953', '4.620323035206009', '4.449543540385253', '4.40750869674846', '2.572187815093842', '4.347431149415216', '3.946083523026142', '5.01623380436059', '9.07288209090961', '6.989888341965415', '5.844558660527774', '5.303005159913671', '8.940193250438874', '7.93534652736904'],
  marker: {
    line: {
      color: 'rgb(104, 128, 101)',
      width: 1
    },
    color: 'rgb(93, 167, 88)',
    opacity: 0.97
  },
  orientation: 'v'

};
trace3 = {
  meta: {columnNames: {
      x: 'Region',
      y: 'Total_Pregnancies'
    }},
  name: 'Total pregnancies',
  type: 'bar',
  xsrc: 'chloepap:23:be7a81',
  x: ['Piemonte', "Valle d'Aosta", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:23:f71147',
  y: ['3.622520400150227', '3.203252032520325', '3.709522562625469', '3.5408646382323274', '2.9786302436176557', '3.1888679518770835', '3.821205901715525', '3.503630620950148', '3.4608687522642017', '3.322999418717303', '3.1142841834547794', '3.2937919433687863', '3.232228064310245', '3.0502988047808763', '3.8910781927145295', '3.753125094129341', '2.462768357939527', '3.650524339837193', '4.771080727748121', '3.029788789389865'],
  marker: {
    line: {
      color: 'rgb(143, 143, 111)',
      width: 1
    },
    color: 'rgb(241, 204, 120)'
  },
  orientation: 'v',
  textposition: 'middle center',
  texttemplate: ''
};
data = [trace1, trace2, trace3];
layout = {
  xaxis: {
    side: 'bottom',
    type: 'category',
    dtick: 0,
    range: [-0.5, 20],
    tick0: 2,
    domain: [0, 1],
    mirror: false,
    tickson: 'boundaries',
    showgrid: true,
    showline: true,
    tickmode: 'linear',
    zeroline: false,
    autorange: false,
    linewidth: 3,
    tickangle: 45
  },
  yaxis: {
    side: 'left',
    type: 'linear',
    range: [0, 34.67583631184648],
    domain: [0, 1],
    nticks: 8,
    tickfont: {color: 'rgb(88, 99, 94)'},
    autorange: true,
    automargin: true,
    showspikes: false,
    tickformat: '',
    ticksuffix: '%',
    spikethickness: 3,
    separatethousands: false
  },
  bargap: 0.12,
  legend: {
    x: 0.3100000000000002,
    y: -0.52,
    valign: 'top',
    xanchor: 'center',
    yanchor: 'bottom',
    itemsizing: 'trace',
    traceorder: 'normal',
    orientation: 'h'
  },
  margin: {
    b: 100,
    t: 100
  },
  barmode: 'group',
  barnorm: '',
  modebar: {orientation: 'h'},
  autosize: false,
  width: 1000,
  height: 500,
  template: {
    data: {
      bar: [
        {
          type: 'bar',

          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0

            }}
        }
      ],
      table: [
        {
          type: 'table',
          cells: {
            fill: {color: '#EBF0F8'},
            line: {color: 'white'}
          },
          header: {
            fill: {color: '#C8D4E3'},
            line: {color: 'white'}
          }
        }
      ],
      carpet: [
        {
          type: 'carpet',
          aaxis: {
            gridcolor: '#C8D4E3',
            linecolor: '#C8D4E3',
            endlinecolor: '#2a3f5f',
            minorgridcolor: '#C8D4E3',
            startlinecolor: '#2a3f5f'
          },
          baxis: {
            gridcolor: '#C8D4E3',
            linecolor: '#C8D4E3',
            endlinecolor: '#2a3f5f',
            minorgridcolor: '#C8D4E3',
            startlinecolor: '#2a3f5f'
          }
        }
      ],
      mesh3d: [
        {
          type: 'mesh3d',
          colorbar: {
            ticks: '',
            outlinewidth: 0
          }
        }
      ],
      contour: [
        {
          type: 'contour',
          colorbar: {
            ticks: '',
            outlinewidth: 0
          },
          autocolorscale: true
        }
      ],
      heatmap: [
        {
          type: 'heatmap',
          colorbar: {
            ticks: '',
            outlinewidth: 0
          },
          autocolorscale: true
        }
      ],
      scatter: [
        {
          type: 'scatter',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      surface: [
        {
          type: 'surface',
          colorbar: {
            ticks: '',
            outlinewidth: 0
          }
        }
      ],
      heatmapgl: [
        {
          type: 'heatmapgl',
          colorbar: {
            ticks: '',
            outlinewidth: 0
          }
        }
      ],
      histogram: [
        {
          type: 'histogram',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      parcoords: [
        {
          line: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }},
          type: 'parcoords'
        }
      ],
      scatter3d: [
        {
          type: 'scatter3d',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      scattergl: [
        {
          type: 'scattergl',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      choropleth: [
        {
          type: 'choropleth',
          colorbar: {
            ticks: '',
            outlinewidth: 0
          }
        }
      ],
      scattergeo: [
        {
          type: 'scattergeo',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      histogram2d: [
        {
          type: 'histogram2d',
          colorbar: {
            ticks: '',
            outlinewidth: 0
          },
          autocolorscale: true
        }
      ],
      scatterpolar: [
        {
          type: 'scatterpolar',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      contourcarpet: [
        {
          type: 'contourcarpet',
          colorbar: {
            ticks: '',
            outlinewidth: 0
          }
        }
      ],
      scattercarpet: [
        {
          type: 'scattercarpet',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      scattermapbox: [
        {
          type: 'scattermapbox',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      scatterpolargl: [
        {
          type: 'scatterpolargl',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      scatterternary: [
        {
          type: 'scatterternary',
          marker: {colorbar: {
              ticks: '',
              outlinewidth: 0
            }}
        }
      ],
      histogram2dcontour: [
        {
          type: 'histogram2dcontour',
          colorbar: {
            ticks: '',
            outlinewidth: 0
          },
          autocolorscale: true
        }
      ]
    },
    layout: {
      geo: {
        bgcolor: 'white',
        showland: true,
        lakecolor: 'white',
        landcolor: 'white',
        showlakes: true,
        subunitcolor: '#C8D4E3'
      },
      font: {color: '#2a3f5f'},
      polar: {
        bgcolor: 'white',
        radialaxis: {
          ticks: '',
          gridcolor: '#EBF0F8',
          linecolor: '#EBF0F8'
        },
        angularaxis: {
          ticks: '',
          gridcolor: '#EBF0F8',
          linecolor: '#EBF0F8'
        }
      },
      scene: {
        xaxis: {
          ticks: '',
          gridcolor: '#DFE8F3',
          gridwidth: 2,
          linecolor: '#EBF0F8',
          zerolinecolor: '#EBF0F8',
          showbackground: true,
          backgroundcolor: 'white'
        },
        yaxis: {
          ticks: '',
          gridcolor: '#DFE8F3',
          gridwidth: 2,
          linecolor: '#EBF0F8',
          zerolinecolor: '#EBF0F8',
          showbackground: true,
          backgroundcolor: 'white'
        },
        zaxis: {
          ticks: '',
          gridcolor: '#DFE8F3',
          gridwidth: 2,
          linecolor: '#EBF0F8',
          zerolinecolor: '#EBF0F8',
          showbackground: true,
          backgroundcolor: 'white'
        }
      },
      title: {x: 0.05},
      xaxis: {
        ticks: '',
        gridcolor: '#EBF0F8',
        linecolor: '#EBF0F8',
        automargin: true,
        zerolinecolor: '#EBF0F8',
        zerolinewidth: 2
      },
      yaxis: {
        ticks: '',
        gridcolor: '#EBF0F8',
        linecolor: '#EBF0F8',
        automargin: true,
        zerolinecolor: '#EBF0F8',
        zerolinewidth: 2
      },
      ternary: {
        aaxis: {
          ticks: '',
          gridcolor: '#DFE8F3',
          linecolor: '#A2B1C6'
        },
        baxis: {
          ticks: '',
          gridcolor: '#DFE8F3',
          linecolor: '#A2B1C6'
        },
        caxis: {
          ticks: '',
          gridcolor: '#DFE8F3',
          linecolor: '#A2B1C6'
        },
        bgcolor: 'white'
      },
      colorway: ['#636efa', '#EF553B', '#00cc96', '#ab63fa', '#19d3f3', '#e763fa', '#fecb52', '#ffa15a', '#ff6692', '#b6e880'],
      hovermode: 'closest',
      colorscale: {
        diverging: [['0', '#8e0152'], ['0.1', '#c51b7d'], ['0.2', '#de77ae'], ['0.3', '#f1b6da'], ['0.4', '#fde0ef'], ['0.5', '#f7f7f7'], ['0.6', '#e6f5d0'], ['0.7', '#b8e186'], ['0.8', '#7fbc41'], ['0.9', '#4d9221'], ['1', '#276419']],
        sequential: [['0', '#0508b8'], ['0.0893854748603352', '#1910d8'], ['0.1787709497206704', '#3c19f0'], ['0.2681564245810056', '#6b1cfb'], ['0.3575418994413408', '#981cfd'], ['0.44692737430167595', '#bf1cfd'], ['0.5363128491620112', '#dd2bfd'], ['0.6256983240223464', '#f246fe'], ['0.7150837988826816', '#fc67fd'], ['0.8044692737430168', '#fe88fc'], ['0.8938547486033519', '#fea5fd'], ['0.9832402234636871', '#febefe'], ['1', '#fec3fe']],
        sequentialminus: [['0', '#0508b8'], ['0.0893854748603352', '#1910d8'], ['0.1787709497206704', '#3c19f0'], ['0.2681564245810056', '#6b1cfb'], ['0.3575418994413408', '#981cfd'], ['0.44692737430167595', '#bf1cfd'], ['0.5363128491620112', '#dd2bfd'], ['0.6256983240223464', '#f246fe'], ['0.7150837988826816', '#fc67fd'], ['0.8044692737430168', '#fe88fc'], ['0.8938547486033519', '#fea5fd'], ['0.9832402234636871', '#febefe'], ['1', '#fec3fe']]
      },
      plot_bgcolor: 'white',
      paper_bgcolor: 'white',
      shapedefaults: {
        line: {width: 0},
        opacity: 0.4,
        fillcolor: '#506784'
      },
      annotationdefaults: {
        arrowhead: 0,
        arrowcolor: '#506784',
        arrowwidth: 1
      }
    },
    themeRef: 'PLOTLY_WHITE'
  },
  showlegend: true,
  bargroupgap: 0.1
};
Plotly.plot('bar-graph-17', {
  data: data,
  layout: layout
});
