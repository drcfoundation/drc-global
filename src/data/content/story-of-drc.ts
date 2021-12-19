import { Language } from "../../../types/language";

interface StoryOfDRC {
  title: string;
  contents: string[];
}

export const STORY_OF_DRC: Record<Language, StoryOfDRC> = {
  en: {
    title: "The Story of DRC",
    contents: [
      "Digital Reserve Currency was designed to become a decentralized digital store of value with a limited supply and a zero inflation rate. It was created during the COVID-19 crisis when fiscal and monetary policies have exposed serious vulnerabilities in the current financial system.",
      "DRC did not conduct a token sale and 100% of the total DRC supply has been issued directly to the market. The DRC token is fully developed and operational and has a unique utility of providing access to the Digital Reserve. No one controls or manages DRC as it has a fully decentralized structure.",
    ],
  },
  zh: {
    title: "DRC的故事",
    contents: [
      "数字储备货币（DRC）旨在成为去中心化的数字价值储藏，其供应有限且通货膨胀率为零。它是在新冠病毒危机期间创建的，因为当时财政和货币政策暴露了目前金融体系中的严重漏洞。数字储备货币的概念是由专门从事银行业律师和投资专家创始人马克西姆·努罗夫（Maxim Nurov）提出的。",
      "目前100％的DRC代币供应已上市，并可以在Uniswap分散式交易所进行交易，其市值故意做得较小，为了让相信未来会拥有更大的市场的早起采用者建立起以公道价格接触DRC的方式。 DRC代币已全面开发并投入运营。由于DRC拥有完全去中心化的结构，因此没有人可以控制DRC，也无法提供任何必要的管理措施去影响其成功。",
    ],
  },
};
