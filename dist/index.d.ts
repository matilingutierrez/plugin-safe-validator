import { Plugin } from '@elizaos/core';

interface CheckTxSecurityAndSignResponse {
    signed: boolean;
    secure: boolean;
    feedback: string;
}

declare const safeValidatorPlugin: Plugin;

export { type CheckTxSecurityAndSignResponse, safeValidatorPlugin as default, safeValidatorPlugin };
