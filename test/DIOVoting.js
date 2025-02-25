const { expect } = require("chai");
const  hre  = require("hardhat");

describe("DIOVoting contract", function () {
    it("Should deploy the DIOVoting contract", async function () {
        const candidateList = ["Thiago", "Iara", "Eder"];
        const dioVoting = await hre.ethers.deployContract("DIOVoting", [candidateList]);
    
        expect(dioVoting.getAddress).to.not.be.undefined;
    });

    it("Should insert 3 candidates", async function () {
        const candidateList = ["Thiago", "Iara", "Eder"];
        const dioVoting = await hre.ethers.deployContract("DIOVoting", [candidateList]);

        // await dioVoting.addCandidate("Thiago");
        // await dioVoting.addCandidate("Iara");
        // await dioVoting.addCandidate("Eder");

        const candidates = await dioVoting.getCandidateList();
        expect(candidates.length).to.equal(3);
        expect(candidates).to.include.members(["Thiago", "Iara", "Eder"]);
    });

    it("Should vote for a candidate", async function () {
        const candidateList = ["Thiago", "Iara", "Eder"];
        const dioVoting = await hre.ethers.deployContract("DIOVoting", [candidateList]);

        const candidate = "Thiago";

        await dioVoting.voteForCandidate(candidate);

        const votes = await dioVoting.totalVotesFor(candidate);
        expect(votes).to.equal(1);
    });

    it("Should not vote for a non-existing candidate", async function () {
        const candidateList = ["Thiago"];
        const dioVoting = await hre.ethers.deployContract("DIOVoting", [candidateList]);

        expect(await dioVoting.voteForCandidate("Iara")).to.be.equal(false);
    });

    
});