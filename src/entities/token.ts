import invariant from 'tiny-invariant';
import { ChainId } from '../constants';
import { validateAndParseAddress } from '../utils/validateAndParseAddress';
import { BaseCurrency } from './baseCurrency';

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends BaseCurrency {
  public readonly isEther: false = false;
  public readonly isPol: false = false;
  public readonly isToken: true = true;

  public readonly chainId: ChainId | number;
  public readonly address: string;

  public constructor(
    chainId: ChainId | number,
    address: string,
    decimals: number,
    symbol?: string,
    name?: string,
  ) {
    super(decimals, symbol, name);
    this.chainId = chainId;
    this.address = validateAndParseAddress(address);
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true;
    }
    return this.chainId === other.chainId && this.address === other.address;
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS');
    invariant(this.address !== other.address, 'ADDRESSES');
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
}

export const WETH9: { [chainId in ChainId]: Token } = {
  [ChainId.POLYGON_AMOY]: new Token(
    ChainId.POLYGON_AMOY,
    '0xd7a19e388c52D3580B6428F29494883A5d40C330',
    18,
    'WETH9',
    'Wrapped Ether',
  ),
};
