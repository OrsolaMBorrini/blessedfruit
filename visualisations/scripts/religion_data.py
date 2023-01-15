from pandas import *
import json

# print(rel_17)





def add_rel_data(json_file_path,csv_path,new_json_path):
    df=read_csv(csv_path)

    with open(json_file_path) as f:
        data = json.load(f)

    for feature in data["features"]:
        properties = feature["properties"]
        region= properties["name"]
        # check if the Territory column in the dataframe matches the name property in the geojson
        if region in df["Region"].values: 
                
                # access and add the new key-value pair to the properties
                rel_no= df.loc[(df['TIPO_DATO_AVQ'] == '6_NEVER_RELIG') & (df['Region'] == region), 'Percentage'].values[0]
                properties["relig_no"] = rel_no
                rel_yes=df.loc[(df['TIPO_DATO_AVQ'] == '6_WEEK_RELIG') & (df['Region'] == region), 'Percentage'].values[0]
                properties["relig_yes"] = rel_yes


    with open(new_json_path, "w") as f:
        json.dump(data, f)

    return data

print(add_rel_data('/Users/macuser/Desktop/openaccrepo/blessedfruit/visualisations/maps/EL_17.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_17.csv',"relig_obv.geojson"))