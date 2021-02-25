import * as actionType from "./actionTypes";

export function beginApiCall() {
  return { type: actionType.BEGIN_API_CALL };
}
