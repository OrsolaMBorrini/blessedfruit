from pandas import *
import plotly.express as px
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

# print(italy["features"][0])
# rel_observance

# def get_region_data(json_file): #a function to get region names from the json file

#     name_list=[]
#     for i in json_file['features']:
#         if (i['properties'])['name'] not in name_list:
#             name_list.append((i['properties'])['name'])
    
#     return name_list  #get list of region names

# reg_name= get_region_data(italy)

# region_df=DataFrame({'Region':reg_name,'Code':list(range(1, 21))})
# early_leavers_17=early_leavers_17.join(region_df,how='outer')
# print(early_leavers_17)

# # print(data)
# fig = px.choropleth(data_frame=early_leavers_17, 
#                     geojson=italy, 
#                     locations='Territory', # name of dataframe column
#                     featureidkey='properties.name',  # path to field in GeoJSON feature object with which to match the values passed in to locations
#                     color='Value',
#                     color_continuous_scale="Magma",
#                     scope="europe",
#                    )
# fig.update_geos(showcountries=False, showcoastlines=False, showland=False, fitbounds='locations', visible=False)
# fig.update_layout(title_text='Early leavers of education per region (2017)',margin={"r":0,"t":0,"l":0,"b":0})
# fig.show()
# fig.write_html("fig_file.html")



# # print(early_leavers_17)
# import os
# os.makedirs('Early_leavers', exist_ok=True)  

# early_leavers_17.to_csv('earlyleavers17.csv')
# df_dic=early_leavers_17.to_dict('index')
# # print(df_dic)


# def add_data_to_json(json_file_path, df,new_file_path):

#     # df_dict=df.to_dict('index')
#     # load the GeoJSON file
#     with open(json_file_path) as f:
#         data = json.load(f)

#     for feature in data["features"]:
#         properties = feature["properties"]
#         # check if the Territory column in the dataframe matches the name property in the geojson
#         if properties["name"] in df["Territory"].values:
#             # get the corresponding value from the Value column in the dataframe
#             value = df[df["Territory"] == properties["name"]]["Value"].values[0]
#             # add the new key-value pair to the properties
#             properties["value"] = value

#     # write the updated GeoJSON back to the file
#     with open(new_file_path, "w") as f:
#         json.dump(data, f)

#     return data


# print(add_data_to_json('italy-with-regions_1458.geojson',early_leavers_17,"EL_17.geojson"))


#script for MD1

def add_rel_data(json_file_path,csv_path,new_json_path):
    df=read_csv(csv_path)

    with open(json_file_path) as f:
        data = json.load(f)

    for feature in data["features"]:
        properties = feature["properties"]
        # check if the Territory column in the dataframe matches the name property in the geojson
        if properties["name"] in df["Territory"].values: 

            if df["TIPO_DATO_AVQ"]=="6_NEVER_RELIG":
            # get the corresponding value from the Value column in the dataframe
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

            

