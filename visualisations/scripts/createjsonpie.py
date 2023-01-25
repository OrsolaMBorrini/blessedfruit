from pandas import *
import os
import json

def create_json(csv_path):
    df= read_csv(csv_path)

    data17 = df[df['Time'] == 2017]
    data18 = df[df['Time'] == 2018]
    data19 = df[df['Time'] == 2019]

    json_data17=[]
    json_data18=[]
    json_data19=[]

    for i,row in data17.iterrows():
        category = row['Region']
        value = row['Total']
        subData = [{'category': 'Live births', 'value': row['Live_births']},
        {'category': 'Abortions', 'value': row['Abortions']},
        {'category': 'Miscarriages', 'value': row['Miscarriages']}]
        # Create a JSON object for the current region
        json_object = {'category': category, 'value': value, 'subData': subData}
    
        json_data17.append(json_object)



    for i,row in data18.iterrows():
        category = row['Region']
        value = row['Total']
        subData = [{'category': 'Live births', 'value': row['Live_births']},
        {'category': 'Abortions', 'value': row['Abortions']},
        {'category': 'Miscarriages', 'value': row['Miscarriages']}]
        # Create a JSON object for the current region
        json_object = {'category': category, 'value': value, 'subData': subData}
    
        json_data18.append(json_object)


    for i,row in data19.iterrows():
        category = row['Region']
        value = row['Total']
        subData = [{'category': 'Live births', 'value': row['Live_births']},
        {'category': 'Abortions', 'value': row['Abortions']},
        {'category': 'Miscarriages', 'value': row['Miscarriages']}]
        # Create a JSON object for the current region
        json_object = {'category': category, 'value': value, 'subData': subData}
    
        json_data19.append(json_object)

    path= "pie-charts-json"
    os.makedirs(path, exist_ok=True)

    with open(path+"/pie-data17", "w") as f:

        json.dump(json_data17,f)
    with open(path+"/pie-data18", "w") as f:

        json.dump(json_data18, f)
    with open(path+"/piedata19", "w") as f:
        json.dump(json_data19, f)


    return True

print(create_json('/Users/macuser/Desktop/openaccrepo/blessedfruit/full_time_series_edit.csv'))