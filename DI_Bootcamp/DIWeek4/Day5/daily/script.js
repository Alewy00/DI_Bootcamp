let sentence = "The movie is not that bad, I like it";

sentence = sentence.replace(",", "");
sentence = sentence.split(" ");

wordNot = sentence.indexOf("not");

// console.log(wordNot)

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

wordBad = sentence.indexOf("bad");

// console.log(wordBad)

if (wordBad > wordNot) {
  sentence.splice(3, 3, "good,");
  console.log(sentence.join(" "));
} else if (wordBad === -1) {
  console.log(sentence.join(" "));
} else {
  console.log(sentence.join(" "));
}
