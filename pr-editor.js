module.exports = function (data, process) {
    var PAYLOAD      = data.payload,
        ACCESS_TOKEN = data.access_token,
        GET          = data.parameters;

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
                    "body": PAYLOAD.pull_request.body + "\n" + body + "\n-----\n" + "Template automatically appended by githook-pr-editor."
                }
            };

            console.log(options);

            request.post(options, function templatePosted(err, httpResponse, body) {
                if (err) {
                    process.fail('Could not send POST request: ' + err);
                }
                else {
                    process.succeed('Template POST message successful. Response:' + body);
                }
            });

        });
    }
    else {
        process.succeed(PAYLOAD.action + ' (payload action) was not "opened", so there was nothing to do here.');
    }
};
