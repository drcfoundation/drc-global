import { Language } from "../../../types/language";

interface WhatIsTheDr {
  title: string;
  contents: string[];
}

export const WHAT_IS_THE_DR: Record<Language, WhatIsTheDr> = {
  en: {
    title: "What is the Digital Reserve?",
    contents: [
      "<strong><em>Digital Reserve (DR) is a decentralized platform</em></strong> where DRC holders can securely hold their DRC tokens in the DRC Vault or get easy exposure to the well-balanced baskets of the most efficient store of value (SoV) assets in DR Vault Sets.",
      "The DR Vault Sets portfolio construction and allocation is based on the DRC community vote. There is no single entity or person that manage DR Vault Sets, as users interact directly with the smart contract.",
      "DRC is not a commercial project and does not collect fees from its platform users. Users only need to pay for transaction gas.",
      "<em><strong>Note</strong>: If you already hold DRC tokens, using the DR Vault Sets are optional, as you can simply hold DRC tokens in your wallet or the DRC Vault and rely on DRC's potential price appreciation.</em>",
    ],
  },
  zh: {
    title: "",
    contents: [],
  },
};
