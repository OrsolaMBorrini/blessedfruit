from pandas import *
import plotly.express as px
from geojson_rewind import *

early_leavers = read_csv("EarlyLeavers.csv", keep_default_na=False)

early_leavers=early_leavers[['Territory', 'TIME','Value']]
early_leavers_2017= early_leavers[early_leavers['TIME']==2017]
early_leavers_2018= early_leavers[early_leavers['TIME']==2018]
early_leavers_2019= early_leavers[early_leavers['TIME']==2019]

# print(early_leavers_2017)

# regions = ['Piemonte', 'Trentino-Alto Adige', 'Lombardia', 'Puglia', 'Basilicata', 
#            'Friuli-Venezia Giulia', 'Liguria', "Valle d'Aosta", 'Emilia-Romagna',
#            'Molise', 'Lazio', 'Veneto', 'Sardegna', 'Sicilia', 'Abruzzo',
#            'Calabria', 'Toscana', 'Umbria', 'Campania', 'Marche']

early_leavers_17=early_leavers_2017.reset_index(drop=True)

from urllib.request import urlopen
import json
with open('italy-with-regions_1458.geojson') as response:
    italy = json.load(response)

# print(italy["features"][0])
# rel_observance

def get_region_data(json_file):

    name_list=[]
    for i in json_file['features']:
        if (i['properties'])['name'] not in name_list:
            name_list.append((i['properties'])['name'])
    
    return name_list


# def get_region_code(json_file):
#     code_list=[]
#     for i in json_file['features']:
#         if (i['properties'])['id'] not in code_list:


#             code_list.append((i['properties'])['id'])
    
#     return code_list


reg_name= get_region_data(italy)
# reg_code= get_region_code(italy)

region_df=DataFrame({'Region':reg_name,'Code':list(range(1, 21))})
early_leavers_17=early_leavers_17.join(region_df,how='outer')
print(early_leavers_17)

# print(data)
fig = px.choropleth(data_frame=early_leavers_17, 
                    geojson=italy, 
                    locations='Territory', # name of dataframe column
                    featureidkey='properties.name',  # path to field in GeoJSON feature object with which to match the values passed in to locations
                    color='Value',
                    color_continuous_scale="Magma",
                    scope="europe",
                   )
fig.update_geos(showcountries=False, showcoastlines=False, showland=False, fitbounds='locations', visible=False)
fig.update_layout(title_text='Early leavers of education per region (2017)',margin={"r":0,"t":0,"l":0,"b":0})
fig.show()
fig.write_html("fig_file.html")



# print(early_leavers_17)
import os
os.makedirs('Early_leavers', exist_ok=True)  

early_leavers_17.to_csv('earlyleavers17.csv')
