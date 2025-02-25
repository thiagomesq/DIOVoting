const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DIOVotingModule", (m) => {
    const deployer = m.getAccount(0);
    const DIOVoting = m.contract("DIOVoting", [[]], {
        from: deployer,
    });
    return { DIOVoting };
});