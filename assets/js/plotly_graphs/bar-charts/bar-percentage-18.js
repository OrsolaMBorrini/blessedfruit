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
        xsrc: 'chloepap:38:ab6597',
        x: ['Piemonte', "Valle d'Aosta", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
        ysrc: 'chloepap:38:ed5929',
        y: ['9.206284299762162', '7.958425186824031', '9.1977716604261', '11.842171375748652', '11.82289608749148', '9.79003878011986', '9.373346910484312', '11.079723733140664', '8.888665546532705', '10.1288249189694', '13.582657872909737', '11.518989183582548', '12.532243617589735', '13.166990355179564', '14.311121160930693', '14.828219044111876', '13.516247245281397', '15.664053898989604', '14.352513207571771', '2.802104794125686'],
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
        ysrc: 'chloepap:38:82b523',
        y: ['5.912749721905527', '6.946711976634063', '6.570800793226264', '5.052072769568727', '5.411536116644386', '3.544309550286101', '4.672598769400642', '4.057636909073642', '5.065852475709493', '3.6753102739475176', '3.494251806033068', '4.3957599033859935', '3.530963175962696', '4.056196714835907', '9.579951103524197', '6.674683714968175', '4.065830389894502', '7.488983436897397', '10.630949620946968', '8.453123313282207'],
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
        xsrc: 'chloepap:38:ab6597',
        x: ['Piemonte', "Valle d'Aosta", 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'],
        ysrc: 'chloepap:38:ba7c62',
        y: ['1.7484154071184788', '1.5382124352331603', '1.7707451003300525', '1.6601711906851653', '1.57604397023454', '1.699929433477482', '1.9306186908082008', '1.7991822639235042', '1.759088918090232', '1.6472655392049198', '0.4016092503762888', '1.6714962933787223', '1.631006935843448', '1.3476312419974392', '1.783249316057715', '1.938639005241343', '1.3364910072538174', '1.803666744024136', '2.4467028082346998', '1.5166828463901485'],
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
          range: [0, 16.48847778841011],
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
        bargroupgap: 0.02
      };
Plotly.plot('bar-graph-18', {
  data: data,
  layout: layout
});
