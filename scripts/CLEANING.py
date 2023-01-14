from pandas import *

# D1
# Change regions code to ITTER107 code (istat standard)



# D3



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
        
# D5
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
dir = os.listdir(path)

for file in dir:
    if file[-4:] == ".csv":
        csvName = str(file)
        pregnancy = read_csv(path+csvName, keep_default_na=False)
        pregnancy = pregnancy[["Territorio dell'evento", "Età e classe di età", "Value"]]
        pregnancy.to_csv("data/srcDS/D6Pregnancy/cleanedDS/cleaned" + csvName,index=False) #cleaned needs to be put in the front or it will invalidate file format
              
    
print(pregnancy)