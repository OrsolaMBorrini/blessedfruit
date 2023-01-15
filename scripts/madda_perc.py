from pandas import *
import os

print(os.getcwd())

path = "data/mashupDS/"
dir = os.listdir(path)

for file in dir:
    if file[-4:] == ".csv":
        
        md2_thv = read_csv(path+file, keep_default_na=False)
    