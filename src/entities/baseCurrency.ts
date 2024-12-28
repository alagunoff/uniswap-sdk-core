import invariant from 'tiny-invariant'

/**
 * A currency is any fungible financial instrument on Ethereum and Polygon, including Ether, POL and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether or POL.
 */
export abstract class BaseCurrency {
  public abstract readonly isEther: boolean
  public abstract readonly isPol: boolean
  public abstract readonly isToken: boolean

  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER` or `Currency.POL`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    invariant(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), 'DECIMALS')

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}
