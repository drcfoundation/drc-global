export const DR_FAQ_QUESTIONS = [
  {
    question: "What’s different between the DRC Vault and DR Vault Sets?",
    answer: [
      "While DRC Vault’s main purpose is to securely store DRC and it better serves users who believe in the token price appreciation, DR Vault Sets are designed for diversification and hedging purposes and allow users to easily convert their DRC to SoV assets, based on individual financial goals and risk tolerance.",
    ],
  },
  {
    question: "How do I start using the DRC Vault or DR Vault Sets?",
    answer: [
      "If you currently hold DRC tokens in your non-custodial wallet, such as MetaMask, you can start using the DR straight away. All you need to do is consider which DR option is right for you, then ‘Launch App’ and ‘Connect Wallet’ to access your secure DRC Vault or DR Vault Set Dashboard. Next, choose the amount of DRC tokens you would like to deposit, then approve, confirm and complete the transaction.",
    ],
  },
  {
    question: "What are the benefits of using the DR Vault Sets?",
    answer: [
      "Digital Reserve is a decentralized platform where DRC holders can get instant exposure to the baskets of the most efficient store of value assets, by utilising DR Vault Sets, with the purpose of capital preservation and hedging inflation risks.",
      "DR Vault Set users can take advantage of the portfolio diversification benefits and security of holdings. Also, DR platform offers user friendly interface, and instant deposits and withdrawals.",
    ],
  },
  {
    question: "What are the risks involved with using the DR Vault Sets?",
    answer: [
      "The value of assets held in DR Vault Sets can fluctuate because of the market conditions and there can be a substantial risk that you lose money depositing DRC into DR Vault Sets. You should carefully consider whether using DR Vault Sets is suitable for you in light of your individual risk profile and financial condition.",
      `"Store of Value" Vaults interact with the Uniswap V2 platform to trade DR Vault assets using DR Vault smart contracts. "Store of Value" Vaults performance relies on the Uniswap V2 functionality and DR Vault assets liquidity on the Uniswap V2 platform. It is recommended to check the operational status of the Uniswap V2 platform and the sufficient liquidity of DR Vault assets (WBTC/WETH, PAXG/WETH, and USDC/WETH pairs) on the Uniswap V2 platform when depositing and withdrawing assets from "Store of Value" Vaults.`,
    ],
  },
  {
    question: "Where does my DRC go when I deposit into a DR Vault Set?",
    answer: [
      "The deposited DRC will first be converted to WETH via the Uniswap router. The WETH will then be divided by the portfolio assets' allocation percentages, and converted to those assets.",
      "The new assets' total worth is then calculated and minted as DR-POD.",
      "The new DR-POD total will be the new total worth divided by the current unit price. The newly minted amount of DR-POD will then be given to you as your Proof of Deposit, in your DR Vault Set.",
    ],
  },
  {
    question: "What is DR-POD?",
    answer: [
      "DR-POD is a Proof of Deposit given to a user upon their deposit of DRC into a DR Vault Set. DR-POD is only ever minted at the time of a deposit into a DR Vault Set and is burnt at the time of a withdrawal through the Digital Reserve.",
      "The initial supply of DR-POD in a DR Vault Set always starts at 0. A Genesis Deposit of 1000 DRC to each respective DR Vault Set is made by the DRC Foundation Multi-sig wallet to create the initial DR-POD supply with a favourable numerical value.",
      "The unit price of DR-POD equals to the total DR Vault Set holding worth, divided by the total supply of DR-POD.",
      "The total supply of DR-POD will change according to the value of subsequent deposits into the Vault. When new assets are stored in a DR Vault Set, the new total assets worth, divided by the DR-POD unit price gives the new DR-POD total supply. The newly minted DR-POD goes to the depositor.",
      "This allows the DR Smart Contract to make precise calculations of DR-POD's value in relation to the Vault's assets. From this value, withdrawals from DR Vault Sets are processed and historical price analyses are formulated.",
    ],
  },
  {
    question: "What is DR-POD's Net Asset Value?",
    answer: [
      "DR-POD’s Net Asset Value (NAV) is the DR Vault Set's total asset worth, divided by the total supply of DR-POD in its respective DR Vault Set.",
      "The price oracle function for DR-POD’s Net Asset Value is provided in the DR Smart Contract.",
    ],
  },
  {
    question: "What happens when I withdraw from a DR Vault Set?",
    answer: [
      "When you choose to withdraw your capital from a DR Vault Set, the DR Smart Contract will calculate the share of the assets you wish to withdraw and convert that to WETH, then further convert to DRC and transfer to your personal wallet.",
    ],
  },
  {
    question: "What happens if there’s not enough DRC liquidity?",
    answer: [
      "This is not possible based on how the Uniswap Router and AMM (Automatic Market Making) mechanics work. Uniswap DRC LP token provided from the genesis liquidity has been burned to ensure there is always market liquidity for DRC token.",
    ],
  },
  {
    id: "security-audit",
    question: "Is the DR Smart Contract audited and secure?",
    answer: [
      `Yes, the DR Smart Contract is secure and has been audited. It was audited by Dedaub and you can read the <a href="/files/dr-audit-report.pdf" target="_blank" rel="noreferrer">Security Audit Report PDF</a>. All Critical Issues raised during the auditing process were resolved and incorporated into the Ethereum Mainnet DR Smart Contract code.`,
    ],
  },
  {
    question: "Does the DR have an insurance policy?",
    answer: [
      "The Digital Reserve does not provide insurance coverage of funds held in the DR Vault Sets or DRC Vault. Please note that DR Smart Contract security was verified by an independent blockchain development firm.",
    ],
  },
  {
    question: "Should I use the DR Vault Sets or just hold DRC?",
    answer: [
      "If you already hold DRC tokens, using the Digital Reserve is optional, as you can simply hold DRC tokens and rely on its potential price appreciation. Utilising the DRC Vault is one way to hold your DRC and still be part of a decentralised application to securely store your DRC tokens.",
    ],
  },
  {
    question: "Where can I find DR Vault s3",
    answer: [
      `Please note that DR Vault s3 has been archived and can be accessible <a href="/platform/dr-vault-s3/">here</a>. Withdrawals from DR Vault s3 can be made anytime, although further deposits are paused.`,
      "The assets for DR Vault s3 are routed through Uniswap v2 liquidity and during the period of Uniswap v2 and v3 migration, it’s uncertain whether all of the Vault s3 assets will remain on Uniswap v2 or move to v3. If they move, then the DR Vault s3 may experience liquidity issues.",
      "Further, there are unclear regulatory guidelines for DeFi investment protocols at present and this may present a challenge for DR Vault s3's compliance.",
      "Please note that DR Vault s1 and s2 will remain active and available to DR users as they contain highly liquid assets. DRC Vault will also remain available to DR users indefinitely.",
    ],
  },
  {
    question:
      "Can I interact with the DR Vault's smart contracts without using the DRC Global website?",
    answer: [
      "Yes, the DR Vaults are decentralised smart contracts that are open for everyone to use. Users can interact with them from Etherscan or through code.",
      `A "depositDrc" function is provided for depositing into each DR Vault. And to withdraw DRC, users can choose to use either the "withdrawDrc" or the "withdrawPercentage" function.`,
    ],
  },
];
