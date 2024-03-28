const http = required('http');

http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200,{
        'content - type': 'text/plain'
    });
    resposta.write('Curso de Node CFB cursos');
    resposta.end();
}).listen(1337);