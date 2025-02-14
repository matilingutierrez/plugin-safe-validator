import * as _safe_global_types_kit from '@safe-global/types-kit';
import { Plugin } from '@elizaos/core';

interface CheckTxSecurityAndSignResponse {
    signed: boolean;
    secure: boolean;
    feedback: string;
}

declare const safeValidatorPlugin: Plugin;
declare const checkTxSecuritySingle: (transaction: _safe_global_types_kit.SafeMultisigTransactionResponse, owners: string[]) => string;

export { type CheckTxSecurityAndSignResponse, checkTxSecuritySingle, safeValidatorPlugin };
