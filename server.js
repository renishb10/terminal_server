import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';

const app = express();

// bodyParser is needed just for POST.
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema }),
);

app.listen(3030);
