const alunos=[              //Aqui já é um array
    {nome:"Wiliam",nota:10},
    {nome:"Alex",nota:0},
    {nome:"Bruna",nota:6},
    {nome:"Gordox",nota:8}
];

function passou_de_ano(alunos){
    for(let i=0; i<alunos.length;i++){
        if(alunos[i].nota>=6){
            console.log(`${alunos[i].nome} passou de ano`);
        }
        else{
            console.log(`${alunos[i].nome} não passou de ano`);
        }
    } 
    
}

passou_de_ano(alunos);
