import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

// Cargar variables de entorno locales en el proceso Node de Vite
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'edugalicia-rag-api-dev-server',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && (req.url === '/api/rag' || req.url.startsWith('/api/rag?'))) {
            try {
              // Importar dinámicamente el handler para permitir hot-reloading
              const { default: ragHandler } = await import('./api/rag.js');

              // Leer cuerpo de la petición si es POST/PUT
              let body = '';
              req.on('data', chunk => {
                body += chunk;
              });

              req.on('end', async () => {
                let parsedBody = {};
                if (body) {
                  try {
                    parsedBody = JSON.parse(body);
                  } catch (e) {
                    parsedBody = body;
                  }
                }

                // Crear adaptador compatible con Serverless (status, json, setHeader)
                const adaptedReq = {
                  method: req.method,
                  url: req.url,
                  headers: req.headers,
                  body: parsedBody
                };

                const adaptedRes = {
                  statusCode: 200,
                  setHeader(name, value) {
                    res.setHeader(name, value);
                    return this;
                  },
                  status(code) {
                    this.statusCode = code;
                    res.statusCode = code;
                    return this;
                  },
                  json(data) {
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = this.statusCode;
                    res.end(JSON.stringify(data));
                  },
                  end(data) {
                    res.statusCode = this.statusCode;
                    res.end(data);
                  }
                };

                await ragHandler(adaptedReq, adaptedRes);
              });
            } catch (err) {
              console.error('[Vite RAG Middleware Error]:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message, success: false }));
            }
          } else {
            next();
          }
        });
      }
    }
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: false
  }
});
