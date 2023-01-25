from pandas import *
import json
import numpy as np

# print(rel_17)



#CLEANING AND STANDARDIZING


def viz_religion(csv_path,new_path):
    df = read_csv(csv_path)
    #clean and 
    df.loc[df["Region"] == "Valle D'Aosta/Vallée D'Aoste", "Region"] = "Valle d'Aosta / Vallée d'Aoste"
    df.loc[df["Region"] == "Trentino-Alto Adige/Südtirol", "Region"] = "Trentino Alto Adige / Südtirol"

    #remove the values for non-church goers
    df_relig= df[df["TIPO_DATO_AVQ"] != '6_NEVER_RELIG']
    
    df_relig.to_csv(new_path)
    return df_relig

# #print(viz_religion('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_17.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD_17_religion.csv'))
# print(viz_religion('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_18.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_18_religion.csv'))
# print(viz_religion('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_19.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_19_religion.csv'))
from pandas import *
import scipy
from scipy import stats
def standardize_all(md1,md2,md3,path):
    df1=read_csv(md1)
    df2=read_csv(md2)
    df3=read_csv(md3)

    df3.rename(columns={"Region_GENERAL":"Region"}, inplace=True)

    for index, row in df1.iterrows():
        if row['Region'] in ["Valle D'Aosta/Vallée D'Aoste", "Valle D'Aosta / Vallée D'Aoste"]:
            df1.at[index, 'Region'] = "Valle d'Aosta / Vallée d'Aoste"

    for index, row in df2.iterrows():
        if row['Region'] in ["Valle D'Aosta/Vallée D'Aoste", "Valle D'Aosta / Vallée D'Aoste"]:
            df2.at[index, 'Region'] = "Valle d'Aosta / Vallée d'Aoste"

    for index, row in df3.iterrows():
        if row['Region'] in ["Valle D'Aosta/Vallée D'Aoste", "Valle D'Aosta / Vallée D'Aoste"]:
            df3.at[index, 'Region'] = "Valle d'Aosta / Vallée D'Aoste"

    df3.rename(columns={"Region code_GENERAL": "ITTER107"}, inplace=True)


    # df1.loc[df1["Region"] == "Valle D'Aosta/Vallée D'Aoste", "Region"] = "Valle D'Aosta / Vallée D'Aoste"
    df1.loc[df1["Region"] == "Trentino-Alto Adige/Südtirol", "Region"] = "Trentino Alto Adige / Südtirol"

    
    # df3.loc[df3["Region"] == "Valle D'Aosta/Vallée D'Aoste", "Region"] = "Valle D'Aosta / Vallée D'Aoste"
    df3.loc[df3["Region"] == "Trentino-Alto Adige/Südtirol", "Region"] = "Trentino Alto Adige / Südtirol"
    merged_df = merge(df1, df2, on="ITTER107")
    final_df= merge(merged_df, df3, on="ITTER107")

    final_df=final_df[["ITTER107", 'Region', 'Population_x', 'Time_x', 'Percentage','Live_births', 'Miscarriages', 'Abortions', 'Total', 'Female Early Leavers']]
    final_df.rename(columns={'Time_x': 'Time', 'Population_x': 'Population', 'Total': 'Total_Pregnancies', 'Percentage':'Religious_observation'}, inplace=True)

    #make sure all numeric values have numeric type to prevent missing values after merge

    final_df=final_df.astype({'Population':float, 'Time':float, 'Religious_observation':float,'Live_births':float, 'Miscarriages':float, 'Abortions':float, 'Total_Pregnancies':float, 'Female Early Leavers':float})

    #there is a nan showing up, let's fix by giving it the mean value
    final_df['Female Early Leavers'].fillna(final_df['Female Early Leavers'].mean(), inplace=True)
    final_df['Total_Pregnancies'].fillna(final_df['Total_Pregnancies'].mean(), inplace=True)
    final_df['Religious_observation'].fillna(final_df['Religious_observation'].mean(), inplace=True)

    final_df['Female Early Leavers'] = stats.zscore(final_df['Female Early Leavers'])
    final_df['Total_Pregnancies'] = stats.zscore(final_df['Total_Pregnancies'])
    final_df['Religious_observation'] = stats.zscore(final_df['Religious_observation'])


    final_df.to_csv(path)

    return True


print(standardize_all('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD_17_religion.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2_17.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_17.csv','standardized_edit17.csv'))

print(standardize_all('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_18_religion.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2_18.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_18.csv','standardized_edit18.csv'))
print(standardize_all('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_19_religion.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2_19.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_19.csv','standardized_edit19.csv'))



def converter(o):
    if isinstance(o, np.int64): return int(o)  
    if isinstance(o, np.float64): return float(o)
    raise TypeError








import os

from pandas import *
import json
import numpy as np



def add_rel_data(json_file_path,csv_path,new_json_path):
    df=read_csv(csv_path)

    df.loc[df["Region"] == "Valle D'Aosta/Vallée D'Aoste", "Region"] = "Valle d'Aosta / Vallée d'Aoste"
    df.loc[df["Region"] == "Trentino-Alto Adige/Südtirol", "Region"] = "Trentino Alto Adige / Südtirol"

    for index, row in df.iterrows():
        if row['Region'] in ["Valle D'Aosta/Vallée D'Aoste", "Valle d'Aosta/Vallée d'Aoste", "Valle D'Aosta / Vallée D'Aoste"]:
            df.at[index, 'Region'] = "Valle d'Aosta / Vallée d'Aoste"


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
    return True




def add_pregnancy_data(json_file_path,csv_path,csv_path_absolute_values,new_json_path):
    df=read_csv(csv_path)
    df_absolute=read_csv(csv_path_absolute_values)

    with open(json_file_path) as f:
        data = json.load(f)

    for feature in data["features"]:
        properties = feature["properties"]
        region= properties["name"]
        # check if the Territory column in the dataframe matches the name property in the geojson
        if region in df["Region"].values: 
                
                # access and add the new key-value pair to the properties

                pregnancy_percentage = df[df["Region"] == properties["name"]]["Total"].values[0]
                properties["pregnancy_percentage"] = pregnancy_percentage

        if region in df_absolute["Region"].values:
            pregnancy_total=df_absolute[df_absolute["Region"] == properties["name"]]["Total"].values[0]
            properties["pregnancy_total"] = pregnancy_total

    with open(new_json_path, "w") as f:
        json.dump(data, f, default=converter)

    return True



def add_education(json_file_path,csv_path,new_json_path):
    df=read_csv(csv_path)
    df.loc[df["Region_GENERAL"] == "Valle D'Aosta/Vallée D'Aoste", "Region_GENERAL"] = "Valle d'Aosta / Vallée d'Aoste"
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
            total_population=df[df["Region_GENERAL"] == properties["name"]]["Population"].values[0]
            properties["total_population"] = total_population

            female_pop = df[df["Region_GENERAL"] == properties["name"]]["Females"].values[0]
            properties["female_pop"] = female_pop

            #Early leavers data
            female_early_leavers_percentage = df[df["Region_GENERAL"] == properties["name"]]["Female Early Leavers"].values[0]
            properties["female_early_leavers_percentage"] = female_early_leavers_percentage
            female_early_leavers_value = df[df["Region_GENERAL"] == properties["name"]]["Value"].values[0]
            properties["female_early_leavers_value"] = female_early_leavers_value

            #Other general variables important for the data
            properties["age-group"]= df["Age range_GENERAL"].values[0]
            properties["year"]=df["Time_GENERAL"].values[0]
            

    import os
    path= 'visualisations/scripts/map_edit'+ str(df["Time_GENERAL"].values[0])
    os.makedirs(path,exist_ok=True)
    save = os.path.join(path,new_json_path)

    with open(save, "w") as f:
        json.dump(data, f, default=converter)

    return True



#Run for 2017


print(add_rel_data('visualisations/scripts/italy-with-regions_1458.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_17.csv','visualisations/scripts/relig_obv_17.geojson'))
print(add_pregnancy_data('visualisations/scripts/relig_obv_17.geojson', '/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2_17.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-ASS-2017.csv','visualisations/scripts/pregnancy_religion_17.geojson'))
print(add_education('visualisations/scripts/pregnancy_religion_17.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_17.csv','pregnancy_religion_education_17.geojson'))


# #Let's do the same for 2018

print(add_rel_data('visualisations/scripts/italy-with-regions_1458.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_18.csv',"visualisations/scripts/relig_obv_18.geojson"))
print(add_pregnancy_data('visualisations/scripts/relig_obv_18.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2_18.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-ASS-2018.csv','visualisations/scripts/pregnancy_religion_18.geojson'))
print(add_education('visualisations/scripts/pregnancy_religion_18.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_18.csv','pregnancy_religion_education_18.geojson'))



# #Let's do the same for 2019

print(add_rel_data('visualisations/scripts/italy-with-regions_1458.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_19.csv',"visualisations/scripts/relig_obv_19.geojson"))
print(add_pregnancy_data('visualisations/scripts/relig_obv_19.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2_19.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-ASS-2019.csv','visualisations/scripts/pregnancy_religion_19.geojson'))
print(add_education('visualisations/scripts/pregnancy_religion_19.geojson','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_19.csv','pregnancy_religion_education_19.geojson'))