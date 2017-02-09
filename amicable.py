def isAmi(s1,s2,n1,n2):#creates a function that prints if the user inputed numbers are amicable or not
    if (s1==n2 and s2==n1):
        print ("Your numbers are amicable\n")
    else:
        print ("Your numbers are not amicable\n")
    return
def buildA(n):#creates a function that figures out the factors of the user inputed number
    i=1
    na=[]#array to store all remainders that are factors of the user-entered number
    while(i<n):#since you cannot use the user-entered number as a factor, this just loops until it is one less than the number
        if(n%i==0):#if remainder is 0, the i value is stored into the array
            na.append(i)
            i=i+1#adds to variable i so it does not keep looping
        else:
            i=i+1
    return na
close=1#This and -------------->
while (close != "stop"):#---------->this is a while loop that loops the program over
    num1=input("\nPlease type the first number: ")#asks user for 1st and 2nd number
    num2=input("\nPlease type the second number: ")
    n1a=[]#creates an array for 1st user-entered number
    n2a=[]#creates an array for 2nd user-entered number
    n1a=buildA(num1)#calls function BuildA for number 1
    n2a=buildA(num2)#calls function BuildA for number 2
    print("\nYour factors for %s are:")% (num1)#Lists the factors of the 1st user-entered number
    b=map(str, n1a)#allows me to print array for the first number--->
    print (",".join(b))#------------------------------------------------> without the brackets and spaced with commas
    print #new line makes things look neat
    print("Your factors for %s are:")% (num2)#lists the factors of 2nd user-entered number
    c=map(str, n2a)#allows me to print array for the second number--->
    print (",".join(c))#------------------------------------------------> without the brackets and spaced with commas
    n1s= sum(n1a)#finds the sum of all factors in array 1
    n2s= sum(n2a)#finds the sum of all factors in array 2
    print#new line
    print ("The sum of all factors of %s are: %s\n")% (num1, n1s)#shows user the sum of all factors
    print ("The sum of all factors of %s are: %s\n")% (num2, n2s)
    isAmi(n1s,n2s,num1,num2)#runs function isAmi()
    close=raw_input("Press any key to start over, or type \"stop\" to exit: ")#asks user if they want to try again
