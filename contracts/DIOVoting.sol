// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "hardhat/console.sol";

contract DIOVoting {
    mapping(string => uint256) public votesReceived;
    string[] public candidateList;

    constructor(string[] memory candidateNames) {
        candidateList = candidateNames;
    }

    function addCandidate(string memory candidate) public {
        candidateList.push(candidate);
    }

    function voteForCandidate(string memory candidate) public {
        require(validCandidate(candidate));
        votesReceived[candidate] += 1;
    }

    function totalVotesFor(string memory candidate) public view returns (uint256) {
        require(validCandidate(candidate));
        return votesReceived[candidate];
    }

    function validCandidate(string memory candidate) public view returns (bool) {
        for (uint i = 0; i < candidateList.length; i++) {
            if (keccak256(abi.encodePacked(candidateList[i])) == keccak256(abi.encodePacked(candidate))) {
                return true;
            }
        }
        return false;
    }

    function getCandidateList() public view returns (string[] memory) {
        console.log("Number of candidates is %s", candidateList.length);
        return candidateList;
    }
}