#language: pt
#encoding: utf-8
@incluir

Funcionalidade: Cadastrar endereço no site da amazon.

Cenário: Cadastrar endereço no site da amazon com sucesso.
Dado que possuo um usuário cadastrado no site da amazon.
  E que estou na tela de login do site da amazon.
Quando informar email cadastrado.
  E clicar em continuar.
  E informar senha do usuário cadastrado.
  E clicar em fazer login.
  E deve ser logado.
  E na tela de minha conta.
  E clicar em endereços.
  E clicar em adicionar endereço.
  E informar nome "Teste Automatizado".
  E informar telefone "46991300094".
  E informar cep "85813100".
  E clicar em validar CEP.
  E informar número "342".
  E clicar salvar endereço.
Então deve ser salvo endereço.