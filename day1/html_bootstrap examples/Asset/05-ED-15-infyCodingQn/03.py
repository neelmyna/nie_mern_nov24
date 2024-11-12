wordNumPairsInStr='rhdt:246,ghftd:1246'
print(wordNumPairsInStr)
for wordNumInList in [wordNumPairStr.split(':') for wordNumPairStr in wordNumPairsInStr.split(',')]:
    word = wordNumInList[0]
    num = wordNumInList[1]
    digitSum = sum([int(digit)**2 for digit in num])
    rotateLeft = lambda word,offset:word[offset:] + word[:offset]
    rotateRight= lambda word,offset:word[-offset:]+ word[:-offset]
    print(rotateRight(word,1) if digitSum%2==0 else rotateLeft(word,2))
    
