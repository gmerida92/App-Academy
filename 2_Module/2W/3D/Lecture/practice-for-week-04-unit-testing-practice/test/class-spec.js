const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    let noun = new Word("word")
    it('should have a "word" property', function () {
      expect(noun).to.have.keys("word")
      // expect(noun.word).to.exist
      // expect(noun.word).to.equal("word")
    });






































    it('should set the "word" property when a new word is created', function () {
      expect(noun.word).to.equal("word")
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let noun = new Word("word")
      let shouldBeCorrect = "wrd"
      expect(noun.removeVowels()).to.equal(shouldBeCorrect);
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let noun = new Word("word")
      let shouldBeCorrect = "o"
      expect(noun.removeConsonants()).to.equal(shouldBeCorrect);
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let noun = new Word("word")
      let shouldBeCorrect = "ordway"
      expect(noun.pigLatin()).to.equal(shouldBeCorrect);
    });
  });
});
