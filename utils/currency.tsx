import { format } from "currency-formatter";

export const CurrencyFormat = (amount: any) => {
      const formattedAmount = format(amount, { code: "NGN" });
      return formattedAmount;
};

