import * as React from "react";
import { SetId } from "../../../../../../types/dr-vault";
import AccessDrContainer from "./access-dr-container";

interface DrMaintenanceProps {
  setId: SetId;
}

const DrMaintenance: React.FC<DrMaintenanceProps> = ({ setId }) => {
  return (
    <AccessDrContainer setId={setId}>
      <div>Digital Reserve {setId} is currently under maintenance.</div>
      <div>This process might take up to 24 hours.</div>
      <div>Thanks for your patience and understanding.</div>
    </AccessDrContainer>
  );
};

export default DrMaintenance;
