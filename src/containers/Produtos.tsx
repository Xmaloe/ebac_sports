import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { RootState } from '../store'
import { useGetProdutosQuery } from '../store/slices/services/api'
import { adicionarAoCarrinho } from '../store/slices/cartSlice'
import { alternarFavorito } from '../store/slices/favoritosSlice'

import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((f) => f.id === produto.id)

  if (isLoading) return <p>Carregando...</p>

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          aoComprar={() => dispatch(adicionarAoCarrinho(produto))}
          favoritar={() => dispatch(alternarFavorito(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
