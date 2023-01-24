import csv
from pandas import *


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

def young_femalePop(df, age1, age2):
    young_Fdf = selectAge(df, age1, age2)
    young_Fdf = (df.groupby(["ITTER107", "Region"])
                ["Females"].sum()).reset_index()
    return young_Fdf


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
f_pop17 = f_pop17.drop(f_pop17[(f_pop17.Sex == "Males") | (f_pop17.Sex == "Total")].index)
# Fixing the "Age" column (changing it to int values) to allow for a better condition for the creation of youngF_pop17
youngF_pop17 = selectAge(f_pop17, 18, 24)
youngF_pop17 = (f_pop17.groupby(["Region code", "Region"])["Population"].sum()).reset_index()
# Adding columns for easier identification
youngF_pop17["Time"] = 2017
youngF_pop17["Age range"] = "18-24"
youngF_pop17["Gender"] = "Females"

# --- 2018
f_pop18 = read_csv("data/cleanDS/Population2018General_clean.csv")
f_pop18.drop(["Males", "Population"], axis=1, inplace=True)
youngF_pop18 = young_femalePop(f_pop18, 18, 24)
youngF_pop18["Time"] = 2018
youngF_pop18["Age range"] = "18-24"

# --- 2019
f_pop19 = read_csv("data/cleanDS/Population2019General_clean.csv")
youngF_pop19 = young_femalePop(f_pop19, 18, 24)
youngF_pop19["Time"] = 2019
youngF_pop19["Age range"] = "18-24"


# === C) % EARLY LEAVERS F (PROPORTION)
# --- 2017
d7_clean = read_csv("data/cleanDS/D7_clean.csv")
d7_2017 = d7_clean.drop(d7_clean[(d7_clean.TIME == 2018) | (d7_clean.TIME == 2019)].index)

MD3_2017 = (merge(young_pop17,d7_2017,left_on="Region code",right_on="ITTER107")).drop(["TIME","Territory"],axis=1)
MD3_2017 = (merge(MD3_2017,youngF_pop17,left_on="ITTER107",right_on="Region code",suffixes=('_GENERAL','_FEMALE'))).drop(["Time_FEMALE","Age range_FEMALE","ITTER107","Region code_FEMALE","Region_FEMALE"],axis=1)
for idx,row in MD3_2017.iterrows():
    result = (row["Value"] * row["Population_FEMALE"])/(row["Population_GENERAL"])
    MD3_2017.loc[idx,"Female Early Leavers"] = result

MD3_2017.to_csv("data/mashupDS/MD3_17.csv")

# row["Value"] : row["Population_GENERAL"] = % early leavers F : row["Population_FEMALE"]

# --- 2018
d7_2018 = d7_clean.drop(d7_clean[(d7_clean.TIME == 2017) | (d7_clean.TIME == 2019)].index)

MD3_2018 = (merge(young_pop18,d7_2018,left_on="ITTER107",right_on="ITTER107")).drop(["TIME","Territory"],axis=1)
MD3_2018 = (merge(youngF_pop18,MD3_2018,left_on="ITTER107",right_on="ITTER107",suffixes=('_GENERAL','_FEMALE'))).drop(["Time_FEMALE","Age range_FEMALE","Region_FEMALE"],axis=1)

for idx,row in MD3_2018.iterrows():
    result = (row["Value"] * row["Females"])/(row["Population"])
    MD3_2018.loc[idx,"Female Early Leavers"] = result
MD3_2018.to_csv("data/mashupDS/MD3_18.csv")

# --- 2019
d7_2019 = d7_clean.drop(d7_clean[(d7_clean.TIME == 2017) | (d7_clean.TIME == 2018)].index)
MD3_2019 = (merge(young_pop19,d7_2019,left_on="ITTER107",right_on="ITTER107")).drop(["TIME","Territory"],axis=1)
MD3_2019 = (merge(youngF_pop19,MD3_2019,left_on="ITTER107",right_on="ITTER107",suffixes=('_GENERAL','_FEMALE'))).drop(["Time_FEMALE","Age range_FEMALE","Region_FEMALE"],axis=1)
for idx,row in MD3_2019.iterrows():
    result = (row["Value"] * row["Females"])/(row["Population"])
    MD3_2019.loc[idx,"Female Early Leavers"] = result
MD3_2019.to_csv("data/mashupDS/MD3_19.csv")

# -------------------------------------------------------------------------------------------------------------------------------