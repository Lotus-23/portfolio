import  random
# Aqui agrega las palabras posibles
palabras = ["rinoceronte" , "cocodrilo" , "aguila" , "elefante" , "leopardo", "perro", "gato", "pulpo", "condor"]

#Inicializacion variables globales
respuesta = palabras[random.randint(0,len(palabras)-1)]

mostrar = []
for i in range(len(respuesta)):
    mostrar.append("_")

vidas = []
for v in range(len(respuesta)-2):
    vidas.append(u"\u2661") 

win = False


while len(vidas) > 0 and not win:
    # iniciar variables locales while
    contar = -1
    quick_win = 0
    win_ver = ""
    # menu
    print(">< Juego del monito quemado ><")
    print()
    print("Vidas restantes: " + str(vidas))
    print()
    print("palabra secreta:")
    print(mostrar)
    print("Pista: Es un animal!")
    print()
    
    #ingreso seleccion usuario
    r = input("Ingrese una letra: ")
    for l in respuesta:
        contar += 1
        if r == l:
            mostrar[contar] = r
            quick_win += 1
    
    # Si falla resta un corazon
    if quick_win != 1 :
        vidas.pop()
    
    # Verfica si gana
    for m in mostrar:
        win_ver += m
    if win_ver == respuesta:
        win = True
    
    print()
    print()
    print()
    print()
    print()
pass

# Fin si gana
if win:
    print()
    print()
    print()
    print("Felicidades, Ganaste! La respuesta era: " + str(respuesta))

# Fin si pierde
else:
    print()
    print()
    print()
    print("Perdiste! :( ")
