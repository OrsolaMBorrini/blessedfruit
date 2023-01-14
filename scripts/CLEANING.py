# there's some error in the path

from pandas import *
import os
import sys
import pprint

# ==== D1
# Change regions code to ITTER107 code (istat standard)

general_2017 = "data/srcDS/Population/General/2017General.csv"
selected_2017 = "data/srcDS/Population/Selected/D1-D2Population2017.csv"

def replaceRcode(path,rename):
    file = read_csv(path)
    for idx,row in file.iterrows():
        reg_code = row["Region code"]
        if reg_code == 1:    # Piemonte
            file.loc[idx, "Region code"] = "ITC1"
        elif reg_code == 2:  # Valle d'Aosta
            file.loc[idx, "Region code"] = "ITC2"
        elif reg_code == 3:  # Lombardia
            file.loc[idx, "Region code"] = "ITC4"
        elif reg_code == 4:  # Trentino-Alto Adige
            file.loc[idx, "Region code"] = "ITDA"
        elif reg_code == 5:  # Veneto
            file.loc[idx, "Region code"] = "ITD3"
        elif reg_code == 6:  # Friuli-Venezia Giulia
            file.loc[idx, "Region code"] = "ITD4"
        elif reg_code == 7:  # Liguria
            file.loc[idx, "Region code"] = "ITC3"
        elif reg_code == 8:  # Emilia-Romagna
            file.loc[idx, "Region code"] = "ITD5"
        elif reg_code == 9:  # Toscana
            file.loc[idx, "Region code"] = "ITE1"
        elif reg_code == 10:  # Umbria
            file.loc[idx, "Region code"] = "ITE2"
        elif reg_code == 11:  # Marche
            file.loc[idx, "Region code"] = "ITE3"
        elif reg_code == 12:  # Lazio
            file.loc[idx, "Region code"] = "ITE4"
        elif reg_code == 13:  # Abruzzo
            file.loc[idx, "Region code"] = "ITF1"
        elif reg_code == 14:  # Molise
            file.loc[idx, "Region code"] = "ITF2"
        elif reg_code == 15:  # Campania
            file.loc[idx, "Region code"] = "ITF3"
        elif reg_code == 16:  # Puglia
            file.loc[idx, "Region code"] = "ITF4"
        elif reg_code == 17:  # Basilicata
            file.loc[idx, "Region code"] = "ITF5"
        elif reg_code == 18:  # Calabria
            file.loc[idx, "Region code"] = "ITF6"
        elif reg_code == 19:  # Sicilia
            file.loc[idx, "Region code"] = "ITG1"
        elif reg_code == 20:  # Sardegna
            file.loc[idx, "Region code"] = "ITG2"
    
    # Create new clean CSV - undelete this line only if you want to RECREATE the cleaned csv file
    #file.to_csv("data/cleanDS/Population"+rename+".csv", index=False)

replaceRcode(general_2017,"2017General_clean")
replaceRcode(selected_2017,"2017Selected_clean")

# ==== D3
d3 = read_csv("data/srcDS/D3.csv")
# Dropping the columns with data in NL for clarity (we can also drop the 'MISURA_AVQ' column, knowing that we are talking of thousands value)
d3.drop(["Data type","MISURA_AVQ","Measure","Select time","Flag Codes","Flags"], axis=1, inplace=True)
# Create new clean CSV for D3 - undelete this line only if you want to RECREATE the cleaned csv file
#d3.to_csv("data/cleanDS/D3_clean.csv", index=False)


# D4
import os, sys 
import pprint

os.getcwd() # print this to get current working directory to check which is the correct path. In my working environmet for some reason i am in "blessedfruit"

path = "data/srcDS/D4Pregnancy/"
dir = os.listdir(path)

for file in dir:
    if file[-4:] == ".csv":
        csvName = str(file)
        pregnancy = read_csv(path+csvName, keep_default_na=False)
        pregnancy = pregnancy[["RESIDENCE_TERR","CITIZENSHIP_MOTHER", "MOTHER_AGE", "OBS_VALUE"]]
        pregnancy.to_csv("data/srcDS/D4Pregnancy/cleanedDS/cleaned" + csvName,index=False) #cleaned needs to be put in the front or it will invalidate file format

print(pregnancy) 
        
# ==== D5
path = "data/srcDS/D5Pregnancy/"
dir = os.listdir(path)

for file in dir:
    if file[-4:] == ".csv":
        csvName = str(file)
        pregnancy = read_csv(path+csvName, keep_default_na=False)
        pregnancy = pregnancy[["Territorio","Classe di età", "Value"]]
        pregnancy.to_csv("data/srcDS/D5Pregnancy/cleanedDS/cleaned" + csvName,index=False) #cleaned needs to be put in the front or it will invalidate file format
        
print(pregnancy) 

# D6
path = "data/srcDS/D6Pregnancy/"
# ==== D6
path = "data/srcDS/D6Pregnancy/"
dir = os.listdir(path)

for file in dir:
    if file[-4:] == ".csv":
        csvName = str(file)
        pregnancy = read_csv(path+csvName, keep_default_na=False)
        pregnancy = pregnancy[["Territorio dell'evento", "Età e classe di età", "Value"]]
        pregnancy.to_csv("data/srcDS/D6Pregnancy/cleanedDS/cleaned" + csvName,index=False) #cleaned needs to be put in the front or it will invalidate file format
              
    
print(pregnancy)
