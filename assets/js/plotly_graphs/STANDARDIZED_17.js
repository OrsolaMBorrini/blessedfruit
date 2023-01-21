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
 $(document).ready(function() {
trace1 = {
  line: {color: 'rgb(199, 12, 67)'},
  meta: {columnNames: {
      x: 'Region',
      y: 'Religious_observation'
    }},
  mode: 'lines',
  name: 'Religious observation',
  type: 'scatter',
  xsrc: 'chloepap:5:78ddb2',
  x: ['Piemonte', "Valle D'Aosta / Vallée D'Aoste", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige / Südtirol', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:5:ef8176',
  y: ['-0.3073859694415406', '-1.4736340326741768', '-1.6945999015048376', '0.1561825915569169', '0.41150797876910866', '-0.9367765366837892', '-1.2028397682381542', '0.06637264825377372', '-1.2815878396694413', '-0.9100645961305782', '0.36939579857219906', '-0.14429063573550333', '-0.18796245473266046', '0.9585210576394436', '1.135983384512981', '1.6894622801074843', '0.9123657914221619', '1.5634620709074596', '1.1280637285248218', '-0.2521755954556857'],
  connectgaps: false,
  legendgroup: 1
};
trace2 = {
  line: {color: 'rgb(82, 168, 76)'},
  meta: {columnNames: {
      x: 'Region',
      y: 'Total_Pregnancies'
    }},
  mode: 'lines',
  name: 'Pregnancies',
  type: 'scatter',
  xsrc: 'chloepap:5:78ddb2',
  x: ['Piemonte', "Valle D'Aosta / Vallée D'Aoste", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige / Südtirol', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:5:ee1153',
  y: ['0.42132513798945004', '-0.4965484386733721', '0.6117926099334393', '0.2425621498098359', '-0.9882964947978676', '-0.528038454535177', '0.8562927769356048', '0.16104843865267207', '0.06743300666233791', '-0.23439424305404735', '-0.6913192445212267', '-0.2983360329271599', '-0.43311333125790774', '-0.8313977548785435', '1.0092590739434784', '0.7072484435544015', '-2.1176351967563662', '0.4826321152518393', '2.935784270370022', '-0.8762988317014316'],
  stackgroup: null
};
trace3 = {
  line: {color: 'rgb(221, 131, 1)'},
  meta: {columnNames: {
      x: 'Region',
      y: 'Female Early Leavers'
    }},
  mode: 'lines',
  name: 'Early leavers of education',
  type: 'scatter',
  xsrc: 'chloepap:5:78ddb2',
  x: ['Piemonte', "Valle D'Aosta / Vallée D'Aoste", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige / Südtirol', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:5:ee524d',
  y: ['-0.8856122229385601', '0.38272361241623976', '0.8004608144782427', '-0.6912112694772775', '0.050156336509140226', '-0.9755515451870505', '-0.5590990849500106', '-0.4056688043905595', '-0.6036467032159021', '-0.6385612399850618', '-1.6539889244857855', '-0.6632436072759972', '-0.8466425209167705', '-0.1598323235935276', '2.1214215009105715', '0.8935441876964165', '0.3102595039452236', '-0.02936165631102344', '2.020180003279286', '1.5336739434924138'],
  stackgroup: null
};
data = [trace1, trace2, trace3];
layout = {
  font: {size: 12},
  title: {
    x: 0.04,
    font: {
      size: 16,
      family: 'Arial'
    },
    text: ''
  },
  xaxis: {
    type: 'category',
    range: [0, 19],
    title: {text: ''},
    tickfont: {size: 13},
    autorange: true,
    tickangle: 45
  },
  yaxis: {
    type: 'linear',
    range: [-2.398380722707832, 3.216529796321488],
    title: {text: 'Standardized values'},
    autorange: true
  },
  bargap: 0.29000000000000004,
  legend: {
    x: 1.08,
    y: 0.8000000000000003,
    title: {
      font: {
        color: 'rgb(97, 127, 171)',
        family: 'Arial'
      },
      text: '<br>'
    },
    valign: 'middle',
    bgcolor: 'rgb(255, 255, 255)',
    xanchor: 'left',
    yanchor: 'auto',
    borderwidth: 0,
    tracegroupgap: 6
  },
  margin: {
    b: 100,
    t: 100
  },
  barmode: 'group',
  barnorm: '',
  autosize: false,
  width: 900,
  height: 500,
  colorway: ['#4c78a8', '#f58518', '#e45756', '#72b7b2', '#54a24b', '#eeca3b', '#b279a2', '#ff9da6', '#9d755d', '#bab0ac'],
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
  colorscale: {diverging: [['0', '#67001f'], ['0.1', '#b2182b'], ['0.2', '#d6604d'], ['0.3', '#f4a582'], ['0.4', '#fddbc7'], ['0.5', '#f7f7f7'], ['0.6', '#d1e5f0'], ['0.7', '#92c5de'], ['0.8', '#4393c3'], ['0.9', '#2166ac'], ['1', '#053061']]},
  showlegend: true,
  bargroupgap: 0.25,
  plot_bgcolor: 'rgb(255, 255, 255)',
  paper_bgcolor: 'rgb(255, 255, 255)'
};
Plotly.plot('line-graph-17', {
  data: data,
  layout: layout
});
});
