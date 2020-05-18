import {DashboardTestItemEditModel} from '../InsightDashboard-DashboardEdit.page';

export const dashboardStackedGroupedItems: DashboardTestItemEditModel[] = [
  {
    firstQuestion: 'Q2',
    filterQuestion: '',
    filterAnswer: '',
    period: 'År',
    chartType: 'Vandret Bjælke Stablet Grupperet',
    calculateAverage: false,
    ignoredAnswerIds: [8],
    comparedItems: [
      {itemIndex: 0, value: 2},
      {itemIndex: 1, value: 3},
      {itemIndex: 2, value: 4},
      {itemIndex: 3, value: 5},
      {itemIndex: 4, value: 1},
      ]
  }
];

export const dashboardStackedGroupedDataJson = {
  'id': 99,
  'dashboardName': 'Stacked Grouped',
  'surveyName': 'Test-Set',
  'surveyId': 1,
  'locationName': null,
  'locationId': null,
  'tagName': 'Total',
  'tagId': 7,
  'answerDates': {
    'dateFrom': '2016-01-01T00:00:00',
    'dateTo': '2020-05-18T23:59:59',
    'today': true
  },
  'items': [
    {
      'id': 249,
      'firstQuestionName': 'Q2: Er personalet på afsnittet venligt og imødekommende?',
      'firstQuestionType': 'smiley2',
      'filterQuestionName': null,
      'filterAnswerName': null,
      'firstQuestionId': 2,
      'filterQuestionId': null,
      'filterAnswerId': null,
      'period': 5,
      'chartType': 11,
      'compareEnabled': true,
      'calculateAverage': false,
      'position': 1,
      'chartData': {
        'single': [],
        'multi': [],
        'multiStacked': [
          {
            'id': 7,
            'name': 'Total',
            'isTag': true,
            'series': [
              {
                'id': 0,
                'name': '2016',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 60.0,
                    'dataCount': 100,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 32.0,
                    'dataCount': 53,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 4.0,
                    'dataCount': 6,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 2.0,
                    'dataCount': 4,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 2.0,
                    'dataCount': 3,
                    'optionIndex': 0
                  }
                ]
              },
              {
                'id': 0,
                'name': '2017',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 71.0,
                    'dataCount': 175,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 24.0,
                    'dataCount': 59,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 3.0,
                    'dataCount': 8,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 1.0,
                    'dataCount': 3,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 1.0,
                    'dataCount': 2,
                    'optionIndex': 0
                  }
                ]
              }
            ]
          },
          {
            'id': 1,
            'name': 'Location 1',
            'isTag': false,
            'series': [
              {
                'id': 0,
                'name': '2016',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 55.0,
                    'dataCount': 22,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 33.0,
                    'dataCount': 13,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 8.0,
                    'dataCount': 3,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 5.0,
                    'dataCount': 2,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 0.0,
                    'dataCount': 0,
                    'optionIndex': 0
                  }
                ]
              },
              {
                'id': 0,
                'name': '2017',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 69.0,
                    'dataCount': 44,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 27.0,
                    'dataCount': 17,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 3.0,
                    'dataCount': 2,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 0.0,
                    'dataCount': 0,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 2.0,
                    'dataCount': 1,
                    'optionIndex': 0
                  }
                ]
              }
            ]
          },
          {
            'id': 2,
            'name': 'Location 2',
            'isTag': false,
            'series': [
              {
                'id': 0,
                'name': '2016',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 49.0,
                    'dataCount': 21,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 47.0,
                    'dataCount': 20,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 2.0,
                    'dataCount': 1,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 0.0,
                    'dataCount': 0,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 2.0,
                    'dataCount': 1,
                    'optionIndex': 0
                  }
                ]
              },
              {
                'id': 0,
                'name': '2017',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 75.0,
                    'dataCount': 47,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 21.0,
                    'dataCount': 13,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 3.0,
                    'dataCount': 2,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 2.0,
                    'dataCount': 1,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 0.0,
                    'dataCount': 0,
                    'optionIndex': 0
                  }
                ]
              }
            ]
          },
          {
            'id': 3,
            'name': 'Location 3',
            'isTag': false,
            'series': [
              {
                'id': 0,
                'name': '2016',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 72.0,
                    'dataCount': 31,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 21.0,
                    'dataCount': 9,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 5.0,
                    'dataCount': 2,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 0.0,
                    'dataCount': 0,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 2.0,
                    'dataCount': 1,
                    'optionIndex': 0
                  }
                ]
              },
              {
                'id': 0,
                'name': '2017',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 72.0,
                    'dataCount': 44,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 25.0,
                    'dataCount': 15,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 3.0,
                    'dataCount': 2,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 0.0,
                    'dataCount': 0,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 0.0,
                    'dataCount': 0,
                    'optionIndex': 0
                  }
                ]
              }
            ]
          },
          {
            'id': 4,
            'name': 'Location 4',
            'isTag': false,
            'series': [
              {
                'id': 0,
                'name': '2016',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 65.0,
                    'dataCount': 26,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 28.0,
                    'dataCount': 11,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 0.0,
                    'dataCount': 0,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 5.0,
                    'dataCount': 2,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 3.0,
                    'dataCount': 1,
                    'optionIndex': 0
                  }
                ]
              },
              {
                'id': 0,
                'name': '2017',
                'answersCount': 0,
                'isTag': false,
                'series': [
                  {
                    'name': 'Meget glad',
                    'value': 68.0,
                    'dataCount': 40,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Glad',
                    'value': 24.0,
                    'dataCount': 14,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Neutral',
                    'value': 3.0,
                    'dataCount': 2,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Sur',
                    'value': 3.0,
                    'dataCount': 2,
                    'optionIndex': 0
                  },
                  {
                    'name': 'Meget sur',
                    'value': 2.0,
                    'dataCount': 1,
                    'optionIndex': 0
                  }
                ]
              }
            ]
          }
        ],
        'rawData': [
          {
            'rawValueName': 'Total',
            'rawHeaders': [
              '2016',
              '2017'
            ],
            'rawDataValues': [
              {
                'valueName': 'Meget glad',
                'percents': [
                  60.0,
                  71.0
                ],
                'amounts': [
                  100.0,
                  175.0
                ]
              },
              {
                'valueName': 'Glad',
                'percents': [
                  32.0,
                  24.0
                ],
                'amounts': [
                  53.0,
                  59.0
                ]
              },
              {
                'valueName': 'Neutral',
                'percents': [
                  4.0,
                  3.0
                ],
                'amounts': [
                  6.0,
                  8.0
                ]
              },
              {
                'valueName': 'Sur',
                'percents': [
                  2.0,
                  1.0
                ],
                'amounts': [
                  4.0,
                  3.0
                ]
              },
              {
                'valueName': 'Meget sur',
                'percents': [
                  2.0,
                  1.0
                ],
                'amounts': [
                  3.0,
                  2.0
                ]
              },
              {
                'valueName': 'Total',
                'percents': [
                  100.0,
                  100.0
                ],
                'amounts': [
                  166.0,
                  247.0
                ]
              }
            ]
          },
          {
            'rawValueName': 'Location 1',
            'rawHeaders': [
              '2016',
              '2017'
            ],
            'rawDataValues': [
              {
                'valueName': 'Meget glad',
                'percents': [
                  55.0,
                  69.0
                ],
                'amounts': [
                  22.0,
                  44.0
                ]
              },
              {
                'valueName': 'Glad',
                'percents': [
                  33.0,
                  27.0
                ],
                'amounts': [
                  13.0,
                  17.0
                ]
              },
              {
                'valueName': 'Neutral',
                'percents': [
                  8.0,
                  3.0
                ],
                'amounts': [
                  3.0,
                  2.0
                ]
              },
              {
                'valueName': 'Sur',
                'percents': [
                  5.0,
                  0.0
                ],
                'amounts': [
                  2.0,
                  0.0
                ]
              },
              {
                'valueName': 'Meget sur',
                'percents': [
                  0.0,
                  2.0
                ],
                'amounts': [
                  0.0,
                  1.0
                ]
              },
              {
                'valueName': 'Total',
                'percents': [
                  101.0,
                  101.0
                ],
                'amounts': [
                  40.0,
                  64.0
                ]
              }
            ]
          },
          {
            'rawValueName': 'Location 2',
            'rawHeaders': [
              '2016',
              '2017'
            ],
            'rawDataValues': [
              {
                'valueName': 'Meget glad',
                'percents': [
                  49.0,
                  75.0
                ],
                'amounts': [
                  21.0,
                  47.0
                ]
              },
              {
                'valueName': 'Glad',
                'percents': [
                  47.0,
                  21.0
                ],
                'amounts': [
                  20.0,
                  13.0
                ]
              },
              {
                'valueName': 'Neutral',
                'percents': [
                  2.0,
                  3.0
                ],
                'amounts': [
                  1.0,
                  2.0
                ]
              },
              {
                'valueName': 'Sur',
                'percents': [
                  0.0,
                  2.0
                ],
                'amounts': [
                  0.0,
                  1.0
                ]
              },
              {
                'valueName': 'Meget sur',
                'percents': [
                  2.0,
                  0.0
                ],
                'amounts': [
                  1.0,
                  0.0
                ]
              },
              {
                'valueName': 'Total',
                'percents': [
                  100.0,
                  101.0
                ],
                'amounts': [
                  43.0,
                  63.0
                ]
              }
            ]
          },
          {
            'rawValueName': 'Location 3',
            'rawHeaders': [
              '2016',
              '2017'
            ],
            'rawDataValues': [
              {
                'valueName': 'Meget glad',
                'percents': [
                  72.0,
                  72.0
                ],
                'amounts': [
                  31.0,
                  44.0
                ]
              },
              {
                'valueName': 'Glad',
                'percents': [
                  21.0,
                  25.0
                ],
                'amounts': [
                  9.0,
                  15.0
                ]
              },
              {
                'valueName': 'Neutral',
                'percents': [
                  5.0,
                  3.0
                ],
                'amounts': [
                  2.0,
                  2.0
                ]
              },
              {
                'valueName': 'Sur',
                'percents': [
                  0.0,
                  0.0
                ],
                'amounts': [
                  0.0,
                  0.0
                ]
              },
              {
                'valueName': 'Meget sur',
                'percents': [
                  2.0,
                  0.0
                ],
                'amounts': [
                  1.0,
                  0.0
                ]
              },
              {
                'valueName': 'Total',
                'percents': [
                  100.0,
                  100.0
                ],
                'amounts': [
                  43.0,
                  61.0
                ]
              }
            ]
          },
          {
            'rawValueName': 'Location 4',
            'rawHeaders': [
              '2016',
              '2017'
            ],
            'rawDataValues': [
              {
                'valueName': 'Meget glad',
                'percents': [
                  65.0,
                  68.0
                ],
                'amounts': [
                  26.0,
                  40.0
                ]
              },
              {
                'valueName': 'Glad',
                'percents': [
                  28.0,
                  24.0
                ],
                'amounts': [
                  11.0,
                  14.0
                ]
              },
              {
                'valueName': 'Neutral',
                'percents': [
                  0.0,
                  3.0
                ],
                'amounts': [
                  0.0,
                  2.0
                ]
              },
              {
                'valueName': 'Sur',
                'percents': [
                  5.0,
                  3.0
                ],
                'amounts': [
                  2.0,
                  2.0
                ]
              },
              {
                'valueName': 'Meget sur',
                'percents': [
                  3.0,
                  2.0
                ],
                'amounts': [
                  1.0,
                  1.0
                ]
              },
              {
                'valueName': 'Total',
                'percents': [
                  101.0,
                  100.0
                ],
                'amounts': [
                  40.0,
                  59.0
                ]
              }
            ]
          }
        ]
      },
      'compareLocationsTags': [
        {
          'id': 94,
          'locationId': null,
          'tagId': 7,
          'position': 1,
          'name': 'Total'
        },
        {
          'id': 90,
          'locationId': 1,
          'tagId': null,
          'position': 2,
          'name': 'Location 1'
        },
        {
          'id': 91,
          'locationId': 2,
          'tagId': null,
          'position': 3,
          'name': 'Location 2'
        },
        {
          'id': 92,
          'locationId': 3,
          'tagId': null,
          'position': 4,
          'name': 'Location 3'
        },
        {
          'id': 93,
          'locationId': 4,
          'tagId': null,
          'position': 5,
          'name': 'Location 4'
        }
      ],
      'ignoredAnswerValues': [
        {
          'id': 106,
          'answerId': 8,
          'name': 'Ved ikke'
        }
      ],
      'textQuestionData': []
    }
  ]
};
