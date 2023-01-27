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
        xsrc: 'chloepap:40:ce12b1', 
        x: ['Piemonte', 'Valle d'Aosta', 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'], 
        ysrc: 'chloepap:40:dfa212', 
        y: ['10.089958357466116', '9.997280739638818', '7.902541011236692', '12.93429874859413', '11.569678465415883', '9.077976083885472', '8.926733359930592', '10.203428537505484', '8.151537350154568', '9.65334160762614', '13.453015590954283', '10.007470854978544', '11.09015016913445', '13.809580854264', '15.773414636153191', '14.924221632279826', '13.19466284925188', '15.521801796094207', '15.363188651341764', '10.734533739632331'], 
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
        xsrc: 'chloepap:40:ce12b1', 
        x: ['Piemonte', 'Valle d'Aosta', 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'], 
        ysrc: 'chloepap:40:f7ffaf', 
        y: ['5.294662203271142', '4.958300142361278', '3.4386893980034445', '5.1521582827080685', '3.877648262508933', '3.800544678565033', '4.360966407929538', '3.9544698901461777', '4.2375925070852025', '4.34661977900743', '2.8764289945209534', '5.274856889691957', '2.14942690586356', '3.5536909848394096', '8.046397630451478', '7.39349258405309', '4.369592266843077', '8.469346975624436', '10.325005240713889', '6.664729176400655'], 
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
        xsrc: 'chloepap:40:ce12b1', 
        x: ['Piemonte', 'Valle d'Aosta', 'Liguria', 'Lombardia', 'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Trentino Alto Adige', 'Toscana', 'Umbria', 'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata', 'Calabria', 'Sicilia', 'Sardegna'], 
        ysrc: 'chloepap:40:fa87c5', 
        y: ['1.8063791182865787', '1.5836012861736335', '1.855328065656786', '1.7348972067439057', '1.4747267128869477', '1.5751977947230873', '1.8675978631690016', '1.743696117197122', '1.7139500428270482', '1.6715399610136452', '1.5718380702560912', '1.6551323366263406', '1.6683661463644208', '1.616521509633149', '2.008542433241109', '1.938825412350509', '1.2861519814147673', '1.9248339265660392', '2.491422069725684', '1.572258877403097'], 
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
          range: [0, 16.603594353845466], 
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
          x: 0.7000000000000002, 
          y: -0.7, 
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
        autosize: true, 
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
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});