import http from 'http';
import { URL } from 'url';

function construtor (req,res){
  res.setHeader('Content-Type', "text/plain, charset='utf-8");
  const url = new URL('http://localhost${req.url}');

  if(url.pathname === "/ola-usuario"){
    const usuario = url.searchParams.get("usuario") || "Usuário";
    res.end(`Olá, ${usuario}!`);
    return;
  }
  res.end("Olá Servidor Node.js!");
    
}

const servidor = http.createServer(construtor);

servidor.listen(3000, 'localhost');