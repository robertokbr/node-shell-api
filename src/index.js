import http from 'http';
import cors from './middlewares/cors.js';
import router from './routes/index.js';

const port = process.env.PORT || 3333; 

const server = http.createServer(async (request, response) => {
  const path = request.url;

  cors(response);

  for await(const data of request) {
    const parsed_data = JSON.parse(data.toString());

    const result = await router(path, parsed_data);
    
    response.write(JSON.stringify(result));
    
    response.end();
  }
});

server.listen(port, () => {
  console.info(`Server connected on port ${port}`)
});
