/**
 * @generated SignedSource<<e26f1da5d7f8f029e297ff08d0111e39>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type queryFieldQuery$variables = {};
export type queryFieldQueryVariables = queryFieldQuery$variables;
export type queryFieldQuery$data = {
  readonly form: {
    readonly entries: ReadonlyArray<{
      readonly id: string;
      readonly key: string;
      readonly value: string | null;
      readonly check: string | null;
      readonly error: string | null;
    } | null> | null;
  } | null;
};
export type queryFieldQueryResponse = queryFieldQuery$data;
export type queryFieldQuery = {
  variables: queryFieldQueryVariables;
  response: queryFieldQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EntryForm",
    "kind": "LinkedField",
    "name": "form",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Entry",
        "kind": "LinkedField",
        "name": "entries",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "key",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "check",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "error",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "queryFieldQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "queryFieldQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0b493a6f66e132f2693f91a5da941414",
    "id": null,
    "metadata": {},
    "name": "queryFieldQuery",
    "operationKind": "query",
    "text": "0b493a6f66e132f2693f91a5da941414"
  }
};
})();

(node as any).hash = "f9fd20a80a839dfb51206c305cbb1657";

export default node;
