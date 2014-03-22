var github = require('octonode');
var clientTools = require ('./clientTools.js');

var client = github.client();
var ghsearch = client.search();

function getOpenPRs() {
  ghsearch.issues({
    q: 'CleanUpGithub'
  }, clientTools.openToClient);
}

function getClosedPRs() {
  ghsearch.issues({
    q: 'CleanUpGithub&state=closed',
    state: 'closed'
  }, clientTools.closedToClient)
}

getOpenPRs();
getClosedPRs();

setInterval(getOpenPRs, 10000);
setInterval(getClosedPRs, 10000);
