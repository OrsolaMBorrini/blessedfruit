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
      y: 'Religious_observation'
    }},
  mode: 'lines',
  name: '%{meta.columnNames.y}',
  type: 'scatter',
  xsrc: 'chloepap:7:02c353',
  x: ['Piemonte', "Valle d'Aosta / Vallée d'Aoste", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige / Südtirol', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:7:86123f',
  y: ['-0.7085262808619783', '-1.1352599308723592', '-0.7114373704372638', '0.1928749280473116', '0.18628330722433428', '-0.5088982318858242', '-0.6513954422003376', '-0.06786128976644466', '-0.8171431980059514', '-0.39304264842673536', '0.7880736552325949', '0.08235546711499733', '0.4288607404507122', '0.645926745222774', '1.0371881542755317', '1.2140214720873383', '0.7653630389190312', '1.4998541071418328', '1.0513431009048497', '-2.898580324164403'],
  stackgroup: null
};
trace2 = {
  line: {color: 'rgb(82, 168, 76)'},
  meta: {columnNames: {
      x: 'Region',
      y: 'Total_Pregnancies'
    }},
  mode: 'lines',
  name: '%{meta.columnNames.y}',
  type: 'scatter',
  xsrc: 'chloepap:7:02c353',
  x: ['Piemonte', "Valle d'Aosta / Vallée d'Aoste", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige / Südtirol', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:7:d42352',
  y: ['0.26771815196555204', '-0.3060907302159432', '0.3286734095733241', '0.026830429320950616', '-0.20281878017807636', '0.13536187704285182', '0.765093910291353', '0.40630074713006076', '0.2968545402131696', '-0.008399222207210484', '-3.4087728528191827', '0.057745522760856816', '-0.05278171088947457', '-0.8263363788600891', '0.36280722787709574', '0.7869876428982173', '-0.8567468225761969', '0.41854241284310606', '2.1738925008920895', '-0.36486187506243833'],
  stackgroup: null
};
trace3 = {
  line: {color: 'rgb(221, 131, 1)'},
  meta: {columnNames: {
      x: 'Region',
      y: 'Female Early Leavers'
    }},
  mode: 'lines',
  name: '%{meta.columnNames.y}',
  type: 'scatter',
  xsrc: 'chloepap:7:02c353',
  x: ['Piemonte', "Valle d'Aosta / Vallée d'Aoste", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige / Südtirol', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
  ysrc: 'chloepap:7:a1cd92',
  y: ['0.11428887455400004', '0.6417759878801519', '0.39059164820103187', '-0.2876060689325918', '-0.111777031157208', '-1.0411590879699517', '-0.4885535406758879', '-0.7648563143229198', '-0.31272450290050324', '-0.9909222200341278', '-1.066277521937864', '-0.6392641444833598', '-1.0411590879699517', '-0.7648563143229198', '1.9228161202436636', '0.49106538407267997', '-0.7648563143229198', '0.9180787615271837', '2.4251847996019036', '1.3702105729495997'],
  stackgroup: null
};
data = [trace1, trace2, trace3];
layout = {
  font: {size: 10},
  title: {
    font: {
      size: 14,
      family: 'Arial'
    },
    text: 'Correlation of religious observation, pregnancies, and early leavers of education in the female population (2018)'
  },
  xaxis: {
    type: 'category',
    range: [0, 19],
    autorange: true,
    tickangle: 45
  },
  yaxis: {
    type: 'linear',
    range: [-3.732881611287021, 2.7492935580697417],
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
    b: 84,
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
Plotly.plot('line-graph-18', {
  data: data,
  layout: layout
});
