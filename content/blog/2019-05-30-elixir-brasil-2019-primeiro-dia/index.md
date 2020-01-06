---
title: Elixir Brasil 2019 - Primeiro dia
description:
  "Tive a honra de participar da segunda edição do evento #ElixirBrasil. Confira
  em detalhes o que aconteceu por lá!"
tags: ["Elixir", "Events"]
date: "2019-05-30T03:00:00.000Z"
cover: ./voce_nao_precisa_ser_grande_para_causar_um_grande_impacto.jpg
---

<p>
    <a href="https://2019.elixirbrasil.com/" rel="nofollow" class="image-link" title="Elixir Brasil 2019">
        <img src="./elixir_brasil_logo.svg" alt="Elixir Brasil 2019" style="width: 413px; height: 164px">
    </a>
</p>

Nos dias 25 e 26 de maio tive a honra de participar da segunda edição do evento
[**#ElixirBrasil**](https://twitter.com/hashtag/ElixirBrasil), realizado pela
[CodamosClub](https://twitter.com/CodamosClub), o
[Elug SP](https://twitter.com/elug_sp) e o
[Nubank](https://twitter.com/nubank) - que sediou o evento em seu lindo prédio
em São Paulo/SP.

As palestras ocorreram durante os dois dias inteiros - foram 34 talks e 33
palestrantes para **mais de 400 participantes**, números impressionantes e de
dar muito orgulho - principalmente se considerarmos o quão nova é a comunidade
[Elixir](https://elixir-lang.org/). Haviam duas trilhas: uma iniciante e uma
avançada onde foi possível transitar entre elas conforme a afinidade com cada
assunto. [No site do evento](https://2019.elixirbrasil.com/) é possível
encontrar toda a grade de palestras, informações sobre os palestrantes,
patrocinadores e organizadores além do código de conduta.

Infelizmente as palestras não foram gravadas, mas nesse post - primeira parte de
duas - vou resumir todas as **talks que vi** durante o **primeiro dia**.

---

## Abertura

A [Alda Rocha](https://twitter.com/mjcoffeeholick) e o
[Guilherme de Maio](https://twitter.com/nirev) fizeram uma breve abertura
do #**ElixirBrasil** desse ano. É incrível ver a diversidade do evento na
organização, comunidades presentes e o código de conduta sendo seguido. Vemos
que essas ações se refletem no público também, que é muito diverso - com certeza
o evento mais diverso que já participei. Cada mínimo detalhe foi pensado para o
conforto de todos os participantes. Enfim, bora começar?

## Como uma empresa brasileira criou uma linguagem que é usada no mundo inteiro. O case da Plataformatec com o Elixir - [Hugo Baraúna](https://twitter.com/hugobarauna)

O Hugo, da [Plataformatec](http://plataformatec.com.br/), deu início às
palestras com o seu keynote simultâneo para as duas trilhas. Ele veio mostrar
como surgiu o Elixir, que problemas buscavam resolver e os frutos que colhem
hoje.

### Parte 1 - Por que criar uma linguagem nova?

Em 2010, o pessoal da Plataformatec estava tentando lidar com o
[Ruby on Rails](https://rubyonrails.org/) _multithread_, utilizando uma
funcionalidade para `thread safety` que tinha sido recentemente lançada. Porém
vários bugs e problemas foram aparecendo em aplicações, mostrando que não era
tão fácil lidar com esse problema.

Mas, por que `thread safe` era tão importante? O _paper_
[The free lunch is over](http://www.gotw.ca/publications/concurrency-ddj.htm) (O
almoço grátis acabou), de 2005, expõe uma visão interessante sobre o tema. Cita
a _Lei de Moore_, que diz que o "número de transistores dos processadores dobra
a cada dois anos" - o que na prática significava que a velocidade dos CPUs
basicamente dobrava também. Ou seja, para ter performance em um software era só
esperar um pouco, atualizar o hardware e pronto, almoço grátis!

Porém, a partir dos anos 2000, esse cenário começou a mudar e a Lei de Moore já
não mais funcionava. É importante ressaltar que **as CPUs não pararam de
evoluir**, porém evoluíram de modo diferente, com _hyperthreading_ e
_multicore_. Ao invés de um processador ficando mais potente, mais processadores
de mais ou menos mesma potência foram sendo adicionados.

Com essa mudança podemos entender que o modo como escrevemos softwares deve
levar isso em conta, aproveitando-se de **concorrência** e **paralelização**.

O Hugo cita ainda a
[Lei de Amdahl](https://pt.wikipedia.org/wiki/Lei_de_Amdahl), que diz que
"quanto menos concorrente for seu código, menos velocidade ele ganha pelo
aumento de núcleos do processador (_cores_)". E cita também o seguinte:

> "Provavelmente, o maior custo da concorrência é que concorrência é realmente
> difícil"
>
> Herb Sutter - tradução livre

Mas e se fosse fácil fazer concorrência?

### Parte 2 - A busca por outras tecnologias e por concorrência fácil

Concorrência deveria ser fácil, mas na prática não é bem por aí. Segundo o Herb
Sutter, é natural que a maioria dos desenvolvedores não saibam concorrência, da
mesma forma que 15 anos atrás a maioria não sabia sobre orientação a objetos. Já
fazem 10 anos desde o artigo _"The Free Lunch is Over"_, mas vemos que a maioria
do código ainda é _"single-threaded"_, ou seja, não-concorrente.

O problema é o modelo de _threads_ e _locks_, que são abstrações de baixo nível?
E se tivéssemos uma abstração de mais alto nível, que facilitasse nossa vida
como desenvolvedores de software? Por exemplo, isso ocorre com o gerenciamento
de memória - não precisamos mais de `malloc`s e etc, pois a abstração do
_garbage collector_ lida com isso para a gente.

### Parte 3 - O desenvolvimento do Elixir

Lendo o livro
[Seven Languages in Seven Weeks](https://pragprog.com/book/btlang/seven-languages-in-seven-weeks)
(Sete linguagens em sete semanas), três linguagens chamaram a atenção do José
Valim: [Haskell](https://www.haskell.org/), [Erlang](https://www.erlang.org/) e
[Clojure](https://clojure.org/), tendo entre elas características funcionais,
com distribuição e tolerância a falhas e com uma abordagem moderna, com
polimorfismo e meta-programação. Porém nenhuma delas tinha as três coisas ao
mesmo tempo e foi para atender a esses três pontos que o Elixir surgiu, criado
pelo José Valim.

![Hugo Baraúna - Explorando o desenvolvimento de uma nova linguagem.](/hugo.jpg)

#### Por que a [Erlang Virtual Machine](<https://en.wikipedia.org/wiki/BEAM_(Erlang_virtual_machine)>)?

Porque foi pensada desde o começo para concorrência, distribuição e tolerância a
falhas. É uma máquina virtual (VM) que já tem mais de 30 anos de
desenvolvimento, sendo bem testada no mercado, ou seja, que tem seu
funcionamento garantido.

Em 2011 foi lançado o primeiro protótipo do Elixir. Porém esse "Elixir" tinha um
modelo de "objetos", era muito lento e quebrava compatibilidade com a VM. Depois
de vários altos e baixos no desenvolvimento, eles perceberam que o design da
linguagem estava errado. Então, redefiniram os direcionamentos do Elixir:
**produtividade, extensibilidade e compatibilidade**. Foram meses de estudo,
praticamente sem desenvolvimento ativo e esse novo caminho foi o momento
_"Eureka!"_. Em 2012 decidiram investir e lançar o Elixir - foi em uma conversa
entre a diretoria da Plataformatec que Valim os convenceu.

Após quase um ano e meio nessa jornada, veio um período de incertezas sobre o
projeto, mas que contou com uma surpresa inesperada. O
[Dave Thomas](https://twitter.com/pragdave), um dos escritores do famoso livro
[The Pragmatic Programmer](https://www.amazon.com.br/dp/B003GCTQAE/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)
(e também um dos fundadores da plataforma
[Pragmatic Programmers](https://pragprog.com/)), resolveu escrever o primeiro
livro sobre a linguagem Elixir e "evangelizar" sobre a mesma. O efeito foi
extremamente positivo e o número de acessos no site do Elixir aumentou
consideravelmente.

No ano seguinte veio o ponto de inflexão.
[Joe Armstrong](<https://en.wikipedia.org/wiki/Joe_Armstrong_(programmer)>) (_in
memoriam_ - [#rememberingjoe](https://twitter.com/hashtag/rememberingjoe)), um
dos criadores do Erlang,
[fez um post elogiando a linguagem](https://joearms.github.io/published/2013-05-31-a-week-with-elixir.html).
Ainda em 2013 a [O'Reilly](https://www.oreilly.com/) anunciou a criação de um
livro sobre a linguagem.

Em 2014, tivemos a primeira [ElixirConf](https://elixirconf.com/2019) nos EUA,
com cerca de 100 pessoas. O [Phoenix](https://phoenixframework.org/) também
surgiu nessa época, o web-framework do Elixir. Por volta de 2015 surge o
[Nerves](https://nerves-project.org/) para software embarcado (IoT) com Elixir.

Com a base web estabilizada, em 2016 a parte de ingestão e processamento de
dados foi trabalhada na linguagem, com suporte a _streaming_, concorrência e
_back pressure_. Para a Ptec, foi também quando conseguiram o primeiro cliente
Elixir! A Gartner, provavelmente a maior empresa de pesquisa e aconselhamento em
tecnologia para grandes corporações, citou o Elixir em seus relatórios.

Hoje em dia, temos milhares de bibliotecas, mais de 30 livros, mais de 15
conferências, mais de 200 meetups. Encontramos
[vagas de trabalho](http://plataformatec.com.br/elixir-radar/jobs) em
[empresas do mundo todo](https://elixir-companies.com/en). A visão da
Plataformatec é que o Elixir é **maior** do que eles.

### Parte 4 - Por que o Elixir tem crescido?

Na opinião do Hugo, são basicamente três fatores: ele crê que a tendência do
futuro concorrente veio para ficar; o Elixir te permite pensar diferente e, por
fim, possui ferramental para diferentes domínios. E ele explica o porquê:

#### O futuro é concorrente

O "futuro de 2005" é hoje e a Erlang VM foi projetada para concorrência. Não que
seja impossível fazer concorrência com outras tecnologias, mas com Elixir é
muito fácil. Concorrência é sobre muito mais do que paralelismo, que te ajuda a
fazer software responsivo, distribuído, resiliente... O Elixir/OTP suporta
"nativamente" o [Manifesto Reativo](https://www.reactivemanifesto.org/pt-BR),
pois é:

- **Reativo**: respondendo rapidamente aos usuários, com um tempo de resposta
  previsível.
- **Resiliente**: cada linha de processamento é isolado, com falhas isoladas e
  supervisores cuidando da saúde de outros processos.
- **Elástico**: com por exemplo 2 milhões de conexões simultâneas com nenhum
  _timeout_.
- **Orientado a Mensagens**: quando dois processos estão se comunicando, não é
  necessário saber se eles estão na mesma máquina ou se estão distribuídos, isso
  é transparente.

Além desses motivos, concorrência ajuda em _desenvolvimento_, não apenas em
_produção_.

> "Tudo que você faz na sua máquina deveria usar todos os <u>cores</u>. Bootar
> sua aplicação, compilar código, resolver dependências, rodar os testes, etc.
> Até o seu relógio tem 2 <u>cores</u>. Concorrência não é mais a exceção, é a
> regra."
>
> **José Valim** em
> [_The fallacies of web application performance_](http://blog.plataformatec.com.br/2017/07/the-fallacies-of-web-application-performance/)

#### O Elixir te permite pensar diferente

Aplicações com UI rica e em tempo real estão aumentando a expectativa dos
usuários; [IoT](https://pt.wikipedia.org/wiki/Internet_das_coisas) traz a
necessidade de monitoramento real-time de múltiplos dispositivos.
[Phoenix Channels](https://hexdocs.pm/phoenix/channels.html) e
[Phoenix LiveView](https://dockyard.com/blog/2018/12/12/phoenix-liveview-interactive-real-time-apps-no-need-to-write-javascript)
permitem funcionalidades real-time facilmente.

Também é possível conceber uma arquitetura de "Nanoserviços", ao invés do
monolito concorrente. Explicando, o Elixir roda milhares ou milhões de processos
"leves" na máquina virtual do Erlang, com alguns deles se comunicando entre si,
se supervisionando... alguns na mesma máquina, outros em outra, sem problemas. É
como se fosse um monolito distribuído. Para se aprofundar no assunto, leia os
post
