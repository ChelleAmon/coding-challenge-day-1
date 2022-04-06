// const fs = require('fs');
// const http = require('http');
// const path = require('path');

import fs from 'fs';
import http from 'http';
import path from 'path';
const __dir = path.resolve(__dirname, './');

http.createServer(function (req, res) {
 
    res.writeHead(200, {'Content-Type': 'text/html'});
    // endpoint
    if (req.url === '/') {
        res.write('<h1>Hello World</h1>');
    }

    if (req.url === '/api/courses') {
        const files = fs.readdirSync(__dir);

        let html = `
        <ul>
        ${files.map(file => `<li><a href="http://localhost:3000/file/${file}">${file}</a></li>`).join('<br/>')}
        </ul>
        
        `;
        res.write(html);
    }

    if (req.url.startsWith('/file/')) {
        const fileName = req.url.split('/file/')[1];
        const filePath = path.resolve(__dir, fileName);
        const file = fs.readFileSync(filePath);
        const files = fs.readdirSync(__dir);

        let html = `
        <ul>
        ${files.map(file => `<li><a href="http://localhost:3000/file/${file}">${file}</a></li>`).join('<br/>')}
        </ul>
        `;
        res.write(html + `
        <script>
        function saveFile() {
            fetch(
                'http://localhost:3000/save',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        data:  document.querySelector('textarea').value,
                        fileName: '${fileName}'
                    })
                }
                )
                
        }
     
        </script>
        <h1>${fileName}</h1>
        <textarea style="width:100%; height: 100vh">${file}</textarea><button onclick="saveFile()" >Save</button>`);
    }  

    if (req.url === '/save' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            console.log(data);
            const fileName = data.fileName;
            const filePath = path.resolve(__dir, fileName);
            fs.writeFileSync(filePath, data.data);
            res.end('Saved');
        });
    }
    
    res.end();
}).listen(3000);