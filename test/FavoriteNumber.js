const FavoriteNumber = artifacts.require('./FavoriteNumber');

contract("FavoriteNumber",accounts => {
 it("should chnage the favorite number in the blockchain", async () => {
  const Contract = await FavoriteNumber.deployed();
  // là on lui dit qu'il doit regarder que le nombre doit être changé pour 47
  // 'from:' à partir du premier compte dispo sur la blockchain de test de truffle 
  const result = await Contract.setFavoriteNumber(47, {from: accounts[0]})
 })
 it('should get the favorite number in the blockchain', async () => {
  const Contract = await FavoriteNumber.deployed();
  const number = await Contract.getFavoriteNumber();
  // console.log(number); // ouptout
  // un objet , avec un tableau qui effectivement , contient le chiffre 47
  // BN { negative: 0, words: [ 47, <1 empty item> ], length: 1, red: null }
  // donc comme dans un objet normal , on fait .words[premierElmntDuTableau( soit "0")]
  assert.equal(number.words[0], 47, 'not equal to 47');
 })
})