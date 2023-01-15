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
print(type(gen_pop17))

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
