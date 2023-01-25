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
  line: {color: 'rgb(199, 12, 67)'},
  meta: {columnNames: {
      x: 'Region',
      y: 'Religious_observation',
      marker: {color: 'Religious_observation'}
    }},
  mode: 'lines',
  name: 'Religious observance',
  type: 'bar',
  xsrc: 'chloepap:20:3e771b',
  x: ['Piemonte', "Valle d'Aosta", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino-Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:20:e76f22',
  y: ['-0.6144334654690848', '-0.6516766869116146', '-1.4934641367651795', '0.5285868400604928', '-0.019796432868270434', '-1.021106411909202', '-1.0818844766876843', '-0.5688345912057768', '-1.3934030216210858', '-0.7898913017948915', '0.7370372370267662', '-0.6475817098176891', '-0.21249860783837343', '0.8803257609603856', '1.6695076382019067', '1.328252825743974', '0.6332161786625199', '1.5683950617267233', '1.5046551360337772', '-0.3554058355276894'],
  marker: {
    meta: {columnNames: {color: 'Religious_observation'}},
    color: 'rgb(199, 12, 67)'
  },
  stackgroup: null,
  orientation: 'v'
};
trace2 = {
  line: {color: 'rgb(82, 168, 76)'},
  meta: {columnNames: {
      x: 'Region',
      y: 'Total_Pregnancies'
    }},
  mode: 'lines',
  name: 'Pregnancies',
  type: 'bar',
  xsrc: 'chloepap:20:3e771b',
  x: ['Piemonte', "Valle d'Aosta", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino-Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:20:0552cb',
  y: ['0.28355040922119995', '-0.6407966914658864', '0.4866487927282132', '-0.013041478128444188', '-1.092537761039944', '-0.6756643570872258', '0.5375584889437863', '0.02346685526135324', '-0.09995519862980835', '-0.2759225998398467', '-0.689604485423697', '-0.3440009175419356', '-0.2890913533971639', '-0.5042044963620816', '1.1223640033348656', '0.8330949790448028', '-1.8749697680575177', '0.7750416745642096', '3.125922381347354', '-0.6878584774722147'],
  marker: {color: 'rgb(255, 202, 4)'},
  stackgroup: null,
  orientation: 'v'
};
trace3 = {
  line: {color: 'rgb(221, 131, 1)'},
  meta: {columnNames: {
      x: 'Region',
      y: 'Female Early Leavers'
    }},
  mode: 'lines',
  name: 'Early leavers of education',
  type: 'bar',
  xsrc: 'chloepap:20:3e771b',
  x: ['Piemonte', "Valle d'Aosta", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino-Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:20:c68289',
  y: ['0.08329680843919056', '-0.08404284461094938', '-0.8400470563946554', '0.012401308034643954', '-0.6216656376016606', '-0.660024562360277', '-0.38121553883385034', '-0.5834469857097386', '-0.4425938812868828', '-0.3883529665799242', '-1.1197708177132808', '0.07344369274021727', '-1.481453336109004', '-0.7828339284060536', '1.4522813200233635', '1.1274619761192073', '-0.37692418613507495', '1.6626980254257981', '2.5858854069625816', '0.764903203996344'],
  marker: {color: 'rgb(80, 165, 73)'},
  stackgroup: null,
  orientation: 'v'
};
data = [trace1, trace2, trace3];
layout = {
  font: {size: 12},
  title: {
    font: {family: 'Arial'},
    text: ''
  },
  xaxis: {
    type: 'category',
    range: [-0.5, 19.5],
    title: {font: {size: 12}},
    tickson: 'boundaries',
    showgrid: true,
    autorange: true,
    tickangle: 45
  },
  yaxis: {
    type: 'linear',
    range: [-2.5, 3.5],
    title: {text: 'Standard deviation'},
    nticks: 0,
    autorange: false,
    separatethousands: false
  },
  bargap: 0.14,
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
  bargroupgap: 0.22,
  plot_bgcolor: 'rgb(255, 255, 255)',
  paper_bgcolor: 'rgb(255, 255, 255)'
};
Plotly.plot('bar-graph-19', {
  data: data,
  layout: layout
});
