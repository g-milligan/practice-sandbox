def run(theArray):
    res = majority = 0
    
    for n in theArray:
        if majority == 0:
            res = n
        
        majority += 1 if n == res else -1

    return res