const alunos=[              //Aqui já é um array
    {nome:"Wiliam",nota:10},
    {nome:"Alex",nota:0},
    {nome:"Bruna",nota:6},
    {nome:"Gordox",nota:8}
];

function passou_de_ano(alunos){
    const alunosAprovados=alunos.filter(aluno=>aluno.nota >=6);
    alunosAprovados.forEach(aluno => console.log(`${aluno.nome} passou de ano`));

    const alunosReprovados=alunos.filter(aluno => aluno.nota < 6);
    alunosReprovados.forEach(aluno => console.log(`${aluno.nome} não passou de ano`));
}

passou_de_ano(alunos);
