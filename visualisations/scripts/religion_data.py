from pandas import *
import json
import numpy as np

# print(rel_17)

def converter(o):
    if isinstance(o, np.int64): return int(o)  
    if isinstance(o, np.float64): return float(o)
    raise TypeError



# def add_rel_data(json_file_path,csv_path,new_json_path):
#     df=read_csv(csv_path)

#     with open(json_file_path) as f:
#         data = json.load(f)

#     for feature in data["features"]:
#         properties = feature["properties"]
#         region= properties["name"]
#         # check if the Territory column in the dataframe matches the name property in the geojson
#         if region in df["Region"].values: 
                
#                 # access and add the new key-value pair to the properties
#                 rel_no= df.loc[(df['TIPO_DATO_AVQ'] == '6_NEVER_RELIG') & (df['Region'] == region), 'Percentage'].values[0]
#                 properties["relig_no"] = rel_no
#                 rel_yes=df.loc[(df['TIPO_DATO_AVQ'] == '6_WEEK_RELIG') & (df['Region'] == region), 'Percentage'].values[0]
#                 properties["relig_yes"] = rel_yes


#     with open(new_json_path, "w") as f:
#         json.dump(data, f)

#     return data

# print(add_rel_data('/Users/macuser/Desktop/openaccrepo/blessedfruit/visualisations/maps/EL_17.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_17.csv',"relig_obv.geojson"))


# def viz_religion(csv_path,year):
#     df = read_csv(csv_path)
#     df_relig= df[df["TIPO_DATO_AVQ"] != '6_NEVER_RELIG']
#     return df_relig

# print(viz_religion('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_17.csv'))


# def add_pregnancy_data(json_file_path,csv_path,csv_path_absolute_values,new_json_path):
#     df=read_csv(csv_path)
#     df_absolute=read_csv(csv_path_absolute_values)

#     with open(json_file_path) as f:
#         data = json.load(f)

#     for feature in data["features"]:
#         properties = feature["properties"]
#         region= properties["name"]
#         # check if the Territory column in the dataframe matches the name property in the geojson
#         if region in df["Region"].values: 
                
#                 # access and add the new key-value pair to the properties

#                 pregnancy_percentage = df[df["Region"] == properties["name"]]["Total"].values[0]
#                 properties["pregnancy_percentage"] = pregnancy_percentage


#         if region in df_absolute["Region"].values:
#             pregnancy_total=df_absolute[df_absolute["Region"] == properties["name"]]["Total"].values[0]
#             properties["pregnancy_total"] = pregnancy_total



#     with open(new_json_path, "w") as f:
#         json.dump(data, f, default=converter)

#     return True

# print(add_pregnancy_data('relig_obv.geojson', '/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-PERC-2017.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-ASS-2017.csv','pregnancy_religion_17.geojson'))


def add_education(json_file_path,csv_path,new_json_path):
    df=read_csv(csv_path)
    df.loc[df["Region_GENERAL"] == "Valle D'Aosta/Vallée D'Aoste", "Region_GENERAL"] = "Valle D'Aosta / Vallée D'Aoste"
    df.loc[df["Region_GENERAL"] == "Trentino-Alto Adige/Südtirol", "Region_GENERAL"] = "Trentino Alto Adige / Südtirol"


    with open(json_file_path) as f:
        data = json.load(f)

    for feature in data["features"]:
        properties = feature["properties"]
        region= properties["name"]
        # check if the Territory column in the dataframe matches the name property in the geojson
        if region in df["Region_GENERAL"].values: 
                
            # access and add the new key-value pair to the properties

            #Total and female population
            total_population=df[df["Region_GENERAL"] == properties["name"]]["Population_GENERAL"].values[0]
            properties["total_population"] = total_population

            female_pop = df[df["Region_GENERAL"] == properties["name"]]["Population_FEMALE"].values[0]
            properties["female_pop"] = female_pop

            #Early leavers data
            female_early_leavers = df[df["Region_GENERAL"] == properties["name"]]["Female Early Leavers"].values[0]
            properties["female_early_leavers_absolute"] = female_early_leavers
            female_early_leavers_percentage = df[df["Region_GENERAL"] == properties["name"]]["Value"].values[0]
            properties["female_early_leavers_percentage"] = female_early_leavers_percentage

            #Other general variables important for the data
            properties["age-group"]= df["Age range_GENERAL"].values[0]
            properties["year"]=df["Time_GENERAL"].values[0]
            


    with open(new_json_path, "w") as f:
        json.dump(data, f, default=converter)

    return data


print(add_education('pregnancy_religion_17.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_17.csv','pregnancy_religion_education_17.geojson'))