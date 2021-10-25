/**
 * Skæri, blað, steinn.
 * Spilað gegnum console.
 */

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Global breyta sem heldur utan um heildar sigra */
let wins = 0;

/** Global breyta sem heldur utan um heildar töp */
let losses = 0;

/**
 * Athugar hvort gefin tala sé gild sem best-of gildi.
 * @param {number} bestOf Tala sem skal athuga
 * @return {boolean} true eða false
 */
function isValidBestOf(bestOf) {
  // TODO útfæra
}
// console.assert(isValidBestOf(1) === true, '1 er valid best of');
// console.assert(isValidBestOf(2) === false, '2 er ekki er valid best of');
// console.assert(isValidBestOf(9) === true, '9 er valid best of');

function playAsText(play) {
  if(play == 1) return 'Skæri';
  else if (play == 2) return 'Blað';
  else if (play == 3) return 'Steinn';
  else return 'Óþekkt';
}
// console.assert(playAsText('1') === 'Skæri', '1 táknar skæri');
// console.assert(playAsText('2') === 'Blað', '2 táknar blað');
// console.assert(playAsText('3') === 'Steinn', '3 táknar steinn');
// console.assert(playAsText('foo') === 'Óþekkt', 'Annað er óþekkt');

/**
 * Athugar hvort spilari eða tölva vinnur.
 * @param {number} player Það sem spilari spilaði
 * @param {number} computer Það sem tölva spilaði
 * @returns -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function checkGame(player,  computer) {
  if(player==1 && computer==2) return 1;
  else if(player==2 && computer==3) return 1;
  else if(player==3 && computer==1) return 1;
  else if(player == computer) return 0;
  else return -1;
}
// console.assert(checkGame('1', '2') === 1, 'Skæri vinnur blað');
// console.assert(checkGame('2', '3') === 1, 'Blað vinnur stein');
// console.assert(checkGame('3', '1') === 1, 'Steinn vinnur skæri');
// console.assert(checkGame('1', '1') === 0, 'Skæri og skæri eru jafntefli');
// console.assert(checkGame('1', '3') === -1, 'Skæri tapar fyrir stein');

/**
 * Spilar einn leik.
 * @return {boolean} -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function round(resault) {
  switch (resault){
    case 1: 
      return "Skæri";
    case 2:
      return "Blað";
    case 3:
      return "Stein";
    default:
      return "Ekki valid value";
  }
  // TODO útfæra
  // 1. Spyrja um hvað spilað, ef cancel, hætta
  // 2. Ef ógilt, tölva vinnur
  // 3. Velja gildi fyrir tölvu með `Math.floor(Math.random() * 2 + 1)` sem skilar heiltölu á [1, 3]
  // 4. Nota `checkGame()` til að finna hver vann
  // 5. Birta hver vann
  // 6. Skila hver vann
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Spilar leik og bætir útkomu (sigur eða tap) við í viðeigandi global breytu.
 */
function play() {
  // TODO útfæra
  // 1. Spyrja um fjölda leikja
  // 2. Staðfesta að fjöldi leikja sé gilt gildi
  let countLeik = prompt("Besta af hve mörgum leikju? Verður að vera jákvæð oddatala minni en 10");
  if(countLeik != null && countLeik<10 && countLeik>0 && !isNaN(countLeik)){
  for(let i=countLeik; i>0; i--){
    let player = prompt('Hvað setur þú út? Skær(1), blað(2), eða stein (3)?');
    let computer = Math.floor(Math.random() * 2 + 1);
    console.log("Computer " + computer + " player " + player);
    let resault = checkGame(player, computer);
    console.log("Resault " + resault);
    alert("Þú spilaður " + playAsText(player) +'\n'
      + "Tölva spilaður " + playAsText(computer) +'\n' 
      + (resault == 1 ? "Þú signir" : "Þú tapað") );
    if(resault == 1){
      wins++;
    }else if(resault == -1){
      losses++;
    }else if(resault == 0){

    }
  }
  }else{
    console.log(countLeik + " er ekki löglegt gildi");
  }
  
  // 3. Keyra fjölda leikja og spila umferð þar til sigurvegari er krýndur

  // 4. Birta hvort spilari eða tölva vann
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Birtir stöðu spilara.
 */
function games() {
  if(wins==0 || losses==0){
    console.log("Þú hefur spilað 0 leiki")
  }else{
    console.log("Þú hefur spilað " + (wins + losses) + " leiki");
    console.log("Þú hefur unnið " + wins + " ,eða " + (100*wins/(wins+losses)).toFixed(2) + "% af heild");
    console.log("Þú hefur tapað " + losses + " ,eða " + (100*losses/(wins+losses)).toFixed(2) + "% af heild");
  }
}
// Hér getum við ekki skrifað test þar sem fallið les úr global state
