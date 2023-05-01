import json
import math
import os

class AutoDict(dict):
    def __missing__(self, key):
        x = AutoDict()
        self[key] = x
        return x

final_data = {}

count = 0

directory = 'D:/College/SEM 6/PE/nyt_crosswords-master/nyt_crosswords-master'
for root, dirs, files in os.walk(directory):
    for name in files:
        if name.endswith((".json")):
                f = open(root+'/'+name,)
                print(root+'/'+name)
                try:
                    data = json.load(f)
                except:
                    continue
                
                across = data['answers']['across'] #stores the across words
                down = data['answers']['down'] #stores the down words

                across_num = [] #stores the number of the across
                down_num = [] #stores the number of the down

                for i in data['clues']['across']:
                    integer = int(i.split(".")[0])
                    across_num.append(integer)

                for i in data['clues']['down']:
                    integer = int(i.split(".")[0])
                    down_num.append(integer)

                grid_num = data['gridnums'] #stores the starting position of any number

                val = len(grid_num)

                data = AutoDict()
                dim = math.sqrt(val)

                j = 0

                for i in range(len(across)):
                    while grid_num[j] != across_num[i] :
                        j+=1
                    row = (int)(j/dim)
                    col = int(j - (row*dim))
                    data["across"][str(across_num[i])]["answer"] = across[i]
                    data["across"][str(across_num[i])]["row"] = row+1
                    data["across"][str(across_num[i])]["col"] = col+1


                j=0
                for i in range(len(down)):
                    while grid_num[j] != down_num[i]:
                        j+=1
                    row = (int)(j/dim)
                    col = int(j - (row*dim))
                    data["down"][str(down_num[i])]["answer"] = down[i]
                    data["down"][str(down_num[i])]["row"] = row+1
                    data["down"][str(down_num[i])]["col"] = col+1

                final_data[count] = data
                count+=1
                f.close()
        
f = open("dict.txt","w")
listt = final_data.values()

with open("file.txt", "w") as output:
    output.write(str(listt))
