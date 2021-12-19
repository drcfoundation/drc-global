import * as React from "react";
import { DR_VAULTS } from "../../../../../data/dr/dr-vaults";
import DrDepositWarning from "../../../../modules/dr-deposit-warning/dr-deposit-warning";
import { grid } from "../../../../ui-library/design-tokens/grid";
import MarginBox from "../../../../ui-library/margin-box/margin-box";
import VaultCard from "../../vault-card/vault-card";

const ArchivedVaults: React.FC = () => {
  return (
    <>
      {/* <MarginBox margin={{ bottom: grid(4) }}>
        <DrDepositWarning />
      </MarginBox> */}

      <div>
        <VaultCard {...DR_VAULTS.s3} />
      </div>
    </>
  );
};

export default ArchivedVaults;
