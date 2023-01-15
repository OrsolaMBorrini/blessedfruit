import json
import pandas
def add_data_to_json(json_file_path, dataframe):

    df_dict=dataframe.to_dict('index')
    # load the GeoJSON file
    with open(json_file_path) as f:
        data = json.load(f)

    for feature in data["features"]:
        properties = feature["properties"]
        # add a new key-value pair to the properties
        for index in df_dict:
            region_info=index["Territory"]
            if index["Territory"]==properties["name"]:
                properties["value"] = region_info["Value"]

    # write the updated GeoJSON back to the file
    with open(json_file_path, "w") as f:
        json.dump(data, f)

    return data

