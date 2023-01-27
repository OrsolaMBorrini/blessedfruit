$( document ).ready(function() {

      // window.PLOTLYENV={'BASE_URL': 'https://plotly.com'};
      //
      // var gd = document.getElementById('bubble-edupreg17')
      // var resizeDebounce = null;
      //
      // function resizePlot() {
      //     var bb = gd.getBoundingClientRect();
      //     Plotly.relayout(gd, {
      //         width: bb.width,
      //         height: bb.height
      //     });
      // }
      //
      //
      // window.addEventListener('resize', function() {
      //     if (resizeDebounce) {
      //         window.clearTimeout(resizeDebounce);
      //     }
      //     resizeDebounce = window.setTimeout(resizePlot, 100);
      // });
      //



var figure = {
    "data": [
        {
            "uid": "a03b39",
            "meta": {
                "columnNames": {
                    "x": "Total_Pregnancies",
                    "y": "Female Early Leavers",
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
            "xsrc": "chloepap:25:9d7e81",
            "x": [
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
                            "error": 0.799907273887652,
                            "value": 1.6479702742126323
                        },
                        {
                            "hold": false,
                            "name": "b",
                            "error": 2.7679573385749054,
                            "value": -0.23614048443849472
                        }
                    ],
                    "regressand": "y",
                    "correlation": 0.31271047744185754,
                    "fitfunction": "m*x + b",
                    "inputxrange": [],
                    "outputxrange": [],
                    "interpolation": 50
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
                2.267699536964616,
                4.968329465844866
            ],
            "title": {
                "text": ""
            },
            "autorange": true,
            "ticksuffix": "%",
            "separatethousands": false
        },
        "yaxis": {
            "type": "linear",
            "range": [
                1.4274067607787755,
                10.317121930304133
            ],
            "title": {
                "text": ""
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
        "autosize": false,
        "width": 900,
        "height": 500,
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
// }());



  Plotly.plot("bubble-edupreg17",  {
      data: figure.data,
      layout: figure.layout,
      frames: figure.frames,
      config: {"showLink": true, "linkText": "Export to plotly.com", "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A"}
  });


});
