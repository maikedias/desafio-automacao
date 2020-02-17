#language: pt
#encoding: utf-8
@incluir

Funcionalidade: Logar no site da amazon.

Cenário: Logar no site da amazon com sucesso.
Dado que possuo um usuário cadastrado no site da amazon.
  E que estou na tela de login do site da amazon.
Quando informar email cadastrado.
  E clicar em continuar.
  E informar senha do usuário cadastrado.
  E clicar em fazer login.
Então deve ser logado.