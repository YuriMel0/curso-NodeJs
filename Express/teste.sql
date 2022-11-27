/* 
    Criando tabela com os campos: nome, email e idade
*/
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/* 
    Inserindo dados para os campos
*/
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Barbara Lima",
    "babi@gmail.com",
    22 
);

/* 
    Selecionando dados dos usuarios com clausula WHERE, para idades iguais a 8
*/
SELECT * FROM usuarios WHERE idade = 8;

/* 
    Selecinando dados dos usuarios com nome igual a Barbara
*/
SELECT * FROM usuarios WHERE nome = "Barbara";

/* 
    Selecionando dados dos usuarios com idades maiores ou iguais a 18
*/
SELECT * FROM usuarios WHERE idade >= 18;

/* 
    Deletando dados com clausula WHERE
*/
DELETE FROM usuarios WHERE nome = "Barbara Lima";


/* 
    Alterando dados com clausula WHERE 
*/
UPDATE usuarios SET nome = "Nome Teste", email = "emailTeste@gmail.com", idade = 999 WHERE nome = "Luiza";

UPDATE usuarios SET nome = "Nome Teste" WHERE nome = "Luiza";