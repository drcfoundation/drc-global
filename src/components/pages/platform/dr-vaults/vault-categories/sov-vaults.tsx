import * as React from "react";
import { DR_VAULTS } from "../../../../../data/dr/dr-vaults";
import Column from "../../../../ui-library/column-system/column";
import Row from "../../../../ui-library/column-system/row";
import VaultCard from "../../vault-card/vault-card";

const SovVaults: React.FC = () => {
  return (
    <Row>
      <Column spanLg={6} spanMd={6} spanSm={12}>
        <VaultCard {...DR_VAULTS.s1} />
      </Column>
      <Column spanLg={6} spanMd={6} spanSm={12}>
        <VaultCard {...DR_VAULTS.s2} />
      </Column>
    </Row>
  );
};

export default SovVaults;
