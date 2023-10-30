
const FizzBuzz = require('./fizzbuzz1')

describe("replace number",() => {
    it("Checks 1", () => {
        let Index = FizzBuzz (1)

        expect(Index).toEqual('1')
    })
    it("Checks 3", () => {
        let Index = FizzBuzz (3)

        expect(Index).toEqual('FizzFizz')
    })
    it("Checks 6", () => {
        let Index = FizzBuzz (6)

        expect(Index).toEqual('Fizz')
    })
    it("Checks 13", () => {
        let Index = FizzBuzz (13)

        expect(Index).toEqual('Fizz')
    })
    it("Checks 5", () => {
        let Index = FizzBuzz (5)

        expect(Index).toEqual('BuzzBuzz')
    })
    it("Checks 10", () => {
        let Index = FizzBuzz (10)

        expect(Index).toEqual('Buzz')
    })
    it("Checks 52", () => {
        let Index = FizzBuzz (52)

        expect(Index).toEqual('Buzz')
    })
    it("Checks 60", () => {
        let Index = FizzBuzz (60)

        expect(Index).toEqual('FizzBuzz')
    })
    it("Checks 51", () => {
        let Index = FizzBuzz (51)

        expect(Index).toEqual('FizzBuzz')
    })
    it("Checks 30", () => {
        let Index = FizzBuzz (30)

        expect(Index).toEqual('FizzFizzBuzz')
    })
    it("Checks 15", () => {
        let Index = FizzBuzz (15)

        expect(Index).toEqual('FizzBuzzBuzz')
    })



})