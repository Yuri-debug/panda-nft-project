import { Wrapper } from "./styled";
import binance from '../../assets/binance.png'
import trust from '../../assets/trust.png'
import meta from '../../assets/meta.png'
import coin from '../../assets/coin.png'
import toko from '../../assets/toko.png'

function Brands() {
    return (
        <Wrapper>
            <img src={binance} alt='img' />
            <img src={trust} alt='img' />
            <img src={meta} alt='img' />
            <img src={coin} alt='img' />
            <img src={toko} alt='img' />
        </Wrapper>
    )
}

export {Brands}