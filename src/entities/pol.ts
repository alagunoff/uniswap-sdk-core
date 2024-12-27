import { BaseCurrency } from './baseCurrency'

/**
 * Represents the currency Pol
 */
export class Pol extends BaseCurrency {
  public readonly isEther: true = true
  public readonly isToken: false = false

  /**
   * Only called once by this class
   * @protected
   */
  protected constructor() {
    super(18, 'POL', 'Pol')
  }

  /**
   * The only instance of the class `Pol`.
   */
  public static readonly POL: Pol = new Pol()
}

export const POL = Pol.POL
