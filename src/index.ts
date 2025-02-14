export * from "./types";

import type { Plugin } from "@elizaos/core";
import { getCheckTxSecurityAndSignAction } from "./actions/checkTxSecurityAndSign";
import { checkTxSecurity } from "./utils/checkTxSecurity";

export const safeValidatorPlugin: Plugin = {
    name: "safe-validator",
    description: "Safe  security checker and signer",
    providers: [],
    evaluators: [],
    services: [],
    actions: [getCheckTxSecurityAndSignAction()],
};

export default { safeValidatorPlugin, checkTxSecurity };
