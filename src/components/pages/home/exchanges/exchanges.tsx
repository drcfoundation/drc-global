import * as React from "react";
import { Language } from "../../../../../types/language";
import { marketLinks } from "../../../../data/resource-links";
import Button from "../../../ui-library/button/button";
import Column from "../../../ui-library/column-system/column";
import Row from "../../../ui-library/column-system/row";
import { grid } from "../../../ui-library/design-tokens/grid";

const uniswapButton: Record<Language, string> = {
  en: "BUY DRC ON UNISWAP",
  zh: "UNISWAP 购买DRC",
};

const bancorButton: Record<Language, string> = {
  en: "BUY DRC ON BANCOR",
  zh: "BANCOR 购买DRC",
};

const bittrexButton: Record<Language, string> = {
  en: "BUY DRC ON BITTREX GLOBAL",
  zh: "BITTREX GLOBAL 购买DRC",
};

interface ExchangesProps {
  lang?: Language;
}

const Exchanges: React.FC<ExchangesProps> = ({ lang = "en" }) => {
  return (
    <>
      <Row isCenter={true}>
        <Column spanLg={6} spanMd={6} spanSm={6} spanXs={12}>
          <Button
            to={marketLinks.uniswapTrade.url}
            target="_blank"
            css={{ width: "100%" }}
          >
            {uniswapButton[lang]}
          </Button>
        </Column>
        <Column spanLg={6} spanMd={6} spanSm={6} spanXs={12}>
          <Button
            to={marketLinks.bancor.url}
            target="_blank"
            css={{ width: "100%" }}
          >
            {bancorButton[lang]}
          </Button>
        </Column>
      </Row>

      <div css={{ display: "flex", justifyContent: "center" }}>
        <Button
          to={marketLinks.bittrex.url}
          target="_blank"
          css={{ width: "100%", maxWidth: grid(34.5) }}
        >
          {bittrexButton[lang]}
        </Button>
      </div>
    </>
  );
};

export default Exchanges;
