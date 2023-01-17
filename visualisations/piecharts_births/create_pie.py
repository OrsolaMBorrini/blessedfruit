
import plotly.express as px
import os
from pandas import *

def create_piecharts_birth(csv_path,year):
    df = read_csv(csv_path)
    path= "pregnancies_" + str(year)

    os.makedirs(path,exist_ok=True)

    for i, row in df.iterrows():
        data = [row['Live_births'], row['Miscarriages'], row['Abortions']]
        labels = ['Live_births', 'Miscarriages', 'Abortions']
        title = 'Pregnancies in ' + row['Region'] + " in "+ str(year)
        fig = px.pie(values=data, names=labels, title=title,color_discrete_sequence=px.colors.sequential.RdBu)

        file_name= row['Region']+ "_" + str(year) + ".html"
        save=os.path.join(path,file_name.replace("/", '-'))
        fig.write_html(save)
    
    return True

print(create_piecharts_birth('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-ASS-2018.csv',2017))
print(create_piecharts_birth('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-ASS-2018.csv',2018))
print(create_piecharts_birth('/Users/macuser/Desktop/openaccrepo/blessedfruit/data/mashupDS/MD2-ASS-2019.csv',2019))
