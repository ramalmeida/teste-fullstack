# Avaliação de proficiência fullstack

## Sobre

- O projeto consiste em um cadastro de pontos turísticos por cidades, estas agrupadas por estados.
- O projeto deverá seguir o mais fidedigno possível ao [design](https://xd.adobe.com/view/89f9a967-24a1-4816-93dd-531b6cee3b26-dcaa/grid)
- O projeto terá a duração de 3 dias a partir da data de entrega.
- Será aceito entregas parciais.

## Requisitos funcionais

- O projeto contará com a possibilidade de cadastrar estados, ao clicar no botão de “Novo estado” representado em Home o usuário será encaminhado para o modal de “Cadastro de estados”
- É necessário que seja possível fitar os estados, cidades e pontos turísticos sendo que os pontos turísticos serão filtrados dentro do campo de pesquisa da cidade, conforme a tela Home.
- O usuário terá a possibilidade de excluir os estados/cidades através de um botão com o ícone de lixeira que só se mostrará ao evento hover representado em Home, ao tentar excluir deverá ser exibido uma mensagem confirmando a ação.
- Na relação de estados deverá conter um contador com todas as cidades de cada estado, e na lista de cidades o contador referenciara os pontos turísticos de cada cidade.
- Ao clicar será exibido ao usuário uma tela onde o mesmo poderá entrar com nome do estado e abreviação (UF).
- No modal de criação de cidades encontrasse um campo com o nome da cidade e uma lista com a possibilidade de gerenciar os pontos turísticos.

## Como executar o teste.

> No teste encontram-se duas pastas da raiz "api" e "app", na pasta "api" encontra-se o setup de um projeto usando [nest.js](https://nestjs.com/), já em "app" encontra-se o setup de um projeto com o framework vue.js o [quasar](https://quasar.dev/)

Para rodar a api usa-se o comando

```sh
$ docker-compose up
```

Para rodar o app usa-se o comando

```sh
$ quasar dev
```

## O que será avaliado:

- Organização do código, e padrões de boas práticas como design patterns, SOLID e Clear Code;
- Entrega dos itens previstos no capitulo 1 com maior semelhança ao design possível.
- Entrega de testes automatizados cobrindo a api e funcionalidades do app, escritas em Jest.
- Uso do vue com typescript.

## Entrega

Após as atividades termindas enviar o repositório para wendell.vieira@qwst.co
