import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { RootState } from './store'
import { adicionarAoCarrinho } from './store/slices/cartSlice'
import { alternarFavorito } from '../src/store/slices/favoritosSlice'
import { useGetProdutosQuery } from '../src/store/slices/services/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProdutosQuery()

  const carrinho = useSelector((state: RootState) => state.cart.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos />
      </div>
    </>
  )
}

export default App
