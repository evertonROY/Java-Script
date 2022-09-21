let testeJSON=`{
    "colaboradores":[
        {"nome": "Everton", "idade": 22, "estado": "Bahia"},
        {"nome": "romario", "idade": 30, "estado": "Paraná"},
        {"nome": "Roberto", "idade": 18, "estado": "Rio de janeiro"},
        {"nome": "Bruna", "idade": 25, "estado": "São paulo"},
        {"nome": "carla", "idade": 45, "estado": "Sergipe"}
]
}`

console.log(JSON.parse(testeJSON))