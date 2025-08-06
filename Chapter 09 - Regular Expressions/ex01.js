// Fill in the regular expressions
verify(/ca(r|t)/i,
       ["my car", "bad cats"],
       ["camper", "high art"]);
verify(/ca[rt]/i,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/i,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/i,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\b\w*ious\b/i,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/\b[a-z]{7,}\b/i,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

//Author did the last one:
verify(/(^|\P{L})[^\P{L}e]+($|\P{L})/ui,
       ["red platypus", "wobbling nest"],
       ["earth bed", "bedrøvet abe", "BEET"]);


function verify(regexp, yes, no)
{
    if (regexp.source == "...")
        return;
    for (let str of yes) if (!regexp.test(str))
        console.log(`Failure to match '${str}'`);
    for (let str of no) if (regexp.test(str))
        console.log(`Unexpected match for '${str}'`);
}