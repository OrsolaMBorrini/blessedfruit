import csv
from pandas import *

# ==== MD1 ====

# GENERAL POPULATION FILES
pop17 = read_csv("data/cleanDS/Population2017General_clean.csv")
# Consider no distinction in gender (drop "Males" and "Females")
pop17 = pop17.drop(pop17[(pop17.Sex == "Males") | (pop17.Sex == "Females")].index)
# Put together ages and sum value under column "Population"
gen_pop17 = (pop17.groupby(["Region code","Region"])["Population"].sum()).to_frame()


def generalPop(path):
    file = read_csv(path)
    file.drop(["Males","Females"],axis=1,inplace=True)
    file = (file.groupby(["ITTER107","Region"])["Population"].sum()).to_frame()
    return file

pop18 = "data/cleanDS/Population2018General_clean.csv"
pop19 = "data/cleanDS/Population2019General_clean.csv"

gen_pop18 = generalPop(pop18)
gen_pop19 = generalPop(pop19)

d3_clean = read_csv("data/cleanDS/D3_clean.csv")


# md1 = merge


# Use PERCENTAGE FUNCTION
