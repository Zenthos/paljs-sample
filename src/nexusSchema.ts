import path from 'path'
import { makeSchema } from 'nexus'
import { paljs } from '@paljs/nexus'
import * as types from './graphql'

export const schema = makeSchema({
  types,
  plugins: [paljs()],
  outputs: {
    schema: path.join(__dirname + '/generated/schema.graphql'),
    typegen: path.join(__dirname + '/generated/nexus.ts'),
  },
  contextType: {
    module: path.join(__dirname, 'context.ts'),
    export: 'Context',
  },
})
