import React , { useState } from 'react';
import './App.css';
import Menu from './components/menu/menu'
import Produtos from './components/produtos/produtos'
import Checkout from './components/checkout/checkout'
function App() {

  const [ carrinho, setCarrinho ] = useState({ produtos: [] })
  const [ exibirProdutos, setExibirProdutos ] = useState(true)
  const [ exibirCheckout, setExibirCheckout ] = useState(false)
  const [ total, setTotal ] = useState('0,00') 

  function adicionarProduto(produto){
      const objCarrinho = Object.assign({}, carrinho)
      // atualizar a quandtidade
      let novoProduto = true;
      objCarrinho.produtos.forEach((prod, indice) => {
        if(prod.none === produto.nome){
          objCarrinho.produtos[indice].quantidade++
          novoProduto = false
        }
        if(novoProduto){

          objCarrinho.produtos.push({
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
          })
        }
      })
      //adivionar novo produto ao carrinho
       
  }
  return (
    <div>
      <Menu /> 
      <Produtos
        visivel={exibirProdutos}
        adicionarProduto={adicionarProduto}
         
        />

      <Checkout />
    </div>
  );
}

export default App;
