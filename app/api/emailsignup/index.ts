const https = require('https');

function EmailSignUp(req: { body: { email: any; firstname: any; lastname: any; }; cookies: { hubspotutk: any; }; headers: { [x: string]: any; }; connection: { remoteAddress: any; }; }) {
  // build the data object
  const postData = {
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    hs_context: {
      hutk: req.cookies.hubspotutk,
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      pageUrl: "http://www.example.com/form-page",
      pageName: "Email Signup"
    }
  };

  // set the post options, changing out the HUB ID and FORM GUID variables.
  const options = {
    hostname: "forms.hubspot.com",
    path: "/uploads/form/v2/26705358/ac3dffc7-8a78-4d8d-9dc7-3a1564a943b0",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": JSON.stringify(postData).length
    }
  }

  // set up the request
  const request = https.request(options, function(response: { statusCode: string; headers: any; setEncoding: (arg0: string) => void; on: (arg0: string, arg1: (chunk: any) => void) => void; }) {
    console.log("Status: " + response.statusCode);
    console.log("Headers: " + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      console.log('Body: ' + chunk)
    });
  });

  request.on('error', function(e: { message: string; }) {
    console.log("Problem with request " + e.message)
  });

  // post the data
  request.write(JSON.stringify(postData));
  request.end();
}

export default EmailSignUp;



