import csv
from pandas import *
import functools as ft

# ==== MD1 ====

# GENERAL POPULATION FILES
pop17 = read_csv("data/cleanDS/Population2017General_clean.csv")
# Consider no distinction in gender (drop "Males" and "Females")
pop17 = pop17.drop(pop17[(pop17.Sex == "Males") | (pop17.Sex == "Females")].index)
# Put together ages and sum value under column "Population"
gen_pop17 = (pop17.groupby(["Region code","Region"])["Population"].sum()).reset_index()
gen_pop17["Time"] = 2017

def generalPop(path):
    file = read_csv(path)
    file.drop(["Males","Females"],axis=1,inplace=True)
    file = (file.groupby(["ITTER107","Region"])["Population"].sum()).reset_index()
    return file

pop18 = "data/cleanDS/Population2018General_clean.csv"
pop19 = "data/cleanDS/Population2019General_clean.csv"

gen_pop18 = generalPop(pop18)
gen_pop18["Time"] = 2018
gen_pop19 = generalPop(pop19)
gen_pop19["Time"] = 2019

d3_clean = read_csv("data/cleanDS/D3_clean.csv")

def getPercentage(num,pop):
    return num * 100 / pop

def addPercentageColumn(yearlyDF):
    for idx,row in yearlyDF.iterrows():
        perc = getPercentage((row["Value"]*1000),row["Population"])
        yearlyDF.loc[idx,"Percentage"] = perc
    return yearlyDF

def createYearlyDF(genPopList,rightDF):
    for item in genPopList:
        if item["Time"][0] == 2017:
            d3_2017 = rightDF.drop(rightDF[(rightDF.TIME == 2018) | (rightDF.TIME == 2019)].index)
            MD1_17 = (merge(item,d3_2017,left_on="Region code",right_on="ITTER107")).drop(["Territory","ITTER107","TIME"],axis=1)
            addPercentageColumn(MD1_17)
            #MD1_17.to_csv("data/mashupDS/MD1_17.csv")
        elif item["Time"][0] == 2018:
            d3_2018 = rightDF.drop(rightDF[(rightDF.TIME == 2017) | (rightDF.TIME == 2019)].index)
            MD1_18 = (merge(item,d3_2018,left_on="ITTER107",right_on="ITTER107")).drop(["Territory","TIME"],axis=1)
            addPercentageColumn(MD1_18)
            #MD1_18.to_csv("data/mashupDS/MD1_18.csv")
        elif item["Time"][0] == 2019:
            d3_2019 = rightDF.drop(rightDF[(rightDF.TIME == 2017) | (rightDF.TIME == 2018)].index)
            MD1_19 = (merge(item,d3_2019,left_on="ITTER107",right_on="ITTER107")).drop(["Territory","TIME"],axis=1)
            addPercentageColumn(MD1_19)
            print(MD1_19)
            #MD1_19.to_csv("data/mashupDS/MD1_19.csv")
    return        

createYearlyDF([gen_pop17,gen_pop18,gen_pop19],d3_clean)
        
'''
d3_2017 = d3_clean.drop(d3_clean[(d3_clean.TIME == 2018) | (d3_clean.TIME == 2019)].index)
MD1_17 = (merge(gen_pop17,d3_2017,left_on="Region code",right_on="ITTER107")).drop(["Territory","ITTER107","TIME"],axis=1)
MD1_17["Percentage"] = 0
for idx,row in MD1_17.iterrows():
    perc = getPercentage((row["Value"]*1000),row["Population"])
    MD1_17.loc[idx,"Percentage"] = perc
print(MD1_17)
'''
# -------------------------------------------------------------------------------------------------------------------------------

# ==== MD2 === #

# reading the datasets 

live_births = read_csv("../data/srcDS/D4Pregnancy/cleanedDS/cleanedD4-2017-Pregnancy.csv", keep_default_na=False,
            dtype= {
                "RESIDENCE_TERR":"string",
                "CITIZENSHIP_MOTHER": "string",
                "MOTHER_AGE" :"string",
                "OBS_VALUE" : "int64"
            })
miscarriages = read_csv("../data/srcDS/D5Pregnancy/cleanedDS/cleanedD5-2017-Pregnancy.csv", keep_default_na=False,
             dtype= {
                "Territorio":"string",
                "Classe di età": "string",
                "Value" : "int64"
            })
abortions = read_csv("../data/srcDS/D6Pregnancy/cleanedDS/cleanedD6-2017-Pregnancy.csv", keep_default_na=False,
             dtype= {
                "Territorio dell'evento":"string",
                "Età e classe di età": "string",
                "Value" : "int64"
            })

# aggregating age groups for LIVE BIRTHS

live_births = live_births.query("MOTHER_AGE != 'Y25'") 
live_births = live_births.query("RESIDENCE_TERR != 'ITD1'")
live_births = live_births.query("RESIDENCE_TERR != 'ITD2'") # create a df without data for Y25
live_births = live_births[["RESIDENCE_TERR", "OBS_VALUE"]] #take out the column with mother_age so I can sum all of the values per region
live_births = live_births.groupby("RESIDENCE_TERR", as_index=False).sum()


# create a dictionary to map every region ID with the Region's name
ID_name_dict = { "ITC1" : "Piemonte",
                "ITC2" : "Valle d'Aosta / Vallée d'Aoste",
                "ITC3" : "Liguria",
                "ITC4" : "Lombardia",
                "ITDA" : "Trentino Alto Adige / Südtirol",
                "ITD3" : "Veneto",
                "ITD4" : "Friuli-Venezia Giulia",
                "ITD5" : "Emilia-Romagna",
                "ITE1" : "Toscana",
                "ITE2" : "Umbria",
                "ITE3" : "Marche",
                "ITE4" : "Lazio",
                "ITF1" : "Abruzzo",
                "ITF2" : "Molise",
                "ITF3" : "Campania",
                "ITF4" : "Puglia",
                "ITF5" : "Basilicata",
                "ITF6" : "Calabria",
                "ITG1" : "Sicilia",
                "ITG2" : "Sardegna"
                }
i = 0
# add NL Region name to dataset

region_name = []

for idx, row in live_births.iterrows():
    region_name.append(ID_name_dict[live_births.at[idx, "RESIDENCE_TERR"]])

live_births["Region"] = region_name #maybe try inserting at idx 1 ??
live_births.rename(columns = {"RESIDENCE_TERR" : "ITTER107", "OBS_VALUE" : "Live_births"}, inplace=True)

# aggregating age groups for MISCARRIAGES
miscarriages = miscarriages[["Territorio", "Value"]]
miscarriages = miscarriages.groupby("Territorio", as_index=False).sum()

region_code = []
region_name = []

for key, value in ID_name_dict.items():
    region_name.append(value)
    region_code.append(key)

DF_ID_name = DataFrame({"ITTER107" : Series(region_code,  dtype="string"),  "Region": Series(region_name,  dtype="string")})

miscarriages = merge(DF_ID_name, miscarriages, left_on="Region", right_on="Territorio")

miscarriages.drop(["Territorio"], axis=1, inplace=True)
miscarriages.rename(columns = {"Value" : "Miscarriages"}, inplace=True)

# aggregating age groups for ABORTIONS

abortions = abortions[["Territorio dell'evento", "Value"]]
abortions = abortions.groupby("Territorio dell'evento", as_index=False).sum()

region_code = []
region_name = []

for key, value in ID_name_dict.items():
    region_name.append(value)
    region_code.append(key)

DF_ID_name = DataFrame({"ITTER107" : Series(region_code,  dtype="string"),  "Region": Series(region_name,  dtype="string")})
abortions = merge(DF_ID_name, abortions, left_on="Region", right_on="Territorio dell'evento")

abortions.drop(["Territorio dell'evento"], axis=1, inplace=True)
abortions.rename(columns = { "Value" : "Abortions"}, inplace=True)

PregnancyDS = merge(live_births, miscarriages, left_on= "ITTER107", right_on="ITTER107")
PregnancyDS = merge(PregnancyDS, abortions, left_on= "ITTER107", right_on="ITTER107", how="left") #how="left" is because I don'7 have lazio's value rn

total = PregnancyDS.sum(axis=1, numeric_only=True) # sums all pregnancies value per region
PregnancyDS["Total"] = total

PregnancyDS = PregnancyDS[["ITTER107", "Region", "Live_births", "Miscarriages", "Abortions", "Total"]]
PregnancyDS.to_csv("../data/mashupDS/PregnancyDS.csv", index=False)

# transform all absolute values in % values and save in separate DS

# SELECTED POPULATION FILES
sel_pop17 = read_csv("data/cleanDS/Population2017Selected_clean.csv")
# only keep "Females" column
sel_pop17 = sel_pop17.drop(sel_pop17[(sel_pop17.Sex == "Males") | (sel_pop17.Sex == "Total")].index)
# Put together ages and sum value under column "Population"
sel_pop17 = (sel_pop17.groupby(["Region code","Region"])["Population"].sum()).reset_index()
sel_pop17["Time"] = 2017
sel_pop17.rename(columns = {"Region code" : "ITTER107", "Population" : "Females"}, inplace=True)

def selectedPop(path):
    file = read_csv(path)
    file.drop(["Males","Population"],axis=1,inplace=True)
    file = (file.groupby(["ITTER107","Region"])["Females"].sum()).reset_index()
    return file    

pop18 = "data/cleanDS/Population2018Selected_clean.csv"
pop19 = "data/cleanDS/Population2019Selected_clean.csv"

sel_pop18 = selectedPop(pop18)
sel_pop18["Time"] = 2018
sel_pop19 = selectedPop(pop19)
sel_pop19["Time"] = 2019

#PERCENTAGES VALUES
def getPercentage(num,pop):
    return num * 100 / pop

Total_perc = []
Live_births_perc = []
Miscarriages_perc = []
Abortions_perc = []

def percentages(DStotal, DSpartial):
    mergedDF = merge(DStotal, DSpartial, left_on="ITTER107", right_on="ITTER107", how="left")
    mergedDF = mergedDF[["ITTER107", "Region_x", "Females", "Live_births", "Miscarriages", "Abortions", "Total"]]

    for idx, row in mergedDF.iterrows():
        year = str(DStotal.at[idx, "Time"])

        p_tot = getPercentage((mergedDF.at[idx, "Total"]), (mergedDF.at[idx, "Females"]))
        p_lb = getPercentage((mergedDF.at[idx, "Live_births"]), (mergedDF.at[idx, "Females"]))
        p_m = getPercentage((mergedDF.at[idx, "Miscarriages"]), (mergedDF.at[idx, "Females"]))
        p_a = getPercentage((mergedDF.at[idx, "Abortions"]), (mergedDF.at[idx, "Females"]))

        Total_perc.append(p_tot)
        Live_births_perc.append(p_lb)
        Miscarriages_perc.append(p_m)
        Abortions_perc.append(p_a)

    DSpartial["Live_births"] = Live_births_perc
    DSpartial["Miscarriages"] = Miscarriages_perc
    DSpartial["Abortions"] = Abortions_perc
    DSpartial["Total"] = Total_perc
    DSpartial["Time"] = year

    DSpartial.to_csv("data/mashupDS/MD2-PERC-" + year + ".csv", index=False)
    return True


DSpartial = read_csv("data/mashupDS/MD2-ASS-2019.csv", keep_default_na=False)

percentages(sel_pop19, DSpartial)

# -------------------------------------------------------------------------------------------------------------------------------
# ==== MD3 ====

# === A) TOTAL 18-24
# Get data for ages 18-24 from the general population datasets
def selectAge(df, age1, age2):
    df = df.drop(df[(df.Age == "100 and over") | (df.Age == "Total")].index)
    df["Age"] = df["Age"].astype('int')
    young_df = df.loc[(df["Age"] >= age1) & (df["Age"] <= age2)]
    return young_df


def young_generalPop(df, age1, age2):
    young_df = selectAge(df, age1, age2)
    young_df = (df.groupby(["ITTER107", "Region"])
                ["Population"].sum()).reset_index()
    return young_df


# --- 2017
pop17 = read_csv("data/cleanDS/Population2017General_clean.csv")
# Delete gender distinction
pop17 = pop17.drop(pop17[(pop17.Sex == "Males") |
                   (pop17.Sex == "Females")].index)
# Fixing the "Age" column (changing it to int values) to allow for a better condition for the creation of young_pop17
young_pop17 = selectAge(pop17, 18, 24)
young_pop17 = (pop17.groupby(["Region code", "Region"])[
               "Population"].sum()).reset_index()
# Adding columns for easier identification
young_pop17["Time"] = 2017
young_pop17["Age range"] = "18-24"

# --- 2018
pop18 = read_csv("data/cleanDS/Population2018General_clean.csv")
pop18.drop(["Males", "Females"], axis=1, inplace=True)
young_pop18 = young_generalPop(pop18, 18, 24)
young_pop18["Time"] = 2018
young_pop18["Age range"] = "18-24"

# --- 2019
pop19 = read_csv("data/cleanDS/Population2019General_clean.csv")
pop19.drop(["Males", "Females"], axis=1, inplace=True)
young_pop19 = young_generalPop(pop19, 18, 24)
young_pop19["Time"] = 2019
young_pop19["Age range"] = "18-24"


# === B) TOTAL 18-24 F
# Same as before, just DO NOT delete the gender distinction
# --- 2017
f_pop17 = read_csv("data/cleanDS/Population2017General_clean.csv")
f_pop17 = f_pop17.drop(
    f_pop17[(f_pop17.Sex == "Males") | (f_pop17.Sex == "Total")].index)
# Fixing the "Age" column (changing it to int values) to allow for a better condition for the creation of youngF_pop17
youngF_pop17 = selectAge(f_pop17, 18, 24)
youngF_pop17 = (f_pop17.groupby(["Region code", "Region"])[
                "Population"].sum()).reset_index()
# Adding columns for easier identification
youngF_pop17["Time"] = 2017
youngF_pop17["Age range"] = "18-24"
youngF_pop17["Gender"] = "Females"

# --- 2018
f_pop18 = read_csv("data/cleanDS/Population2018General_clean.csv")
youngF_pop18 = young_generalPop(f_pop18, 18, 24)
youngF_pop18["Time"] = 2018
youngF_pop18["Age range"] = "18-24"
youngF_pop18["Gender"] = "Females"

# --- 2019
f_pop19 = read_csv("data/cleanDS/Population2019General_clean.csv")
youngF_pop19 = young_generalPop(f_pop19, 18, 24)
youngF_pop19["Time"] = 2019
youngF_pop19["Age range"] = "18-24"
youngF_pop19["Gender"] = "Females"


# === C) % EARLY LEAVERS F (PROPORTION)
# --- 2017
d7_clean = read_csv("data/cleanDS/D7_clean.csv")
d7_2017 = d7_clean.drop(d7_clean[(d7_clean.TIME == 2018) | (d7_clean.TIME == 2019)].index)

MD3_2017 = (merge(young_pop17,d7_2017,left_on="Region code",right_on="ITTER107")).drop(["TIME","Territory"],axis=1)
MD3_2017 = (merge(youngF_pop17,MD3_2017,left_on="Region code",right_on="ITTER107",suffixes=('_GENERAL','_FEMALE'))).drop(["Time_FEMALE","Age range_FEMALE","ITTER107","Region code_FEMALE","Region_FEMALE"],axis=1)
for idx,row in MD3_2017.iterrows():
    result = (row["Value"] * row["Population_FEMALE"])/(row["Population_GENERAL"])
    MD3_2017.loc[idx,"Female Early Leavers"] = result
#MD3_2017.to_csv("data/mashupDS/MD3_17.csv")

# row["Value"] : row["Population_GENERAL"] = % early leavers F : row["Population_FEMALE"]

# --- 2018
d7_2018 = d7_clean.drop(d7_clean[(d7_clean.TIME == 2017) | (d7_clean.TIME == 2019)].index)

MD3_2018 = (merge(young_pop18,d7_2018,left_on="ITTER107",right_on="ITTER107")).drop(["TIME","Territory"],axis=1)
MD3_2018 = (merge(youngF_pop18,MD3_2018,left_on="ITTER107",right_on="ITTER107",suffixes=('_GENERAL','_FEMALE'))).drop(["Time_FEMALE","Age range_FEMALE","Region_FEMALE"],axis=1)
for idx,row in MD3_2018.iterrows():
    result = (row["Value"] * row["Population_FEMALE"])/(row["Population_GENERAL"])
    MD3_2018.loc[idx,"Female Early Leavers"] = result
#MD3_2018.to_csv("data/mashupDS/MD3_18.csv")


# --- 2019
d7_2019 = d7_clean.drop(d7_clean[(d7_clean.TIME == 2017) | (d7_clean.TIME == 2018)].index)
MD3_2019 = (merge(young_pop19,d7_2019,left_on="ITTER107",right_on="ITTER107")).drop(["TIME","Territory"],axis=1)
MD3_2019 = (merge(youngF_pop19,MD3_2019,left_on="ITTER107",right_on="ITTER107",suffixes=('_GENERAL','_FEMALE'))).drop(["Time_FEMALE","Age range_FEMALE","Region_FEMALE"],axis=1)
for idx,row in MD3_2019.iterrows():
    result = (row["Value"] * row["Population_FEMALE"])/(row["Population_GENERAL"])
    MD3_2019.loc[idx,"Female Early Leavers"] = result
#MD3_2019.to_csv("data/mashupDS/MD3_19.csv")

# -------------------------------------------------------------------------------------------------------------------------------