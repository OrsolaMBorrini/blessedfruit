from pandas import *
from geojson_rewind import *

early_leavers = read_csv("EarlyLeavers.csv", keep_default_na=False)

early_leavers=early_leavers[['Territory', 'TIME','Value']]
early_leavers_2017= early_leavers[early_leavers['TIME']==2017]
early_leavers_2018= early_leavers[early_leavers['TIME']==2018]
early_leavers_2019= early_leavers[early_leavers['TIME']==2019]


early_leavers_17=early_leavers_2017.reset_index(drop=True)

from urllib.request import urlopen
import json
with open('italy-with-regions_1458.geojson') as response:  #load the geojson file with the coordinates
    italy = json.load(response)


def add_rel_data(json_file_path,csv_path,new_json_path):
    df=read_csv(csv_path)

    with open(json_file_path) as f:
        data = json.load(f)

    for feature in data["features"]:
        properties = feature["properties"]
        # check if the Territory column in the dataframe matches the name property in the geojson
        if properties["name"] in df["Territory"].values:

            if df["TIPO_DATO_AVQ"]=="6_NEVER_RELIG":
            # get the corresponding value in the dataframe
                value = df[df["Region"] == properties["name"]]["Percentage"].values[0]

                # add the new key-value pair to the properties
                properties["relig_no"] = value

            elif df["TIPO_DATO_AVQ"]=="6_WEEK_RELIG":
                value = df[df["Region"] == properties["name"]]["Percentage"].values[1]
                properties["relig_yes"] = value


from pandas import *

rel_17=read_csv('blessedfruit/data/mashupDS/MD1_17.csv',keep_default_na=False)

print(rel_17["Piemonte"]["Percentage"].values[1])




#MINE JSON VALUES


import json
def select_region_values(json_path,year,save_path):
    data = json.load(json_path)



    for i in data["Population"]:
        dict[i]= data["Population"]

        if data["Time"]== year:
            dict[i]= data["Live_births"]
            dict[i] = data["Miscarriages"]
            dict[i] = data["Abortions"]
