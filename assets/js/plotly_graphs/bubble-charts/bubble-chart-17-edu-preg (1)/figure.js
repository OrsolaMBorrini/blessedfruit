var figurePregEdu17 = {
  "data": [
    {
      "uid": "a03b39",
      "meta": {
        "columnNames": {
          "x": "Female Early Leavers",
          "y": "Total_Pregnancies",
          "text": "Region",
          "marker": {
            "size": "Religious_observation",
            "color": "Religious_observation"
          }
        }
      },
      "mode": "markers",
      "name": "Religious observance in radius<br>",
      "type": "scatter",
      "xsrc": "chloepap:25:31ea28",
      "x": [
        "7.050464437857961",
        "6.026635924983956",
        "4.449543540385253",
        "4.474809870622953",
        "3.7586753140597193",
        "4.40750869674846",
        "3.9109142233025",
        "7.93534652736904",
        "3.946083523026142",
        "4.347431149415216",
        "4.620323035206009",
        "4.190327609136792",
        "2.572187815093842",
        "5.473131628851515",
        "5.844558660527774",
        "5.01623380436059",
        "8.940193250438874",
        "9.07288209090961",
        "5.303005159913671",
        "6.989888341965415"
      ],
      "ysrc": "chloepap:25:9d7e81",
      "y": [
        "3.709522562625469",
        "3.203252032520325",
        "3.4608687522642017",
        "3.821205901715525",
        "3.1888679518770835",
        "3.322999418717303",
        "3.622520400150227",
        "3.029788789389865",
        "3.232228064310245",
        "3.2937919433687863",
        "3.503630620950148",
        "3.5408646382323274",
        "3.1142841834547794",
        "2.9786302436176557",
        "2.462768357939527",
        "3.0502988047808763",
        "4.771080727748121",
        "3.8910781927145295",
        "3.650524339837193",
        "3.753125094129341"
      ],
      "marker": {
        "line": {
          "color": "rgb(10, 9, 9)",
          "width": 2
        },
        "meta": {
          "columnNames": {
            "size": "Religious_observation",
            "color": "Religious_observation"
          }
        },
        "symbol": "circle",
        "sizemin": 0,
        "sizeref": 1,
        "sizesrc": "chloepap:25:2ba770",
        "size": [
          "16.347278470050423",
          "17.430851021685562",
          "18.372607250768308",
          "18.75877208766689",
          "20.063493111946865",
          "20.19448314102937",
          "23.1498989289666",
          "23.420639591916814",
          "23.73552802744745",
          "23.94968591796566",
          "24.98273664827114",
          "25.42314669866572",
          "26.468701742937803",
          "26.675211475831684",
          "29.13131829873101",
          "29.35765451912162",
          "30.18905796380065",
          "30.22789437728195",
          "32.32416459963508",
          "32.942044496254155"
        ],
        "colorsrc": "chloepap:25:2ba770",
        "color": [
          "16.347278470050423",
          "17.430851021685562",
          "18.372607250768308",
          "18.75877208766689",
          "20.063493111946865",
          "20.19448314102937",
          "23.1498989289666",
          "23.420639591916814",
          "23.73552802744745",
          "23.94968591796566",
          "24.98273664827114",
          "25.42314669866572",
          "26.468701742937803",
          "26.675211475831684",
          "29.13131829873101",
          "29.35765451912162",
          "30.18905796380065",
          "30.22789437728195",
          "32.32416459963508",
          "32.942044496254155"
        ],
        "sizemode": "diameter",
        "colorscale": [
          [
            0,
            "#fff7ec"
          ],
          [
            0.125,
            "#fee8c8"
          ],
          [
            0.25,
            "#fdd49e"
          ],
          [
            0.375,
            "#fdbb84"
          ],
          [
            0.5,
            "#fc8d59"
          ],
          [
            0.625,
            "#ef6548"
          ],
          [
            0.75,
            "#d7301f"
          ],
          [
            0.875,
            "#b30000"
          ],
          [
            1,
            "#7f0000"
          ]
        ]
      },
      "error_x": {
        "type": "percent",
        "color": "#636efa",
        "value": 10,
        "width": 4,
        "visible": false,
        "symmetric": true,
        "thickness": 2
      },
      "hoveron": "points",
      "textsrc": "chloepap:25:ddaff6",
      "text": [
        "Liguria",
        "Valle d'Aosta",
        "Toscana",
        "Emilia-Romagna",
        "Friuli-Venezia Giulia",
        "Umbria",
        "Piemonte",
        "Sardegna",
        "Abruzzo",
        "Lazio",
        "Trentino-Alto Adige",
        "Lombardia",
        "Marche",
        "Veneto",
        "Basilicata",
        "Molise",
        "Sicilia",
        "Campania",
        "Calabria",
        "Puglia"
      ],
      "hoverinfo": "x+y+text+name",
      "cliponaxis": true,
      "hoverlabel": {
        "namelength": 0
      },
      "stackgroup": null,
      "hovertemplate": "",
      "autocolorscale": false
    },
    {
      "uid": "dcb0a0",
      "line": {
        "dash": "solid",
        "color": "rgb(15, 3, 1)",
        "width": 1
      },
      "name": "Fit of early leavers of education and pregnancies",
      "transforms": [
        {
          "rms": 1.725411177208327,
          "type": "fit",
          "xmid": 24.644661483152323,
          "ymid": 5.415122917970919,
          "inputUid": "a03b39",
          "regressor": "x",
          "parameters": [
            {
              "hold": false,
              "name": "m",
              "error": 0.0562003547621971,
              "value": 0.1157840628179521
            },
            {
              "hold": false,
              "name": "b",
              "error": 0.3194449858446307,
              "value": 2.8029213376207935
            }
          ],
          "regressand": "y",
          "correlation": 0.31271047744185754,
          "fitfunction": "m*x + b",
          "inputxrange": [],
          "outputxrange": [],
          "interpolation": 50,
          "showlegend":true
        }
      ],
      "hovertemplate": "<i>Religious_observation %{meta[0]}</i>"
    }
  ],
  "layout": {
    "scene": {
      "aspectmode": "auto",
      "aspectratio": {
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    "xaxis": {
      "type": "linear",
      "range": [
        2.039534461654635,
        9.627302754083255
      ],
      "title": {
        "text": "Female early leavers of education"
      },
      "autorange": true,
      "ticksuffix": "%",
      "separatethousands": false
    },
    "yaxis": {
      "type": "linear",
      "range": [
        2.0265992189536743,
        5.21729428557656
      ],
      "title": {
        "text": "Pregnancies"
      },
      "autorange": true,
      "ticksuffix": "%"
    },
    "showlegend":true,
    "legend": {
      "x": -0.04000000000000008,
      "y": -0.3599999999999999,
      "title": {
        "text": "<br>"
      },
      "yanchor": "middle",
      "itemsizing": "trace"
    },
    "metasrc": "chloepap:25:ddaff6",
    "meta": [
      "Liguria",
      "Valle d'Aosta",
      "Toscana",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Umbria",
      "Piemonte",
      "Sardegna",
      "Abruzzo",
      "Lazio",
      "Trentino-Alto Adige",
      "Lombardia",
      "Marche",
      "Veneto",
      "Basilicata",
      "Molise",
      "Sicilia",
      "Campania",
      "Calabria",
      "Puglia"
    ],
    "autosize": true,
    "template": {
      "data": {
        "bar": [
          {
            "type": "bar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "table": [
          {
            "type": "table",
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            }
          }
        ],
        "carpet": [
          {
            "type": "carpet",
            "aaxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            }
          }
        ],
        "mesh3d": [
          {
            "type": "mesh3d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "contour": [
          {
            "type": "contour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "heatmap": [
          {
            "type": "heatmap",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatter": [
          {
            "type": "scatter",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "surface": [
          {
            "type": "surface",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "heatmapgl": [
          {
            "type": "heatmapgl",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "histogram": [
          {
            "type": "histogram",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            },
            "type": "parcoords"
          }
        ],
        "scatter3d": [
          {
            "type": "scatter3d",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattergl": [
          {
            "type": "scattergl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "choropleth": [
          {
            "type": "choropleth",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattergeo": [
          {
            "type": "scattergeo",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2d": [
          {
            "type": "histogram2d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatterpolar": [
          {
            "type": "scatterpolar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "contourcarpet": [
          {
            "type": "contourcarpet",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattercarpet": [
          {
            "type": "scattercarpet",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattermapbox": [
          {
            "type": "scattermapbox",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterpolargl": [
          {
            "type": "scatterpolargl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterternary": [
          {
            "type": "scatterternary",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2dcontour": [
          {
            "type": "histogram2dcontour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ]
      },
      "layout": {
        "geo": {
          "bgcolor": "white",
          "showland": true,
          "lakecolor": "white",
          "landcolor": "white",
          "showlakes": true,
          "subunitcolor": "#C8D4E3"
        },
        "font": {
          "color": "#2a3f5f"
        },
        "polar": {
          "bgcolor": "white",
          "radialaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          },
          "angularaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          }
        },
        "scene": {
          "xaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "yaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "zaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "yaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "ternary": {
          "aaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "baxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "caxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "bgcolor": "white"
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#19d3f3",
          "#e763fa",
          "#fecb52",
          "#ffa15a",
          "#ff6692",
          "#b6e880"
        ],
        "hovermode": "closest",
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ]
        },
        "plot_bgcolor": "white",
        "paper_bgcolor": "white",
        "shapedefaults": {
          "line": {
            "width": 0
          },
          "opacity": 0.4,
          "fillcolor": "#506784"
        },
        "annotationdefaults": {
          "arrowhead": 0,
          "arrowcolor": "#506784",
          "arrowwidth": 1
        }
      },
      "themeRef": "PLOTLY_WHITE"
    }
  },
  "frames": []
};


var figureRelPreg17 = {
  "data": [
    {
      "uid": "a03b39",
      "meta": {
        "columnNames": {
          "x": "Religious_observation",
          "y": "Total_Pregnancies",
          "text": "Region",
          "marker": {
            "size": "Female Early Leavers",
            "color": "Female Early Leavers"
          }
        }
      },
      "mode": "markers",
      "name": "Early leavers of education in radius<br>",
      "type": "scatter",
      "xsrc": "chloepap:25:2ba770",
      "x": [
        "16.347278470050423",
        "17.430851021685562",
        "18.372607250768308",
        "18.75877208766689",
        "20.063493111946865",
        "20.19448314102937",
        "23.1498989289666",
        "23.420639591916814",
        "23.73552802744745",
        "23.94968591796566",
        "24.98273664827114",
        "25.42314669866572",
        "26.468701742937803",
        "26.675211475831684",
        "29.13131829873101",
        "29.35765451912162",
        "30.18905796380065",
        "30.22789437728195",
        "32.32416459963508",
        "32.942044496254155"
      ],
      "ysrc": "chloepap:25:9d7e81",
      "y": [
        "3.709522562625469",
        "3.203252032520325",
        "3.4608687522642017",
        "3.821205901715525",
        "3.1888679518770835",
        "3.322999418717303",
        "3.622520400150227",
        "3.029788789389865",
        "3.232228064310245",
        "3.2937919433687863",
        "3.503630620950148",
        "3.5408646382323274",
        "3.1142841834547794",
        "2.9786302436176557",
        "2.462768357939527",
        "3.0502988047808763",
        "4.771080727748121",
        "3.8910781927145295",
        "3.650524339837193",
        "3.753125094129341"
      ],
      "marker": {
        "line": {
          "color": "rgb(10, 9, 9)",
          "width": 2
        },
        "meta": {
          "columnNames": {
            "size": "Total_Pregnancies",
            "color": "Female Early Leavers"
          }
        },
        "symbol": "circle",
        "sizemin": 1,
        "sizeref": 0.2,
        "sizesrc": "chloepap:25:9d7e81",
        "size": [
          "3.709522562625469",
          "3.203252032520325",
          "3.4608687522642017",
          "3.821205901715525",
          "3.1888679518770835",
          "3.322999418717303",
          "3.622520400150227",
          "3.029788789389865",
          "3.232228064310245",
          "3.2937919433687863",
          "3.503630620950148",
          "3.5408646382323274",
          "3.1142841834547794",
          "2.9786302436176557",
          "2.462768357939527",
          "3.0502988047808763",
          "4.771080727748121",
          "3.8910781927145295",
          "3.650524339837193",
          "3.753125094129341"
        ],
        "colorsrc": "chloepap:25:31ea28",
        "color": [
          "7.050464437857961",
          "6.026635924983956",
          "4.449543540385253",
          "4.474809870622953",
          "3.7586753140597193",
          "4.40750869674846",
          "3.9109142233025",
          "7.93534652736904",
          "3.946083523026142",
          "4.347431149415216",
          "4.620323035206009",
          "4.190327609136792",
          "2.572187815093842",
          "5.473131628851515",
          "5.844558660527774",
          "5.01623380436059",
          "8.940193250438874",
          "9.07288209090961",
          "5.303005159913671",
          "6.989888341965415"
        ],
        "sizemode": "diameter",
        "colorscale": [
          [
            0,
            "#ffffe5"
          ],
          [
            0.125,
            "#f7fcb9"
          ],
          [
            0.25,
            "#d9f0a3"
          ],
          [
            0.375,
            "#addd8e"
          ],
          [
            0.5,
            "#78c679"
          ],
          [
            0.625,
            "#41ab5d"
          ],
          [
            0.75,
            "#238443"
          ],
          [
            0.875,
            "#006837"
          ],
          [
            1,
            "#004529"
          ]
        ]
      },
      "error_x": {
        "type": "percent",
        "color": "#636efa",
        "value": 10,
        "width": 4,
        "visible": false,
        "symmetric": true,
        "thickness": 2
      },
      "hoveron": "points",
      "textsrc": "chloepap:25:ddaff6",
      "text": [
        "Liguria",
        "Valle d'Aosta",
        "Toscana",
        "Emilia-Romagna",
        "Friuli-Venezia Giulia",
        "Umbria",
        "Piemonte",
        "Sardegna",
        "Abruzzo",
        "Lazio",
        "Trentino-Alto Adige",
        "Lombardia",
        "Marche",
        "Veneto",
        "Basilicata",
        "Molise",
        "Sicilia",
        "Campania",
        "Calabria",
        "Puglia"
      ],
      "visible": true,
      "hoverinfo": "x+y+text+name",
      "cliponaxis": true,
      "hoverlabel": {
        "namelength": 0
      },
      "stackgroup": null,
      "hovertemplate": "",
      "autocolorscale": false
    },
    {
      "uid": "dcb0a0",
      "line": {
        "dash": "solid",
        "color": "rgb(15, 3, 1)",
        "width": 1
      },
      "name": "Fit of religious observance and pregnancies",
      "transforms": [
        {
          "rms": 1.725411177208327,
          "type": "fit",
          "xmid": 24.644661483152323,
          "ymid": 5.415122917970919,
          "inputUid": "a03b39",
          "regressor": "x",
          "parameters": [
            {
              "hold": false,
              "name": "m",
              "error": 0.021773644315888744,
              "value": 0.011958974462402773
            },
            {
              "hold": false,
              "name": "b",
              "error": 0.5473929052785542,
              "value": 3.1351910272773216
            }
          ],
          "regressand": "y",
          "correlation": 0.31271047744185754,
          "fitfunction": "m*x + b",
          "inputxrange": [],
          "outputxrange": [],
          "interpolation": 50,
          "showlegend":true

        }
      ],
      "hovertemplate": "<i>Religious_observation %{meta[0]}</i>"
    }
  ],
  "layout": {
    "scene": {
      "aspectmode": "auto",
      "aspectratio": {
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    "xaxis": {
      "type": "linear",
      "range": [
        15.125715210312393,
        34.16677563769683
      ],
      "title": {
        "text": "Religious observance"
      },
      "autorange": true,
      "ticksuffix": "%",
      "separatethousands": false
    },
    "yaxis": {
      "type": "linear",
      "range": [
        2.210341318681952,
        5.12357708478955
      ],
      "title": {
        "text": "Pregnancies"
      },
      "autorange": true,
      "ticksuffix": "%"
    },
    "legend": {
      "x": -0.04000000000000008,
      "y": -0.3599999999999999,
      "title": {
        "text": "<br>"
      },
      "yanchor": "middle",
      "itemsizing": "trace"
    },
    "metasrc": "chloepap:25:ddaff6",
    "meta": [
      "Liguria",
      "Valle d'Aosta",
      "Toscana",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Umbria",
      "Piemonte",
      "Sardegna",
      "Abruzzo",
      "Lazio",
      "Trentino-Alto Adige",
      "Lombardia",
      "Marche",
      "Veneto",
      "Basilicata",
      "Molise",
      "Sicilia",
      "Campania",
      "Calabria",
      "Puglia"
    ],
    "autosize": true,
    "template": {
      "data": {
        "bar": [
          {
            "type": "bar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "table": [
          {
            "type": "table",
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            }
          }
        ],
        "carpet": [
          {
            "type": "carpet",
            "aaxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            }
          }
        ],
        "mesh3d": [
          {
            "type": "mesh3d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "contour": [
          {
            "type": "contour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "heatmap": [
          {
            "type": "heatmap",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatter": [
          {
            "type": "scatter",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "surface": [
          {
            "type": "surface",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "heatmapgl": [
          {
            "type": "heatmapgl",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "histogram": [
          {
            "type": "histogram",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            },
            "type": "parcoords"
          }
        ],
        "scatter3d": [
          {
            "type": "scatter3d",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattergl": [
          {
            "type": "scattergl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "choropleth": [
          {
            "type": "choropleth",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattergeo": [
          {
            "type": "scattergeo",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2d": [
          {
            "type": "histogram2d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatterpolar": [
          {
            "type": "scatterpolar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "contourcarpet": [
          {
            "type": "contourcarpet",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattercarpet": [
          {
            "type": "scattercarpet",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattermapbox": [
          {
            "type": "scattermapbox",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterpolargl": [
          {
            "type": "scatterpolargl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterternary": [
          {
            "type": "scatterternary",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2dcontour": [
          {
            "type": "histogram2dcontour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ]
      },
      "layout": {
        "geo": {
          "bgcolor": "white",
          "showland": true,
          "lakecolor": "white",
          "landcolor": "white",
          "showlakes": true,
          "subunitcolor": "#C8D4E3"
        },
        "font": {
          "color": "#2a3f5f"
        },
        "polar": {
          "bgcolor": "white",
          "radialaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          },
          "angularaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          }
        },
        "scene": {
          "xaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "yaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "zaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "yaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "ternary": {
          "aaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "baxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "caxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "bgcolor": "white"
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#19d3f3",
          "#e763fa",
          "#fecb52",
          "#ffa15a",
          "#ff6692",
          "#b6e880"
        ],
        "hovermode": "closest",
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ]
        },
        "plot_bgcolor": "white",
        "paper_bgcolor": "white",
        "shapedefaults": {
          "line": {
            "width": 0
          },
          "opacity": 0.4,
          "fillcolor": "#506784"
        },
        "annotationdefaults": {
          "arrowhead": 0,
          "arrowcolor": "#506784",
          "arrowwidth": 1
        }
      },
      "themeRef": "PLOTLY_WHITE"
    }
  },
  "frames": []
};


var relEdu17 ={
  "data": [
    {
      "uid": "a03b39",
      "meta": {
        "columnNames": {
          "x": "Religious_observation",
          "y": "Female Early Leavers",
          "text": "Region",
          "marker": {
            "size": "Total_Pregnancies",
            "color": "Total_Pregnancies"
          }
        }
      },
      "mode": "markers",
      "name": "Pregnancy in radius<br>",
      "type": "scatter",
      "xsrc": "chloepap:25:2ba770",
      "x": [
        "16.347278470050423",
        "17.430851021685562",
        "18.372607250768308",
        "18.75877208766689",
        "20.063493111946865",
        "20.19448314102937",
        "23.1498989289666",
        "23.420639591916814",
        "23.73552802744745",
        "23.94968591796566",
        "24.98273664827114",
        "25.42314669866572",
        "26.468701742937803",
        "26.675211475831684",
        "29.13131829873101",
        "29.35765451912162",
        "30.18905796380065",
        "30.22789437728195",
        "32.32416459963508",
        "32.942044496254155"
      ],
      "ysrc": "chloepap:25:31ea28",
      "y": [
        "7.050464437857961",
        "6.026635924983956",
        "4.449543540385253",
        "4.474809870622953",
        "3.7586753140597193",
        "4.40750869674846",
        "3.9109142233025",
        "7.93534652736904",
        "3.946083523026142",
        "4.347431149415216",
        "4.620323035206009",
        "4.190327609136792",
        "2.572187815093842",
        "5.473131628851515",
        "5.844558660527774",
        "5.01623380436059",
        "8.940193250438874",
        "9.07288209090961",
        "5.303005159913671",
        "6.989888341965415"
      ],
      "marker": {
        "line": {
          "color": "rgb(10, 9, 9)",
          "width": 2
        },
        "meta": {
          "columnNames": {
            "size": "Total_Pregnancies",
            "color": "Total_Pregnancies"
          }
        },
        "symbol": "circle",
        "sizemin": 0,
        "sizeref": 0.2,
        "sizesrc": "chloepap:25:9d7e81",
        "size": [
          "3.709522562625469",
          "3.203252032520325",
          "3.4608687522642017",
          "3.821205901715525",
          "3.1888679518770835",
          "3.322999418717303",
          "3.622520400150227",
          "3.029788789389865",
          "3.232228064310245",
          "3.2937919433687863",
          "3.503630620950148",
          "3.5408646382323274",
          "3.1142841834547794",
          "2.9786302436176557",
          "2.462768357939527",
          "3.0502988047808763",
          "4.771080727748121",
          "3.8910781927145295",
          "3.650524339837193",
          "3.753125094129341"
        ],
        "colorsrc": "chloepap:25:9d7e81",
        "color": [
          "3.709522562625469",
          "3.203252032520325",
          "3.4608687522642017",
          "3.821205901715525",
          "3.1888679518770835",
          "3.322999418717303",
          "3.622520400150227",
          "3.029788789389865",
          "3.232228064310245",
          "3.2937919433687863",
          "3.503630620950148",
          "3.5408646382323274",
          "3.1142841834547794",
          "2.9786302436176557",
          "2.462768357939527",
          "3.0502988047808763",
          "4.771080727748121",
          "3.8910781927145295",
          "3.650524339837193",
          "3.753125094129341"
        ],
        "sizemode": "diameter",
        "colorscale": [
          [
            0,
            "#ffffe5"
          ],
          [
            0.125,
            "#fff7bc"
          ],
          [
            0.25,
            "#fee391"
          ],
          [
            0.375,
            "#fec44f"
          ],
          [
            0.5,
            "#fe9929"
          ],
          [
            0.625,
            "#ec7014"
          ],
          [
            0.75,
            "#cc4c02"
          ],
          [
            0.875,
            "#993404"
          ],
          [
            1,
            "#662506"
          ]
        ]
      },
      "error_x": {
        "type": "percent",
        "color": "#636efa",
        "value": 10,
        "width": 4,
        "visible": false,
        "symmetric": true,
        "thickness": 2
      },
      "hoveron": "points",
      "textsrc": "chloepap:25:ddaff6",
      "text": [
        "Liguria",
        "Valle d'Aosta",
        "Toscana",
        "Emilia-Romagna",
        "Friuli-Venezia Giulia",
        "Umbria",
        "Piemonte",
        "Sardegna",
        "Abruzzo",
        "Lazio",
        "Trentino-Alto Adige",
        "Lombardia",
        "Marche",
        "Veneto",
        "Basilicata",
        "Molise",
        "Sicilia",
        "Campania",
        "Calabria",
        "Puglia"
      ],
      "hoverinfo": "x+y+text+name",
      "cliponaxis": true,
      "hoverlabel": {
        "namelength": 0
      },
      "stackgroup": null,
      "hovertemplate": "",
      "autocolorscale": false
    },
    {
      "uid": "dcb0a0",
      "line": {
        "dash": "solid",
        "color": "rgb(15, 3, 1)",
        "width": 1
      },
      "name": "Fit of religious observance and early leavers of education",
      "transforms": [
        {
          "rms": 1.725411177208327,
          "type": "fit",
          "xmid": 24.644661483152323,
          "ymid": 5.415122917970919,
          "inputUid": "a03b39",
          "regressor": "x",
          "parameters": [
            {
              "hold": false,
              "name": "m",
              "error": 0.07867645988092474,
              "value": 0.1098927794679974
            },
            {
              "hold": false,
              "name": "b",
              "error": 1.9779388019038935,
              "value": 2.706852568539253
            }
          ],
          "regressand": "y",
          "correlation": 0.31271047744185754,
          "fitfunction": "m*x + b",
          "inputxrange": [],
          "outputxrange": [],
          "interpolation": 50,
          "showlegend":true

        }
      ],
      "hovertemplate": "<i>Religious_observation %{meta[0]}</i>"
    }
  ],
  "layout": {
    "scene": {
      "aspectmode": "auto",
      "aspectratio": {
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    "xaxis": {
      "type": "linear",
      "range": [
        15.125715210312393,
        34.16677563769683
      ],
      "title": {
        "text": "Religious observance"
      },
      "autorange": true,
      "ticksuffix": "%",
      "separatethousands": false
    },
    "yaxis": {
      "type": "linear",
      "range": [
        1.7851354104108221,
        9.954366184966668
      ],
      "title": {
        "text": "Early leavers of education"
      },
      "autorange": true,
      "ticksuffix": "%"
    },
    "legend": {
      "x": -0.04000000000000008,
      "y": -0.3599999999999999,
      "title": {
        "text": "<br>"
      },
      "yanchor": "middle",
      "itemsizing": "trace"
    },
    "metasrc": "chloepap:25:ddaff6",
    "meta": [
      "Liguria",
      "Valle d'Aosta",
      "Toscana",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Umbria",
      "Piemonte",
      "Sardegna",
      "Abruzzo",
      "Lazio",
      "Trentino-Alto Adige",
      "Lombardia",
      "Marche",
      "Veneto",
      "Basilicata",
      "Molise",
      "Sicilia",
      "Campania",
      "Calabria",
      "Puglia"
    ],
    "autosize": true,
    "template": {
      "data": {
        "bar": [
          {
            "type": "bar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "table": [
          {
            "type": "table",
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            }
          }
        ],
        "carpet": [
          {
            "type": "carpet",
            "aaxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            }
          }
        ],
        "mesh3d": [
          {
            "type": "mesh3d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "contour": [
          {
            "type": "contour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "heatmap": [
          {
            "type": "heatmap",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatter": [
          {
            "type": "scatter",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "surface": [
          {
            "type": "surface",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "heatmapgl": [
          {
            "type": "heatmapgl",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "histogram": [
          {
            "type": "histogram",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            },
            "type": "parcoords"
          }
        ],
        "scatter3d": [
          {
            "type": "scatter3d",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattergl": [
          {
            "type": "scattergl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "choropleth": [
          {
            "type": "choropleth",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattergeo": [
          {
            "type": "scattergeo",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2d": [
          {
            "type": "histogram2d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatterpolar": [
          {
            "type": "scatterpolar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "contourcarpet": [
          {
            "type": "contourcarpet",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattercarpet": [
          {
            "type": "scattercarpet",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattermapbox": [
          {
            "type": "scattermapbox",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterpolargl": [
          {
            "type": "scatterpolargl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterternary": [
          {
            "type": "scatterternary",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2dcontour": [
          {
            "type": "histogram2dcontour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ]
      },
      "layout": {
        "geo": {
          "bgcolor": "white",
          "showland": true,
          "lakecolor": "white",
          "landcolor": "white",
          "showlakes": true,
          "subunitcolor": "#C8D4E3"
        },
        "font": {
          "color": "#2a3f5f"
        },
        "polar": {
          "bgcolor": "white",
          "radialaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          },
          "angularaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          }
        },
        "scene": {
          "xaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "yaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "zaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "yaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "ternary": {
          "aaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "baxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "caxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "bgcolor": "white"
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#19d3f3",
          "#e763fa",
          "#fecb52",
          "#ffa15a",
          "#ff6692",
          "#b6e880"
        ],
        "hovermode": "closest",
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ]
        },
        "plot_bgcolor": "white",
        "paper_bgcolor": "white",
        "shapedefaults": {
          "line": {
            "width": 0
          },
          "opacity": 0.4,
          "fillcolor": "#506784"
        },
        "annotationdefaults": {
          "arrowhead": 0,
          "arrowcolor": "#506784",
          "arrowwidth": 1
        }
      },
      "themeRef": "PLOTLY_WHITE"
    }
  },
  "frames": []
};


var relEdu18 =
{
  "data": [
    {
      "uid": "a03b39",
      "meta": {
        "columnNames": {
          "x": "Religious_observation",
          "y": "Female Early Leavers",
          "text": "Region",
          "marker": {
            "size": "Total_Pregnancies",
            "color": "Total_Pregnancies"
          }
        }
      },
      "mode": "markers",
      "name": "Pregnancies in radius<br>",
      "type": "scatter",
      "xsrc": "chloepap:29:e4b4af",
      "x": [
        "9.206284299762162",
        "7.958425186824031",
        "9.1977716604261",
        "11.842171375748652",
        "11.82289608749148",
        "9.79003878011986",
        "9.373346910484312",
        "11.079723733140664",
        "8.888665546532705",
        "10.1288249189694",
        "13.582657872909737",
        "11.518989183582548",
        "12.532243617589735",
        "13.166990355179564",
        "14.311121160930693",
        "14.828219044111876",
        "13.516247245281397",
        "15.664053898989604",
        "14.352513207571771",
        "2.802104794125686"
      ],
      "ysrc": "chloepap:29:f3192e",
      "y": [
        "5.912749721905527",
        "6.946711976634063",
        "6.570800793226264",
        "5.052072769568727",
        "5.411536116644386",
        "3.544309550286101",
        "4.672598769400642",
        "4.057636909073642",
        "5.065852475709493",
        "3.6753102739475176",
        "3.494251806033068",
        "4.3957599033859935",
        "3.530963175962696",
        "4.056196714835907",
        "9.579951103524197",
        "6.674683714968175",
        "4.065830389894502",
        "7.488983436897397",
        "10.630949620946968",
        "8.453123313282207"
      ],
      "marker": {
        "line": {
          "color": "rgb(10, 9, 9)",
          "width": 2
        },
        "meta": {
          "columnNames": {
            "size": "Total_Pregnancies",
            "color": "Total_Pregnancies"
          }
        },
        "symbol": "circle",
        "sizemin": 0,
        "sizeref": 0.16666666666666666,
        "sizesrc": "chloepap:25:9d7e81",
        "size": [
          "3.709522562625469",
          "3.203252032520325",
          "3.4608687522642017",
          "3.821205901715525",
          "3.1888679518770835",
          "3.322999418717303",
          "3.622520400150227",
          "3.029788789389865",
          "3.232228064310245",
          "3.2937919433687863",
          "3.503630620950148",
          "3.5408646382323274",
          "3.1142841834547794",
          "2.9786302436176557",
          "2.462768357939527",
          "3.0502988047808763",
          "4.771080727748121",
          "3.8910781927145295",
          "3.650524339837193",
          "3.753125094129341"
        ],
        "colorsrc": "chloepap:29:1ad712",
        "color": [
          "1.7484154071184788",
          "1.5382124352331603",
          "1.7707451003300525",
          "1.6601711906851653",
          "1.57604397023454",
          "1.699929433477482",
          "1.9306186908082008",
          "1.7991822639235042",
          "1.759088918090232",
          "1.6472655392049198",
          "0.4016092503762888",
          "1.6714962933787223",
          "1.631006935843448",
          "1.3476312419974392",
          "1.783249316057715",
          "1.938639005241343",
          "1.3364910072538174",
          "1.803666744024136",
          "2.4467028082346998",
          "1.5166828463901485"
        ],
        "sizemode": "diameter",
        "colorscale": [
          [
            0,
            "#fff5eb"
          ],
          [
            0.125,
            "#fee6ce"
          ],
          [
            0.25,
            "#fdd0a2"
          ],
          [
            0.375,
            "#fdae6b"
          ],
          [
            0.5,
            "#fd8d3c"
          ],
          [
            0.625,
            "#f16913"
          ],
          [
            0.75,
            "#d94801"
          ],
          [
            0.875,
            "#a63603"
          ],
          [
            1,
            "#7f2704"
          ]
        ]
      },
      "error_x": {
        "type": "percent",
        "color": "#636efa",
        "value": 10,
        "width": 4,
        "visible": false,
        "symmetric": true,
        "thickness": 2
      },
      "hoveron": "points",
      "textsrc": "chloepap:25:ddaff6",
      "text": [
        "Liguria",
        "Valle d'Aosta",
        "Toscana",
        "Emilia-Romagna",
        "Friuli-Venezia Giulia",
        "Umbria",
        "Piemonte",
        "Sardegna",
        "Abruzzo",
        "Lazio",
        "Trentino-Alto Adige",
        "Lombardia",
        "Marche",
        "Veneto",
        "Basilicata",
        "Molise",
        "Sicilia",
        "Campania",
        "Calabria",
        "Puglia"
      ],
      "visible": true,
      "hoverinfo": "x+y+text+name",
      "cliponaxis": true,
      "hoverlabel": {
        "namelength": 0
      },
      "stackgroup": null,
      "hovertemplate": "",
      "autocolorscale": false
    },
    {
      "uid": "dcb0a0",
      "line": {
        "dash": "solid",
        "color": "rgb(15, 3, 1)",
        "width": 1
      },
      "name": "Fit of religious observance and early leavers of education",
      "transforms": [
        {
          "rms": 1.725411177208327,
          "type": "fit",
          "xmid": 24.644661483152323,
          "ymid": 5.415122917970919,
          "inputUid": "a03b39",
          "regressor": "x",
          "parameters": [
            {
              "hold": false,
              "name": "m",
              "error": 0.16464063916773425,
              "value": 0.014254798997981677
            },
            {
              "hold": false,
              "name": "b",
              "error": 1.9182436348763108,
              "value": 5.503245659591124
            }
          ],
          "regressand": "y",
          "correlation": 0.31271047744185754,
          "fitfunction": "m*x + b",
          "inputxrange": [],
          "outputxrange": [],
          "interpolation": 50,
          "showlegend":true
        }
      ],
      "hovertemplate": "<i>Religious_observation %{meta[0]}</i><br>"
    }
  ],
  "layout": {
    "scene": {
      "aspectmode": "auto",
      "aspectratio": {
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    "xaxis": {
      "type": "linear",
      "range": [
        1.8031148131208294,
        16.672436137093822
      ],
      "title": {
        "text": "Religious observance"
      },
      "autorange": true,
      "ticksuffix": "%",
      "separatethousands": false
    },
    "yaxis": {
      "type": "linear",
      "range": [
        2.453987548558905,
        11.695455191815636
      ],
      "title": {
        "text": "Early leavers of education"
      },
      "autorange": true,
      "ticksuffix": "%"
    },
    "legend": {
      "x": -0.04000000000000008,
      "y": -0.3599999999999999,
      "title": {
        "text": "<br>"
      },
      "yanchor": "middle",
      "itemsizing": "trace"
    },
    "metasrc": "chloepap:25:ddaff6",
    "meta": [
      "Liguria",
      "Valle d'Aosta",
      "Toscana",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Umbria",
      "Piemonte",
      "Sardegna",
      "Abruzzo",
      "Lazio",
      "Trentino-Alto Adige",
      "Lombardia",
      "Marche",
      "Veneto",
      "Basilicata",
      "Molise",
      "Sicilia",
      "Campania",
      "Calabria",
      "Puglia"
    ],
    "autosize": true,
    "template": {
      "data": {
        "bar": [
          {
            "type": "bar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "table": [
          {
            "type": "table",
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            }
          }
        ],
        "carpet": [
          {
            "type": "carpet",
            "aaxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            }
          }
        ],
        "mesh3d": [
          {
            "type": "mesh3d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "contour": [
          {
            "type": "contour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "heatmap": [
          {
            "type": "heatmap",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatter": [
          {
            "type": "scatter",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "surface": [
          {
            "type": "surface",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "heatmapgl": [
          {
            "type": "heatmapgl",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "histogram": [
          {
            "type": "histogram",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            },
            "type": "parcoords"
          }
        ],
        "scatter3d": [
          {
            "type": "scatter3d",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattergl": [
          {
            "type": "scattergl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "choropleth": [
          {
            "type": "choropleth",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattergeo": [
          {
            "type": "scattergeo",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2d": [
          {
            "type": "histogram2d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatterpolar": [
          {
            "type": "scatterpolar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "contourcarpet": [
          {
            "type": "contourcarpet",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattercarpet": [
          {
            "type": "scattercarpet",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattermapbox": [
          {
            "type": "scattermapbox",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterpolargl": [
          {
            "type": "scatterpolargl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterternary": [
          {
            "type": "scatterternary",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2dcontour": [
          {
            "type": "histogram2dcontour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ]
      },
      "layout": {
        "geo": {
          "bgcolor": "white",
          "showland": true,
          "lakecolor": "white",
          "landcolor": "white",
          "showlakes": true,
          "subunitcolor": "#C8D4E3"
        },
        "font": {
          "color": "#2a3f5f"
        },
        "polar": {
          "bgcolor": "white",
          "radialaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          },
          "angularaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          }
        },
        "scene": {
          "xaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "yaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "zaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "yaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "ternary": {
          "aaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "baxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "caxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "bgcolor": "white"
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#19d3f3",
          "#e763fa",
          "#fecb52",
          "#ffa15a",
          "#ff6692",
          "#b6e880"
        ],
        "hovermode": "closest",
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ]
        },
        "plot_bgcolor": "white",
        "paper_bgcolor": "white",
        "shapedefaults": {
          "line": {
            "width": 0
          },
          "opacity": 0.4,
          "fillcolor": "#506784"
        },
        "annotationdefaults": {
          "arrowhead": 0,
          "arrowcolor": "#506784",
          "arrowwidth": 1
        }
      },
      "themeRef": "PLOTLY_WHITE"
    }
  },
  "frames": []
};


var pregEdu18 =
{
  "data": [
    {
      "uid": "a03b39",
      "meta": {
        "columnNames": {
          "x": "Female Early Leavers",
          "y": "Total_Pregnancies",
          "text": "Region",
          "marker": {
            "size": "Total_Pregnancies",
            "color": "Religious_observation"
          }
        }
      },
      "mode": "markers",
      "name": "Religious observance in radius<br>",
      "type": "scatter",
      "xsrc": "chloepap:29:f3192e",
      "x": [
        "5.912749721905527",
        "6.946711976634063",
        "6.570800793226264",
        "5.052072769568727",
        "5.411536116644386",
        "3.544309550286101",
        "4.672598769400642",
        "4.057636909073642",
        "5.065852475709493",
        "3.6753102739475176",
        "3.494251806033068",
        "4.3957599033859935",
        "3.530963175962696",
        "4.056196714835907",
        "9.579951103524197",
        "6.674683714968175",
        "4.065830389894502",
        "7.488983436897397",
        "10.630949620946968",
        "8.453123313282207"
      ],
      "ysrc": "chloepap:25:9d7e81",
      "y": [
        "3.709522562625469",
        "3.203252032520325",
        "3.4608687522642017",
        "3.821205901715525",
        "3.1888679518770835",
        "3.322999418717303",
        "3.622520400150227",
        "3.029788789389865",
        "3.232228064310245",
        "3.2937919433687863",
        "3.503630620950148",
        "3.5408646382323274",
        "3.1142841834547794",
        "2.9786302436176557",
        "2.462768357939527",
        "3.0502988047808763",
        "4.771080727748121",
        "3.8910781927145295",
        "3.650524339837193",
        "3.753125094129341"
      ],
      "marker": {
        "line": {
          "color": "rgb(10, 9, 9)",
          "width": 2
        },
        "meta": {
          "columnNames": {
            "size": "Total_Pregnancies",
            "color": "Religious_observation"
          }
        },
        "symbol": "circle",
        "sizemin": 0,
        "sizeref": 0.16666666666666666,
        "sizesrc": "chloepap:25:9d7e81",
        "size": [
          "3.709522562625469",
          "3.203252032520325",
          "3.4608687522642017",
          "3.821205901715525",
          "3.1888679518770835",
          "3.322999418717303",
          "3.622520400150227",
          "3.029788789389865",
          "3.232228064310245",
          "3.2937919433687863",
          "3.503630620950148",
          "3.5408646382323274",
          "3.1142841834547794",
          "2.9786302436176557",
          "2.462768357939527",
          "3.0502988047808763",
          "4.771080727748121",
          "3.8910781927145295",
          "3.650524339837193",
          "3.753125094129341"
        ],
        "colorsrc": "chloepap:25:2ba770",
        "color": [
          "16.347278470050423",
          "17.430851021685562",
          "18.372607250768308",
          "18.75877208766689",
          "20.063493111946865",
          "20.19448314102937",
          "23.1498989289666",
          "23.420639591916814",
          "23.73552802744745",
          "23.94968591796566",
          "24.98273664827114",
          "25.42314669866572",
          "26.468701742937803",
          "26.675211475831684",
          "29.13131829873101",
          "29.35765451912162",
          "30.18905796380065",
          "30.22789437728195",
          "32.32416459963508",
          "32.942044496254155"
        ],
        "sizemode": "diameter",
        "showscale": false,
        "colorscale": [
          [
            0,
            "#fff7ec"
          ],
          [
            0.125,
            "#fee8c8"
          ],
          [
            0.25,
            "#fdd49e"
          ],
          [
            0.375,
            "#fdbb84"
          ],
          [
            0.5,
            "#fc8d59"
          ],
          [
            0.625,
            "#ef6548"
          ],
          [
            0.75,
            "#d7301f"
          ],
          [
            0.875,
            "#b30000"
          ],
          [
            1,
            "#7f0000"
          ]
        ]
      },
      "error_x": {
        "type": "percent",
        "color": "#636efa",
        "value": 10,
        "width": 4,
        "visible": false,
        "symmetric": true,
        "thickness": 2
      },
      "hoveron": "points",
      "textsrc": "chloepap:25:ddaff6",
      "text": [
        "Liguria",
        "Valle d'Aosta",
        "Toscana",
        "Emilia-Romagna",
        "Friuli-Venezia Giulia",
        "Umbria",
        "Piemonte",
        "Sardegna",
        "Abruzzo",
        "Lazio",
        "Trentino-Alto Adige",
        "Lombardia",
        "Marche",
        "Veneto",
        "Basilicata",
        "Molise",
        "Sicilia",
        "Campania",
        "Calabria",
        "Puglia"
      ],
      "visible": true,
      "hoverinfo": "x+y+text+name",
      "cliponaxis": true,
      "hoverlabel": {
        "namelength": 15
      },
      "stackgroup": null,
      "hovertemplate": "",
      "autocolorscale": false
    },
    {
      "uid": "dcb0a0",
      "line": {
        "dash": "solid",
        "color": "rgb(15, 3, 1)",
        "width": 1
      },
      "name": "Fit of pregnancies and early leavers of education",
      "hoverlabel": {
        "namelength": 15
      },
      "transforms": [
        {
          "rms": 1.725411177208327,
          "type": "fit",
          "xmid": 24.644661483152323,
          "ymid": 5.415122917970919,
          "inputUid": "a03b39",
          "regressor": "x",
          "parameters": [
            {
              "hold": false,
              "name": "m",
              "error": 0.05248443435656784,
              "value": -0.020145211089340066
            },
            {
              "hold": false,
              "name": "b",
              "error": 0.31601982955266006,
              "value": 3.5441693011420896
            }
          ],
          "regressand": "y",
          "correlation": 0.31271047744185754,
          "fitfunction": "m*x + b",
          "inputxrange": [],
          "outputxrange": [],
          "interpolation": 50,
          "showlegend":true
        }
      ],
      "hovertemplate": ""
    }
  ],
  "layout": {
    "scene": {
      "aspectmode": "auto",
      "aspectratio": {
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    "xaxis": {
      "type": "linear",
      "range": [
        2.9507781180148918,
        11.179958175549588
      ],
      "title": {
        "font": {
          "size": 13
        },
        "text": "Female early leavers of education"
      },
      "autorange": true,
      "ticksuffix": "%",
      "separatethousands": false
    },
    "yaxis": {
      "type": "linear",
      "range": [
        2.181341521338231,
        5.175944699320946
      ],
      "title": {
        "font": {
          "size": 13,
          "color": "rgb(60, 92, 140)"
        },
        "text": "Pregnancies"
      },
      "autorange": true,
      "ticksuffix": "%"
    },
    "legend": {
      "x": -0.04000000000000008,
      "y": -0.3599999999999999,
      "title": {
        "text": "<br>"
      },
      "yanchor": "middle",
      "itemsizing": "trace"
    },
    "metasrc": "chloepap:25:ddaff6",
    "meta": [
      "Liguria",
      "Valle d'Aosta",
      "Toscana",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Umbria",
      "Piemonte",
      "Sardegna",
      "Abruzzo",
      "Lazio",
      "Trentino-Alto Adige",
      "Lombardia",
      "Marche",
      "Veneto",
      "Basilicata",
      "Molise",
      "Sicilia",
      "Campania",
      "Calabria",
      "Puglia"
    ],
    "autosize": true,
    "template": {
      "data": {
        "bar": [
          {
            "type": "bar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "table": [
          {
            "type": "table",
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            }
          }
        ],
        "carpet": [
          {
            "type": "carpet",
            "aaxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            }
          }
        ],
        "mesh3d": [
          {
            "type": "mesh3d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "contour": [
          {
            "type": "contour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "heatmap": [
          {
            "type": "heatmap",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatter": [
          {
            "type": "scatter",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "surface": [
          {
            "type": "surface",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "heatmapgl": [
          {
            "type": "heatmapgl",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "histogram": [
          {
            "type": "histogram",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            },
            "type": "parcoords"
          }
        ],
        "scatter3d": [
          {
            "type": "scatter3d",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattergl": [
          {
            "type": "scattergl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "choropleth": [
          {
            "type": "choropleth",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattergeo": [
          {
            "type": "scattergeo",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2d": [
          {
            "type": "histogram2d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatterpolar": [
          {
            "type": "scatterpolar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "contourcarpet": [
          {
            "type": "contourcarpet",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattercarpet": [
          {
            "type": "scattercarpet",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattermapbox": [
          {
            "type": "scattermapbox",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterpolargl": [
          {
            "type": "scatterpolargl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterternary": [
          {
            "type": "scatterternary",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2dcontour": [
          {
            "type": "histogram2dcontour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ]
      },
      "layout": {
        "geo": {
          "bgcolor": "white",
          "showland": true,
          "lakecolor": "white",
          "landcolor": "white",
          "showlakes": true,
          "subunitcolor": "#C8D4E3"
        },
        "font": {
          "color": "#2a3f5f"
        },
        "polar": {
          "bgcolor": "white",
          "radialaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          },
          "angularaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          }
        },
        "scene": {
          "xaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "yaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "zaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "yaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "ternary": {
          "aaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "baxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "caxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "bgcolor": "white"
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#19d3f3",
          "#e763fa",
          "#fecb52",
          "#ffa15a",
          "#ff6692",
          "#b6e880"
        ],
        "hovermode": "closest",
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ]
        },
        "plot_bgcolor": "white",
        "paper_bgcolor": "white",
        "shapedefaults": {
          "line": {
            "width": 0
          },
          "opacity": 0.4,
          "fillcolor": "#506784"
        },
        "annotationdefaults": {
          "arrowhead": 0,
          "arrowcolor": "#506784",
          "arrowwidth": 1
        }
      },
      "themeRef": "PLOTLY_WHITE"
    }
  },
  "frames": []
};

var relPreg18 =
{
  "data": [
    {
      "uid": "a03b39",
      "meta": {
        "columnNames": {
          "x": "Religious_observation",
          "y": "Total_Pregnancies",
          "text": "Region",
          "marker": {
            "size": "Female Early Leavers",
            "color": "Female Early Leavers"
          }
        }
      },
      "mode": "markers",
      "name": "Female early leavers in radius<br>",
      "type": "scatter",
      "xsrc": "chloepap:25:2ba770",
      "x": [
        "16.347278470050423",
        "17.430851021685562",
        "18.372607250768308",
        "18.75877208766689",
        "20.063493111946865",
        "20.19448314102937",
        "23.1498989289666",
        "23.420639591916814",
        "23.73552802744745",
        "23.94968591796566",
        "24.98273664827114",
        "25.42314669866572",
        "26.468701742937803",
        "26.675211475831684",
        "29.13131829873101",
        "29.35765451912162",
        "30.18905796380065",
        "30.22789437728195",
        "32.32416459963508",
        "32.942044496254155"
      ],
      "ysrc": "chloepap:25:9d7e81",
      "y": [
        "3.709522562625469",
        "3.203252032520325",
        "3.4608687522642017",
        "3.821205901715525",
        "3.1888679518770835",
        "3.322999418717303",
        "3.622520400150227",
        "3.029788789389865",
        "3.232228064310245",
        "3.2937919433687863",
        "3.503630620950148",
        "3.5408646382323274",
        "3.1142841834547794",
        "2.9786302436176557",
        "2.462768357939527",
        "3.0502988047808763",
        "4.771080727748121",
        "3.8910781927145295",
        "3.650524339837193",
        "3.753125094129341"
      ],
      "marker": {
        "line": {
          "color": "rgb(10, 9, 9)",
          "width": 2
        },
        "meta": {
          "columnNames": {
            "size": "Total_Pregnancies",
            "color": "Female Early Leavers"
          }
        },
        "symbol": "circle",
        "sizemin": 0,
        "sizeref": 0.16666666666666666,
        "sizesrc": "chloepap:25:9d7e81",
        "size": [
          "3.709522562625469",
          "3.203252032520325",
          "3.4608687522642017",
          "3.821205901715525",
          "3.1888679518770835",
          "3.322999418717303",
          "3.622520400150227",
          "3.029788789389865",
          "3.232228064310245",
          "3.2937919433687863",
          "3.503630620950148",
          "3.5408646382323274",
          "3.1142841834547794",
          "2.9786302436176557",
          "2.462768357939527",
          "3.0502988047808763",
          "4.771080727748121",
          "3.8910781927145295",
          "3.650524339837193",
          "3.753125094129341"
        ],
        "colorsrc": "chloepap:25:31ea28",
        "color": [
          "7.050464437857961",
          "6.026635924983956",
          "4.449543540385253",
          "4.474809870622953",
          "3.7586753140597193",
          "4.40750869674846",
          "3.9109142233025",
          "7.93534652736904",
          "3.946083523026142",
          "4.347431149415216",
          "4.620323035206009",
          "4.190327609136792",
          "2.572187815093842",
          "5.473131628851515",
          "5.844558660527774",
          "5.01623380436059",
          "8.940193250438874",
          "9.07288209090961",
          "5.303005159913671",
          "6.989888341965415"
        ],
        "sizemode": "diameter",
        "colorscale": [
          [
            0,
            "#f7fcf5"
          ],
          [
            0.125,
            "#e5f5e0"
          ],
          [
            0.25,
            "#c7e9c0"
          ],
          [
            0.375,
            "#a1d99b"
          ],
          [
            0.5,
            "#74c476"
          ],
          [
            0.625,
            "#41ab5d"
          ],
          [
            0.75,
            "#238b45"
          ],
          [
            0.875,
            "#006d2c"
          ],
          [
            1,
            "#00441b"
          ]
        ]
      },
      "error_x": {
        "type": "percent",
        "color": "#636efa",
        "value": 10,
        "width": 4,
        "visible": false,
        "symmetric": true,
        "thickness": 2
      },
      "hoveron": "points",
      "textsrc": "chloepap:25:ddaff6",
      "text": [
        "Liguria",
        "Valle d'Aosta",
        "Toscana",
        "Emilia-Romagna",
        "Friuli-Venezia Giulia",
        "Umbria",
        "Piemonte",
        "Sardegna",
        "Abruzzo",
        "Lazio",
        "Trentino-Alto Adige",
        "Lombardia",
        "Marche",
        "Veneto",
        "Basilicata",
        "Molise",
        "Sicilia",
        "Campania",
        "Calabria",
        "Puglia"
      ],
      "visible": true,
      "hoverinfo": "x+y+text+name",
      "cliponaxis": true,
      "hoverlabel": {
        "namelength": 0
      },
      "stackgroup": null,
      "hovertemplate": "",
      "autocolorscale": false
    },
    {
      "uid": "dcb0a0",
      "line": {
        "dash": "solid",
        "color": "rgb(15, 3, 1)",
        "width": 1
      },
      "name": "Fit of religious observance and pregnancies",
      "transforms": [
        {
          "rms": 1.725411177208327,
          "type": "fit",
          "xmid": 24.644661483152323,
          "ymid": 5.415122917970919,
          "inputUid": "a03b39",
          "regressor": "x",
          "parameters": [
            {
              "hold": false,
              "name": "m",
              "error": 0.021773644315889202,
              "value": 0.011958974462424984
            },
            {
              "hold": false,
              "name": "b",
              "error": 0.5473929052785874,
              "value": 3.1351910272769015
            }
          ],
          "regressand": "y",
          "correlation": 0.31271047744185754,
          "fitfunction": "m*x + b",
          "inputxrange": [],
          "outputxrange": [],
          "interpolation": 50,
          "showlegend":true
        }
      ],
      "hovertemplate": "<i>Religious_observation %{meta[0]}</i><br>"
    }
  ],
  "layout": {
    "scene": {
      "aspectmode": "auto",
      "aspectratio": {
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    "xaxis": {
      "type": "linear",
      "range": [
        15.063423878785912,
        34.229725549388654
      ],
      "title": {
        "text": "Religious observance"
      },
      "autorange": true,
      "ticksuffix": "%",
      "separatethousands": false
    },
    "yaxis": {
      "type": "linear",
      "range": [
        2.181341521338231,
        5.175944699320946
      ],
      "title": {
        "text": "Pregnancies"
      },
      "autorange": true,
      "ticksuffix": "%"
    },
    "legend": {
      "x": -0.04000000000000008,
      "y": -0.3599999999999999,
      "title": {
        "text": "<br>"
      },
      "yanchor": "middle",
      "itemsizing": "trace"
    },
    "metasrc": "chloepap:25:ddaff6",
    "meta": [
      "Liguria",
      "Valle d'Aosta",
      "Toscana",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Umbria",
      "Piemonte",
      "Sardegna",
      "Abruzzo",
      "Lazio",
      "Trentino-Alto Adige",
      "Lombardia",
      "Marche",
      "Veneto",
      "Basilicata",
      "Molise",
      "Sicilia",
      "Campania",
      "Calabria",
      "Puglia"
    ],
    "autosize": true,
    "template": {
      "data": {
        "bar": [
          {
            "type": "bar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "table": [
          {
            "type": "table",
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            }
          }
        ],
        "carpet": [
          {
            "type": "carpet",
            "aaxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            }
          }
        ],
        "mesh3d": [
          {
            "type": "mesh3d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "contour": [
          {
            "type": "contour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "heatmap": [
          {
            "type": "heatmap",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatter": [
          {
            "type": "scatter",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "surface": [
          {
            "type": "surface",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "heatmapgl": [
          {
            "type": "heatmapgl",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "histogram": [
          {
            "type": "histogram",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            },
            "type": "parcoords"
          }
        ],
        "scatter3d": [
          {
            "type": "scatter3d",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattergl": [
          {
            "type": "scattergl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "choropleth": [
          {
            "type": "choropleth",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattergeo": [
          {
            "type": "scattergeo",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2d": [
          {
            "type": "histogram2d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatterpolar": [
          {
            "type": "scatterpolar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "contourcarpet": [
          {
            "type": "contourcarpet",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattercarpet": [
          {
            "type": "scattercarpet",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattermapbox": [
          {
            "type": "scattermapbox",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterpolargl": [
          {
            "type": "scatterpolargl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterternary": [
          {
            "type": "scatterternary",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2dcontour": [
          {
            "type": "histogram2dcontour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ]
      },
      "layout": {
        "geo": {
          "bgcolor": "white",
          "showland": true,
          "lakecolor": "white",
          "landcolor": "white",
          "showlakes": true,
          "subunitcolor": "#C8D4E3"
        },
        "font": {
          "color": "#2a3f5f"
        },
        "polar": {
          "bgcolor": "white",
          "radialaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          },
          "angularaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          }
        },
        "scene": {
          "xaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "yaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "zaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "yaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "ternary": {
          "aaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "baxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "caxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "bgcolor": "white"
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#19d3f3",
          "#e763fa",
          "#fecb52",
          "#ffa15a",
          "#ff6692",
          "#b6e880"
        ],
        "hovermode": "closest",
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ]
        },
        "plot_bgcolor": "white",
        "paper_bgcolor": "white",
        "shapedefaults": {
          "line": {
            "width": 0
          },
          "opacity": 0.4,
          "fillcolor": "#506784"
        },
        "annotationdefaults": {
          "arrowhead": 0,
          "arrowcolor": "#506784",
          "arrowwidth": 1
        }
      },
      "themeRef": "PLOTLY_WHITE"
    }
  },
  "frames": []
};



var pregEdu19 =
{
  "data": [
    {
      "uid": "a03b39",
      "meta": {
        "columnNames": {
          "x": "Female Early Leavers",
          "y": "Total_Pregnancies",
          "text": "Region",
          "marker": {
            "size": "Religious_observation",
            "color": "Religious_observation"
          }
        }
      },
      "mode": "markers",
      "name": "Religion in radius<br>",
      "type": "scatter",
      "xsrc": "chloepap:33:0ffe1f",
      "x": [
        "5.294662203271142",
        "4.958300142361278",
        "3.4386893980034445",
        "5.1521582827080685",
        "3.877648262508933",
        "3.800544678565033",
        "4.360966407929538",
        "3.9544698901461777",
        "4.2375925070852025",
        "4.34661977900743",
        "2.8764289945209534",
        "5.274856889691957",
        "2.14942690586356",
        "3.5536909848394096",
        "8.046397630451478",
        "7.39349258405309",
        "4.369592266843077",
        "8.469346975624436",
        "10.325005240713889",
        "6.664729176400655"
      ],
      "ysrc": "chloepap:29:1ad712",
      "y": [
        "1.7484154071184788",
        "1.5382124352331603",
        "1.7707451003300525",
        "1.6601711906851653",
        "1.57604397023454",
        "1.699929433477482",
        "1.9306186908082008",
        "1.7991822639235042",
        "1.759088918090232",
        "1.6472655392049198",
        "0.4016092503762888",
        "1.6714962933787223",
        "1.631006935843448",
        "1.3476312419974392",
        "1.783249316057715",
        "1.938639005241343",
        "1.3364910072538174",
        "1.803666744024136",
        "2.4467028082346998",
        "1.5166828463901485"
      ],
      "marker": {
        "line": {
          "color": "rgb(10, 9, 9)",
          "width": 2
        },
        "meta": {
          "columnNames": {
            "size": "Religious_observation",
            "color": "Religious_observation"
          }
        },
        "symbol": "circle",
        "sizemin": 0,
        "sizeref": 0.5,
        "sizesrc": "chloepap:33:7e16bc",
        "size": [
          "10.089958357466116",
          "9.997280739638818",
          "7.902541011236692",
          "12.93429874859413",
          "11.569678465415883",
          "9.077976083885472",
          "8.926733359930592",
          "10.203428537505484",
          "8.151537350154568",
          "9.65334160762614",
          "13.453015590954283",
          "10.007470854978544",
          "11.09015016913445",
          "13.809580854264",
          "15.773414636153191",
          "14.924221632279826",
          "13.19466284925188",
          "15.521801796094207",
          "15.363188651341764",
          "10.734533739632331"
        ],
        "colorsrc": "chloepap:33:7e16bc",
        "color": [
          "10.089958357466116",
          "9.997280739638818",
          "7.902541011236692",
          "12.93429874859413",
          "11.569678465415883",
          "9.077976083885472",
          "8.926733359930592",
          "10.203428537505484",
          "8.151537350154568",
          "9.65334160762614",
          "13.453015590954283",
          "10.007470854978544",
          "11.09015016913445",
          "13.809580854264",
          "15.773414636153191",
          "14.924221632279826",
          "13.19466284925188",
          "15.521801796094207",
          "15.363188651341764",
          "10.734533739632331"
        ],
        "sizemode": "diameter",
        "colorscale": [
          [
            0,
            "#fff7ec"
          ],
          [
            0.125,
            "#fee8c8"
          ],
          [
            0.25,
            "#fdd49e"
          ],
          [
            0.375,
            "#fdbb84"
          ],
          [
            0.5,
            "#fc8d59"
          ],
          [
            0.625,
            "#ef6548"
          ],
          [
            0.75,
            "#d7301f"
          ],
          [
            0.875,
            "#b30000"
          ],
          [
            1,
            "#7f0000"
          ]
        ]
      },
      "error_x": {
        "type": "percent",
        "color": "#636efa",
        "value": 10,
        "width": 4,
        "visible": false,
        "symmetric": true,
        "thickness": 2
      },
      "hoveron": "points",
      "textsrc": "chloepap:29:88c350",
      "text": [
        "Piemonte",
        "Valle d'Aosta",
        "Liguria",
        "Lombardia",
        "Veneto",
        "Friuli-Venezia Giulia",
        "Emilia-Romagna",
        "Trentino-Alto Adige",
        "Toscana",
        "Umbria",
        "Marche",
        "Lazio",
        "Abruzzo",
        "Molise",
        "Campania",
        "Puglia",
        "Basilicata",
        "Calabria",
        "Sicilia",
        "Sardegna"
      ],
      "visible": true,
      "hoverinfo": "x+y+text+name",
      "cliponaxis": true,
      "hoverlabel": {
        "namelength": 0
      },
      "stackgroup": null,
      "hovertemplate": "",
      "autocolorscale": false
    },
    {
      "uid": "dcb0a0",
      "line": {
        "dash": "solid",
        "color": "rgb(15, 3, 1)",
        "width": 1
      },
      "name": "Fit of pregnancies and early leavers of education",
      "hoverlabel": {
        "namelength": -1
      },
      "transforms": [
        {
          "rms": 1.725411177208327,
          "type": "fit",
          "xmid": 24.644661483152323,
          "ymid": 5.415122917970919,
          "inputUid": "a03b39",
          "regressor": "x",
          "parameters": [
            {
              "hold": false,
              "name": "m",
              "error": 0.021630772311647402,
              "value": 0.2929267350466902
            },
            {
              "hold": false,
              "name": "b",
              "error": 7453559.924999299,
              "value": 1.9875753615815355e-14
            }
          ],
          "regressand": "y",
          "correlation": 0.31271047744185754,
          "fitfunction": "m*x + b",
          "inputxrange": [],
          "outputxrange": [],
          "interpolation": 50,
          "showlegend":true
        }
      ],
      "hovertemplate": "<i>Religious_observation %{meta[0]}</i><br>"
    }
  ],
  "layout": {
    "scene": {
      "aspectmode": "auto",
      "aspectratio": {
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    "xaxis": {
      "type": "linear",
      "range": [
        1.512915244728896,
        11.023542660298897
      ],
      "title": {
        "text": "Female early leavers of education"
      },
      "autorange": true,
      "ticksuffix": "%",
      "separatethousands": false
    },
    "yaxis": {
      "type": "linear",
      "range": [
        -0.014497270782261318,
        3.1844157242541256
      ],
      "title": {
        "text": "Pregnancies"
      },
      "autorange": true,
      "ticksuffix": "%"
    },
    "legend": {
      "x": -0.04000000000000008,
      "y": -0.3599999999999999,
      "title": {
        "text": "<br>"
      },
      "yanchor": "middle",
      "itemsizing": "trace"
    },
    "metasrc": "chloepap:25:ddaff6",
    "meta": [
      "Liguria",
      "Valle d'Aosta",
      "Toscana",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Umbria",
      "Piemonte",
      "Sardegna",
      "Abruzzo",
      "Lazio",
      "Trentino-Alto Adige",
      "Lombardia",
      "Marche",
      "Veneto",
      "Basilicata",
      "Molise",
      "Sicilia",
      "Campania",
      "Calabria",
      "Puglia"
    ],
    "autosize": true,
    "template": {
      "data": {
        "bar": [
          {
            "type": "bar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "table": [
          {
            "type": "table",
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            }
          }
        ],
        "carpet": [
          {
            "type": "carpet",
            "aaxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            }
          }
        ],
        "mesh3d": [
          {
            "type": "mesh3d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "contour": [
          {
            "type": "contour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "heatmap": [
          {
            "type": "heatmap",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatter": [
          {
            "type": "scatter",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "surface": [
          {
            "type": "surface",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "heatmapgl": [
          {
            "type": "heatmapgl",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "histogram": [
          {
            "type": "histogram",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            },
            "type": "parcoords"
          }
        ],
        "scatter3d": [
          {
            "type": "scatter3d",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattergl": [
          {
            "type": "scattergl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "choropleth": [
          {
            "type": "choropleth",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattergeo": [
          {
            "type": "scattergeo",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2d": [
          {
            "type": "histogram2d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatterpolar": [
          {
            "type": "scatterpolar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "contourcarpet": [
          {
            "type": "contourcarpet",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattercarpet": [
          {
            "type": "scattercarpet",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattermapbox": [
          {
            "type": "scattermapbox",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterpolargl": [
          {
            "type": "scatterpolargl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterternary": [
          {
            "type": "scatterternary",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2dcontour": [
          {
            "type": "histogram2dcontour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ]
      },
      "layout": {
        "geo": {
          "bgcolor": "white",
          "showland": true,
          "lakecolor": "white",
          "landcolor": "white",
          "showlakes": true,
          "subunitcolor": "#C8D4E3"
        },
        "font": {
          "color": "#2a3f5f"
        },
        "polar": {
          "bgcolor": "white",
          "radialaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          },
          "angularaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          }
        },
        "scene": {
          "xaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "yaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "zaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "yaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "ternary": {
          "aaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "baxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "caxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "bgcolor": "white"
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#19d3f3",
          "#e763fa",
          "#fecb52",
          "#ffa15a",
          "#ff6692",
          "#b6e880"
        ],
        "hovermode": "closest",
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ]
        },
        "plot_bgcolor": "white",
        "paper_bgcolor": "white",
        "shapedefaults": {
          "line": {
            "width": 0
          },
          "opacity": 0.4,
          "fillcolor": "#506784"
        },
        "annotationdefaults": {
          "arrowhead": 0,
          "arrowcolor": "#506784",
          "arrowwidth": 1
        }
      },
      "themeRef": "PLOTLY_WHITE"
    }
  },
  "frames": []
};

var relEdu19 ={
  "data": [
    {
      "uid": "a03b39",
      "meta": {
        "columnNames": {
          "x": "Religious_observation",
          "y": "Female Early Leavers",
          "text": "Region",
          "marker": {
            "size": "Total_Pregnancies",
            "color": "Total_Pregnancies"
          }
        }
      },
      "mode": "markers",
      "name": "Pregnancies in radius<br>",
      "type": "scatter",
      "xsrc": "chloepap:33:7e16bc",
      "x": [
        "10.089958357466116",
        "9.997280739638818",
        "7.902541011236692",
        "12.93429874859413",
        "11.569678465415883",
        "9.077976083885472",
        "8.926733359930592",
        "10.203428537505484",
        "8.151537350154568",
        "9.65334160762614",
        "13.453015590954283",
        "10.007470854978544",
        "11.09015016913445",
        "13.809580854264",
        "15.773414636153191",
        "14.924221632279826",
        "13.19466284925188",
        "15.521801796094207",
        "15.363188651341764",
        "10.734533739632331"
      ],
      "ysrc": "chloepap:33:0ffe1f",
      "y": [
        "5.294662203271142",
        "4.958300142361278",
        "3.4386893980034445",
        "5.1521582827080685",
        "3.877648262508933",
        "3.800544678565033",
        "4.360966407929538",
        "3.9544698901461777",
        "4.2375925070852025",
        "4.34661977900743",
        "2.8764289945209534",
        "5.274856889691957",
        "2.14942690586356",
        "3.5536909848394096",
        "8.046397630451478",
        "7.39349258405309",
        "4.369592266843077",
        "8.469346975624436",
        "10.325005240713889",
        "6.664729176400655"
      ],
      "marker": {
        "line": {
          "color": "rgb(10, 9, 9)",
          "width": 2
        },
        "meta": {
          "columnNames": {
            "size": "Total_Pregnancies",
            "color": "Total_Pregnancies"
          }
        },
        "symbol": "circle",
        "sizemin": 1,
        "sizeref": 0.1,
        "sizesrc": "chloepap:33:9156de",
        "size": [
          "1.8063791182865787",
          "1.5836012861736335",
          "1.855328065656786",
          "1.7348972067439057",
          "1.4747267128869477",
          "1.5751977947230873",
          "1.8675978631690016",
          "1.743696117197122",
          "1.7139500428270482",
          "1.6715399610136452",
          "1.5718380702560912",
          "1.6551323366263406",
          "1.6683661463644208",
          "1.616521509633149",
          "2.008542433241109",
          "1.938825412350509",
          "1.2861519814147673",
          "1.9248339265660392",
          "2.491422069725684",
          "1.572258877403097"
        ],
        "colorsrc": "chloepap:33:9156de",
        "color": [
          "1.8063791182865787",
          "1.5836012861736335",
          "1.855328065656786",
          "1.7348972067439057",
          "1.4747267128869477",
          "1.5751977947230873",
          "1.8675978631690016",
          "1.743696117197122",
          "1.7139500428270482",
          "1.6715399610136452",
          "1.5718380702560912",
          "1.6551323366263406",
          "1.6683661463644208",
          "1.616521509633149",
          "2.008542433241109",
          "1.938825412350509",
          "1.2861519814147673",
          "1.9248339265660392",
          "2.491422069725684",
          "1.572258877403097"
        ],
        "sizemode": "diameter",
        "colorscale": [
          [
            0,
            "#fff5eb"
          ],
          [
            0.125,
            "#fee6ce"
          ],
          [
            0.25,
            "#fdd0a2"
          ],
          [
            0.375,
            "#fdae6b"
          ],
          [
            0.5,
            "#fd8d3c"
          ],
          [
            0.625,
            "#f16913"
          ],
          [
            0.75,
            "#d94801"
          ],
          [
            0.875,
            "#a63603"
          ],
          [
            1,
            "#7f2704"
          ]
        ]
      },
      "error_x": {
        "type": "percent",
        "color": "#636efa",
        "value": 10,
        "width": 4,
        "visible": false,
        "symmetric": true,
        "thickness": 2
      },
      "hoveron": "points",
      "textsrc": "chloepap:29:88c350",
      "text": [
        "Piemonte",
        "Valle d'Aosta",
        "Liguria",
        "Lombardia",
        "Veneto",
        "Friuli-Venezia Giulia",
        "Emilia-Romagna",
        "Trentino-Alto Adige",
        "Toscana",
        "Umbria",
        "Marche",
        "Lazio",
        "Abruzzo",
        "Molise",
        "Campania",
        "Puglia",
        "Basilicata",
        "Calabria",
        "Sicilia",
        "Sardegna"
      ],
      "visible": true,
      "hoverinfo": "x+y+text+name",
      "cliponaxis": true,
      "hoverlabel": {
        "namelength": 0
      },
      "stackgroup": null,
      "hovertemplate": "",
      "autocolorscale": false
    },
    {
      "uid": "dcb0a0",
      "line": {
        "dash": "solid",
        "color": "rgb(15, 3, 1)",
        "width": 1
      },
      "name": "Fit of religious observation and early leavers of education",
      "hoverlabel": {
        "namelength": -1
      },
      "transforms": [
        {
          "rms": 1.725411177208327,
          "type": "fit",
          "xmid": 24.644661483152323,
          "ymid": 5.415122917970919,
          "inputUid": "a03b39",
          "regressor": "x",
          "parameters": [
            {
              "hold": false,
              "name": "m",
              "error": 0.1502626047387636,
              "value": 0.4960357095316762
            },
            {
              "hold": false,
              "name": "b",
              "error": 1.7854848061221393,
              "value": -0.6361785597846814
            }
          ],
          "regressand": "y",
          "correlation": 0.31271047744185754,
          "fitfunction": "m*x + b",
          "inputxrange": [],
          "outputxrange": [],
          "interpolation": 50,
          "showlegend":true

        }
      ],
      "hovertemplate": "<i>Religious_observation %{meta[0]}</i><br>"
    }
  ],
  "layout": {
    "scene": {
      "aspectmode": "auto",
      "aspectratio": {
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    "xaxis": {
      "type": "linear",
      "range": [
        7.3224429888940925,
        16.364084311098857
      ],
      "title": {
        "text": "Religious observance"
      },
      "autorange": true,
      "ticksuffix": "%",
      "separatethousands": false
    },
    "yaxis": {
      "type": "linear",
      "range": [
        1.0997870505518,
        11.632655200819123
      ],
      "title": {
        "text": "Early leavers of education"
      },
      "autorange": true,
      "ticksuffix": "%"
    },
    "legend": {
      "x": -0.04000000000000008,
      "y": -0.3599999999999999,
      "title": {
        "text": "<br>"
      },
      "yanchor": "middle",
      "itemsizing": "trace"
    },
    "metasrc": "chloepap:25:ddaff6",
    "meta": [
      "Liguria",
      "Valle d'Aosta",
      "Toscana",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Umbria",
      "Piemonte",
      "Sardegna",
      "Abruzzo",
      "Lazio",
      "Trentino-Alto Adige",
      "Lombardia",
      "Marche",
      "Veneto",
      "Basilicata",
      "Molise",
      "Sicilia",
      "Campania",
      "Calabria",
      "Puglia"
    ],
    "autosize": true,
    "template": {
      "data": {
        "bar": [
          {
            "type": "bar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "table": [
          {
            "type": "table",
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            }
          }
        ],
        "carpet": [
          {
            "type": "carpet",
            "aaxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            }
          }
        ],
        "mesh3d": [
          {
            "type": "mesh3d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "contour": [
          {
            "type": "contour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "heatmap": [
          {
            "type": "heatmap",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatter": [
          {
            "type": "scatter",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "surface": [
          {
            "type": "surface",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "heatmapgl": [
          {
            "type": "heatmapgl",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "histogram": [
          {
            "type": "histogram",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            },
            "type": "parcoords"
          }
        ],
        "scatter3d": [
          {
            "type": "scatter3d",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattergl": [
          {
            "type": "scattergl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "choropleth": [
          {
            "type": "choropleth",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattergeo": [
          {
            "type": "scattergeo",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2d": [
          {
            "type": "histogram2d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatterpolar": [
          {
            "type": "scatterpolar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "contourcarpet": [
          {
            "type": "contourcarpet",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattercarpet": [
          {
            "type": "scattercarpet",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattermapbox": [
          {
            "type": "scattermapbox",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterpolargl": [
          {
            "type": "scatterpolargl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterternary": [
          {
            "type": "scatterternary",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2dcontour": [
          {
            "type": "histogram2dcontour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ]
      },
      "layout": {
        "geo": {
          "bgcolor": "white",
          "showland": true,
          "lakecolor": "white",
          "landcolor": "white",
          "showlakes": true,
          "subunitcolor": "#C8D4E3"
        },
        "font": {
          "color": "#2a3f5f"
        },
        "polar": {
          "bgcolor": "white",
          "radialaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          },
          "angularaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          }
        },
        "scene": {
          "xaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "yaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "zaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "yaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "ternary": {
          "aaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "baxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "caxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "bgcolor": "white"
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#19d3f3",
          "#e763fa",
          "#fecb52",
          "#ffa15a",
          "#ff6692",
          "#b6e880"
        ],
        "hovermode": "closest",
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ]
        },
        "plot_bgcolor": "white",
        "paper_bgcolor": "white",
        "shapedefaults": {
          "line": {
            "width": 0
          },
          "opacity": 0.4,
          "fillcolor": "#506784"
        },
        "annotationdefaults": {
          "arrowhead": 0,
          "arrowcolor": "#506784",
          "arrowwidth": 1
        }
      },
      "themeRef": "PLOTLY_WHITE"
    }
  },
  "frames": []
};


var relPreg19 =
{
  "data": [
    {
      "uid": "a03b39",
      "meta": {
        "columnNames": {
          "x": "Religious_observation",
          "y": "Total_Pregnancies",
          "text": "Region",
          "marker": {
            "size": "Female Early Leavers",
            "color": "Female Early Leavers"
          }
        }
      },
      "mode": "markers",
      "name": "Female early leavers of education in radius<br>",
      "type": "scatter",
      "xsrc": "chloepap:33:7e16bc",
      "x": [
        "10.089958357466116",
        "9.997280739638818",
        "7.902541011236692",
        "12.93429874859413",
        "11.569678465415883",
        "9.077976083885472",
        "8.926733359930592",
        "10.203428537505484",
        "8.151537350154568",
        "9.65334160762614",
        "13.453015590954283",
        "10.007470854978544",
        "11.09015016913445",
        "13.809580854264",
        "15.773414636153191",
        "14.924221632279826",
        "13.19466284925188",
        "15.521801796094207",
        "15.363188651341764",
        "10.734533739632331"
      ],
      "ysrc": "chloepap:33:9156de",
      "y": [
        "1.8063791182865787",
        "1.5836012861736335",
        "1.855328065656786",
        "1.7348972067439057",
        "1.4747267128869477",
        "1.5751977947230873",
        "1.8675978631690016",
        "1.743696117197122",
        "1.7139500428270482",
        "1.6715399610136452",
        "1.5718380702560912",
        "1.6551323366263406",
        "1.6683661463644208",
        "1.616521509633149",
        "2.008542433241109",
        "1.938825412350509",
        "1.2861519814147673",
        "1.9248339265660392",
        "2.491422069725684",
        "1.572258877403097"
      ],
      "marker": {
        "line": {
          "color": "rgb(10, 9, 9)",
          "width": 2
        },
        "meta": {
          "columnNames": {
            "size": "Female Early Leavers",
            "color": "Female Early Leavers"
          }
        },
        "symbol": "circle",
        "sizemin": 1,
        "sizeref": 0.2,
        "sizesrc": "chloepap:33:0ffe1f",
        "size": [
          "5.294662203271142",
          "4.958300142361278",
          "3.4386893980034445",
          "5.1521582827080685",
          "3.877648262508933",
          "3.800544678565033",
          "4.360966407929538",
          "3.9544698901461777",
          "4.2375925070852025",
          "4.34661977900743",
          "2.8764289945209534",
          "5.274856889691957",
          "2.14942690586356",
          "3.5536909848394096",
          "8.046397630451478",
          "7.39349258405309",
          "4.369592266843077",
          "8.469346975624436",
          "10.325005240713889",
          "6.664729176400655"
        ],
        "colorsrc": "chloepap:33:0ffe1f",
        "color": [
          "5.294662203271142",
          "4.958300142361278",
          "3.4386893980034445",
          "5.1521582827080685",
          "3.877648262508933",
          "3.800544678565033",
          "4.360966407929538",
          "3.9544698901461777",
          "4.2375925070852025",
          "4.34661977900743",
          "2.8764289945209534",
          "5.274856889691957",
          "2.14942690586356",
          "3.5536909848394096",
          "8.046397630451478",
          "7.39349258405309",
          "4.369592266843077",
          "8.469346975624436",
          "10.325005240713889",
          "6.664729176400655"
        ],
        "sizemode": "diameter",
        "colorscale": [
          [
            0,
            "#f7fcfd"
          ],
          [
            0.125,
            "#e5f5f9"
          ],
          [
            0.25,
            "#ccece6"
          ],
          [
            0.375,
            "#99d8c9"
          ],
          [
            0.5,
            "#66c2a4"
          ],
          [
            0.625,
            "#41ae76"
          ],
          [
            0.75,
            "#238b45"
          ],
          [
            0.875,
            "#006d2c"
          ],
          [
            1,
            "#00441b"
          ]
        ]
      },
      "error_x": {
        "type": "percent",
        "color": "#636efa",
        "value": 10,
        "width": 4,
        "visible": false,
        "symmetric": true,
        "thickness": 2
      },
      "hoveron": "points",
      "textsrc": "chloepap:29:88c350",
      "text": [
        "Piemonte",
        "Valle d'Aosta",
        "Liguria",
        "Lombardia",
        "Veneto",
        "Friuli-Venezia Giulia",
        "Emilia-Romagna",
        "Trentino-Alto Adige",
        "Toscana",
        "Umbria",
        "Marche",
        "Lazio",
        "Abruzzo",
        "Molise",
        "Campania",
        "Puglia",
        "Basilicata",
        "Calabria",
        "Sicilia",
        "Sardegna"
      ],
      "visible": true,
      "hoverinfo": "x+y+text+name",
      "cliponaxis": true,
      "hoverlabel": {
        "namelength": 0
      },
      "stackgroup": null,
      "hovertemplate": "",
      "autocolorscale": false
    },
    {
      "uid": "dcb0a0",
      "line": {
        "dash": "solid",
        "color": "rgb(15, 3, 1)",
        "width": 1
      },
      "name": "Fit of religious observation and pregnancies",
      "hoverlabel": {
        "namelength": -1
      },
      "transforms": [
        {
          "rms": 1.725411177208327,
          "type": "fit",
          "xmid": 24.644661483152323,
          "ymid": 5.415122917970919,
          "inputUid": "a03b39",
          "regressor": "x",
          "parameters": [
            {
              "hold": false,
              "name": "m",
              "error": 0.021265713072092744,
              "value": 0.035216318187342846
            },
            {
              "hold": false,
              "name": "b",
              "error": 0.2526883361803839,
              "value": 1.3288640320984821
            }
          ],
          "regressand": "y",
          "correlation": 0.31271047744185754,
          "fitfunction": "m*x + b",
          "inputxrange": [],
          "outputxrange": [],
          "interpolation": 50,
          "showlegend":true

        }
      ],
      "hovertemplate": "<i>Religious_observation %{meta[0]}</i><br>"
    }
  ],
  "layout": {
    "scene": {
      "aspectmode": "auto",
      "aspectratio": {
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    "xaxis": {
      "type": "linear",
      "range": [
        7.322269123078746,
        16.515312212359554
      ],
      "title": {
        "text": "Religious observance"
      },
      "autorange": true,
      "ticksuffix": "%",
      "separatethousands": false
    },
    "yaxis": {
      "type": "linear",
      "range": [
        1.0826756364027736,
        2.8516706768605227
      ],
      "title": {
        "text": "Pregnancies"
      },
      "autorange": true,
      "ticksuffix": "%"
    },
    "legend": {
      "x": -0.04000000000000008,
      "y": -0.3599999999999999,
      "title": {
        "text": "<br>"
      },
      "yanchor": "middle",
      "itemsizing": "trace"
    },
    "metasrc": "chloepap:25:ddaff6",
    "meta": [
      "Liguria",
      "Valle d'Aosta",
      "Toscana",
      "Emilia-Romagna",
      "Friuli-Venezia Giulia",
      "Umbria",
      "Piemonte",
      "Sardegna",
      "Abruzzo",
      "Lazio",
      "Trentino-Alto Adige",
      "Lombardia",
      "Marche",
      "Veneto",
      "Basilicata",
      "Molise",
      "Sicilia",
      "Campania",
      "Calabria",
      "Puglia"
    ],
    "autosize": true,
    "template": {
      "data": {
        "bar": [
          {
            "type": "bar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "table": [
          {
            "type": "table",
            "cells": {
              "fill": {
                "color": "#EBF0F8"
              },
              "line": {
                "color": "white"
              }
            },
            "header": {
              "fill": {
                "color": "#C8D4E3"
              },
              "line": {
                "color": "white"
              }
            }
          }
        ],
        "carpet": [
          {
            "type": "carpet",
            "aaxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            },
            "baxis": {
              "gridcolor": "#C8D4E3",
              "linecolor": "#C8D4E3",
              "endlinecolor": "#2a3f5f",
              "minorgridcolor": "#C8D4E3",
              "startlinecolor": "#2a3f5f"
            }
          }
        ],
        "mesh3d": [
          {
            "type": "mesh3d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "contour": [
          {
            "type": "contour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "heatmap": [
          {
            "type": "heatmap",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatter": [
          {
            "type": "scatter",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "surface": [
          {
            "type": "surface",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "heatmapgl": [
          {
            "type": "heatmapgl",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "histogram": [
          {
            "type": "histogram",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "parcoords": [
          {
            "line": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            },
            "type": "parcoords"
          }
        ],
        "scatter3d": [
          {
            "type": "scatter3d",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattergl": [
          {
            "type": "scattergl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "choropleth": [
          {
            "type": "choropleth",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattergeo": [
          {
            "type": "scattergeo",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2d": [
          {
            "type": "histogram2d",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ],
        "scatterpolar": [
          {
            "type": "scatterpolar",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "contourcarpet": [
          {
            "type": "contourcarpet",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            }
          }
        ],
        "scattercarpet": [
          {
            "type": "scattercarpet",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scattermapbox": [
          {
            "type": "scattermapbox",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterpolargl": [
          {
            "type": "scatterpolargl",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "scatterternary": [
          {
            "type": "scatterternary",
            "marker": {
              "colorbar": {
                "ticks": "",
                "outlinewidth": 0
              }
            }
          }
        ],
        "histogram2dcontour": [
          {
            "type": "histogram2dcontour",
            "colorbar": {
              "ticks": "",
              "outlinewidth": 0
            },
            "autocolorscale": true
          }
        ]
      },
      "layout": {
        "geo": {
          "bgcolor": "white",
          "showland": true,
          "lakecolor": "white",
          "landcolor": "white",
          "showlakes": true,
          "subunitcolor": "#C8D4E3"
        },
        "font": {
          "color": "#2a3f5f"
        },
        "polar": {
          "bgcolor": "white",
          "radialaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          },
          "angularaxis": {
            "ticks": "",
            "gridcolor": "#EBF0F8",
            "linecolor": "#EBF0F8"
          }
        },
        "scene": {
          "xaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "yaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          },
          "zaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "gridwidth": 2,
            "linecolor": "#EBF0F8",
            "zerolinecolor": "#EBF0F8",
            "showbackground": true,
            "backgroundcolor": "white"
          }
        },
        "title": {
          "x": 0.05
        },
        "xaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "yaxis": {
          "ticks": "",
          "gridcolor": "#EBF0F8",
          "linecolor": "#EBF0F8",
          "automargin": true,
          "zerolinecolor": "#EBF0F8",
          "zerolinewidth": 2
        },
        "ternary": {
          "aaxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "baxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "caxis": {
            "ticks": "",
            "gridcolor": "#DFE8F3",
            "linecolor": "#A2B1C6"
          },
          "bgcolor": "white"
        },
        "colorway": [
          "#636efa",
          "#EF553B",
          "#00cc96",
          "#ab63fa",
          "#19d3f3",
          "#e763fa",
          "#fecb52",
          "#ffa15a",
          "#ff6692",
          "#b6e880"
        ],
        "hovermode": "closest",
        "colorscale": {
          "diverging": [
            [
              0,
              "#8e0152"
            ],
            [
              0.1,
              "#c51b7d"
            ],
            [
              0.2,
              "#de77ae"
            ],
            [
              0.3,
              "#f1b6da"
            ],
            [
              0.4,
              "#fde0ef"
            ],
            [
              0.5,
              "#f7f7f7"
            ],
            [
              0.6,
              "#e6f5d0"
            ],
            [
              0.7,
              "#b8e186"
            ],
            [
              0.8,
              "#7fbc41"
            ],
            [
              0.9,
              "#4d9221"
            ],
            [
              1,
              "#276419"
            ]
          ],
          "sequential": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ],
          "sequentialminus": [
            [
              0,
              "#0508b8"
            ],
            [
              0.0893854748603352,
              "#1910d8"
            ],
            [
              0.1787709497206704,
              "#3c19f0"
            ],
            [
              0.2681564245810056,
              "#6b1cfb"
            ],
            [
              0.3575418994413408,
              "#981cfd"
            ],
            [
              0.44692737430167595,
              "#bf1cfd"
            ],
            [
              0.5363128491620112,
              "#dd2bfd"
            ],
            [
              0.6256983240223464,
              "#f246fe"
            ],
            [
              0.7150837988826816,
              "#fc67fd"
            ],
            [
              0.8044692737430168,
              "#fe88fc"
            ],
            [
              0.8938547486033519,
              "#fea5fd"
            ],
            [
              0.9832402234636871,
              "#febefe"
            ],
            [
              1,
              "#fec3fe"
            ]
          ]
        },
        "plot_bgcolor": "white",
        "paper_bgcolor": "white",
        "shapedefaults": {
          "line": {
            "width": 0
          },
          "opacity": 0.4,
          "fillcolor": "#506784"
        },
        "annotationdefaults": {
          "arrowhead": 0,
          "arrowcolor": "#506784",
          "arrowwidth": 1
        }
      },
      "themeRef": "PLOTLY_WHITE"
    }
  },
  "frames": []
};
