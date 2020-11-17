import * as areEqual from 'fbjs/lib/areEqual';
import { useRef, useMemo } from 'react';
import {
    GraphQLTaggedNode,
    OperationType,
    OperationDescriptor,
    Variables,
    CacheConfig,
} from 'relay-runtime';
import { RenderProps, QueryOptions } from './RelayHooksType';
import { useQueryFetcher } from './useQueryFetcher';
import { useRelayEnvironment } from './useRelayEnvironment';
import { createOperation } from './Utils';

export function useDeepCompare<T>(value: T): T {
    const latestValue = useRef(value);
    if (!areEqual(latestValue.current, value)) {
        latestValue.current = value;
    }
    return latestValue.current;
}

export function useMemoOperationDescriptor(
    gqlQuery: GraphQLTaggedNode,
    variables: Variables,
    cacheConfig?: CacheConfig | null,
): OperationDescriptor {
    const memoVariables = useDeepCompare(variables);
    return useMemo(() => createOperation(gqlQuery, memoVariables, cacheConfig), [
        gqlQuery,
        memoVariables,
        cacheConfig,
    ]);
}

export const useQuery = <TOperationType extends OperationType = OperationType>(
    gqlQuery: GraphQLTaggedNode,
    variables: TOperationType['variables'] = {},
    options: QueryOptions = {},
): RenderProps<TOperationType> => {
    const environment = useRelayEnvironment();
    const query = useMemoOperationDescriptor(gqlQuery, variables, options.networkCacheConfig);
    const queryFetcher = useQueryFetcher<TOperationType>();

    return queryFetcher.execute(environment, query, options);
};
