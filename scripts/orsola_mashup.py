import csv
from pandas import *

# ==== MD1 ====

# For each region in the general population files
pop17 = read_csv("data/cleanDS/Population2017General_clean.csv")
# Consider no distinction in gender (drop "Males" and "Females")
pop17 = pop17.drop(pop17[(pop17.Sex == "Males") | (pop17.Sex == "Females")].index)
# Put together ages and sum value under column "Population"
pop17 = pop17.groupby(["Region code","Region"])["Population"].sum()

pop18 = read_csv("data/cleanDS/Population2018General_clean.csv")
pop18.drop("Males",axis=1,inplace=True)
print(pop18)
pop18 = pop18.groupby(["ITTER107","Region"])["Population"].sum()
print(pop18)

'''
pop17 = "data/cleanDS/Population2017General_clean.csv"

def getGeneralPopulation(path,rename):
    file = read_csv(path)
    # Delete gender distinctions
    if "Population2017" in path:
        # Delete gender distinctions
        file.drop(file[(file.Sex == "Males") | (file.Sex == "Females")].index)
        # Put together ages and sum value under column "Population"
        file = file.groupby(["Region code","Region"])["Population"].sum()
    else:
        file.drop(["Males_value"], axis=1, inplace=True)
        file = file.groupby(["ITTER107","Region"])["Population_value"].sum()



    # Create new clean CSV - undelete this line only if you want to RECREATE the cleaned csv file
    #file.to_csv("data/cleanDS/Population"+rename+".csv", index=False)
'''