#df for each year with all regions

#for each year merge variables and add a column for each year

#merge all 3 datasets

#standardize?
#the pregnancy one will need to be an entire different viz so in case we can add different parameters

from pandas import *

def viz_time_series(md1,md2,md3,path):
    df1=read_csv(md1)
    df2=read_csv(md2)
    df3=read_csv(md3)

    #cleaning part

    df3.rename(columns={"Region_GENERAL":"Region"}, inplace=True)

    for index, row in df1.iterrows():
        if row['Region'] in ["Valle D'Aosta/Vallée D'Aoste", "Valle d'Aosta/Vallée d'Aoste"]:
            df1.at[index, 'Region'] = "Valle d'Aosta / Vallée d'Aoste"

    for index, row in df2.iterrows():
        if row['Region'] in ["Valle D'Aosta/Vallée D'Aoste", "Valle d'Aosta/Vallée d'Aoste"]:
            df2.at[index, 'Region'] = "Valle d'Aosta / Vallée d'Aoste"

    for index, row in df3.iterrows():
        if row['Region'] in ["Valle D'Aosta/Vallée D'Aoste", "Valle d'Aosta/Vallée d'Aoste"]:
            df3.at[index, 'Region'] = "Valle d'Aosta / Vallée d'Aoste"


    # df1.loc[df1["Region"] == "Valle D'Aosta/Vallée D'Aoste", "Region"] = "Valle D'Aosta / Vallée D'Aoste"
    df1.loc[df1["Region"] == "Trentino-Alto Adige/Südtirol", "Region"] = "Trentino Alto Adige / Südtirol"

    
    # df3.loc[df3["Region"] == "Valle D'Aosta/Vallée D'Aoste", "Region"] = "Valle D'Aosta / Vallée D'Aoste"
    df3.loc[df3["Region"] == "Trentino-Alto Adige/Südtirol", "Region"] = "Trentino Alto Adige / Südtirol"

    df_list = [df1,df2,df3]


    for dframe in df_list:
        for col in dframe.columns:
            if col=="ITTER107":
                dframe.rename(columns={col:"Region code"}, inplace=True)

            if col=="Region code_GENERAL":
                dframe.rename(columns={col:"Region code"}, inplace=True)

            
            if col=="Time_GENERAL":
                dframe.rename(columns={col:"Time"}, inplace=True)

                
    merged_df = merge(df1, df2, on="Region code")
    final_df= merge(merged_df, df3, on="Region code")
    
    final_df.to_csv(path)

    return path

print(viz_time_series('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD_17_religion.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-PERC-2017.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_17.csv','full_df_17.csv'))

def merge_datasets(path):
    year_17=viz_time_series('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD_17_religion.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-PERC-2017.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_17.csv','full_df_17.csv')
    year_18=viz_time_series('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_18_religion.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-PERC-2018.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_18.csv','full_df_18.csv')
    year_19=viz_time_series('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD1_19_religion.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-PERC-2019.csv','/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD3_19.csv','full_df_19.csv')

    df1=read_csv(year_17)
    df2=read_csv(year_18)
    df3=read_csv(year_19)
    df_17_18=concat([df1,df2], ignore_index=True)
    df_full=concat([df_17_18,df3], ignore_index=True)
    df_full=df_full[["Region code","Region_x","Population","TIPO_DATO_AVQ","Percentage","Live_births","Miscarriages","Abortions","Total","Time","Age range_GENERAL","Gender","Population_FEMALE","Value_y","Female Early Leavers"]]
    df_full.rename(columns={"Region_x":"Region", "Percentage":"Religious observation","Value_y":"Early leavers absolute value"}, inplace=True)
    df_full=df_full.astype({"Time":int,"Religious observation":float, "Early leavers absolute value":float, "Female Early Leavers":float})

    df_full.to_csv(path)
    return df_full


print(merge_datasets("full_time_series_1.csv"))