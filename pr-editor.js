if (PAYLOAD.action === 'opened') {

    request.get(GET.template, function templateReceived(err, httpResponse, body) {

        var options = {
            url:      PAYLOAD.pull_request.url,
            headers: {
                'Content-Type':  'application/json',
                'User-Agent':    'pr-editor',
                'Authorization': 'token ' + ACCESS_TOKEN
            },
            json: {
                "body": PAYLOAD.pull_request.body + "\n" + body
            }
        };

        console.log(options);

        request.post(options, function templatePosted(err, httpResponse, body) {
            if (err) {
                fail('Could not send POST request: ' + err);
            }
            else {
                succeed('Template POST message successful. Response:' + body);
            }
        });

    });
}
else {
    succeed(PAYLOAD.action + ' (payload action) was not "opened", so there was nothing to do here.');
}
