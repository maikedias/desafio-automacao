#language: pt
#encoding: utf-8
@incluir

Funcionalidade: Comparar previsão do tempo.

Cenário: Comparar probabilidade de chuva.
Dado que estou no site da google.
Quando pesquiso a previsão do tempo de pato branco.
  E armazeno o valor da probabilidade para o site da google.
  E que estou no site do climatempo.
  E pesquiso a previsão do tempo no climatempo para "pato branco".
  E armazeno o valor da probabilidade para o site do climatempo.
Então comparar os valores de probabilidade de chuva.