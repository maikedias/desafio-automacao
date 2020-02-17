#language: pt
#encoding: utf-8
@incluir

Funcionalidade: Comparar previsão do tempo.

Cenário: Comparar umidade do tempo.
Dado que estou no site da google.
Quando pesquiso a previsão do tempo de pato branco.
  E armazeno o valor da umidade para o site da google.
  E que estou no site do climatempo.
  E pesquiso a previsão do tempo no climatempo para "pato branco".
  E armazeno o valor da umidade para o site do climatempo.
Então comparar os valores de umidade de do tempo.