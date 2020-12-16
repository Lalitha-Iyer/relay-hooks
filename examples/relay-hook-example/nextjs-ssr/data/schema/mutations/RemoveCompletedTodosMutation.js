/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @flow
/* graphql-relay doesn't export types, and isn't in flow-typed.  This gets too messy */
/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { getUserOrThrow, removeCompletedTodos } from '../../database';
import { GraphQLUser } from '../nodes';

const RemoveCompletedTodosMutation = mutationWithClientMutationId({
    name: 'RemoveCompletedTodos',
    inputFields: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
    },
    outputFields: {
        deletedTodoIds: {
            type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
            resolve: ({ deletedTodoIds }) => deletedTodoIds,
        },
        user: {
            type: new GraphQLNonNull(GraphQLUser),
            resolve: ({ userId }) => getUserOrThrow(userId),
        },
    },
    mutateAndGetPayload: ({ userId }) => {
        const deletedTodoIds = removeCompletedTodos(userId);

        return { deletedTodoIds, userId };
    },
});

export { RemoveCompletedTodosMutation };
