const FavoriteNumber = artifacts.require("FavoriteNumber");

module.exports = function (deployer) {
  deployer.deploy(FavoriteNumber);
  // si parametre à passer dans le constructueur c'est ici 'param'
  // deployer.deploy(Migrations,'param');
};
