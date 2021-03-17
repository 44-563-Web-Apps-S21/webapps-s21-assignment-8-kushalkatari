const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title>a</title> table </head>')
      res.write('<body>')
      res.write('<table><tr><th>Location </th>')
      res.write('<th>Hours</th>')
      res.write('<th>Amount Payed</th>')    
      res.write('</tr>') 
      res.write('<tr>') 
      res.write('<td>Newyork</td>') 
      res.write('<td>10 hrs</td>') 
      res.write('<td>$2000</td>') 
      res.write('</tr>') 
      res.write('<tr>') 
      res.write('<td>Texas</td>') 
      res.write('<td>7 hrs</td>') 
      res.write('<td>$1500</td>') 
      res.write('</tr>') 
      res.write('<tr>') 
      res.write('<td>California</td>') 
      res.write('<td>15 hrs</td>') 
      res.write('<td>$3000</td>') 
      res.write('</tr>') 
      res.write('<tr>') 
      res.write('<td>Chicago</td>') 
      res.write('<td>11 hrs</td>') 
      res.write('<td>$500</td>') 
      res.write('</tr>') 
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})