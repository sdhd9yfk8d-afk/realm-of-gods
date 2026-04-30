const ranks = [
  "Mortal Spirit",
  "Blessed Warrior",
  "Lesser Deity",
  "Divine Champion",
  "High God",
  "Pantheon Lord",
  "Elder God",
  "Cosmic God"
];

const starters = [
  {name:"Stormborn Acolyte",class:"storm",symbol:"⚡",pantheon:"Original",rarity:"Starter",atk:14,def:10,spd:8,cost:0},
  {name:"Sunforged Acolyte",class:"sun",symbol:"☀️",pantheon:"Original",rarity:"Starter",atk:12,def:12,spd:7,cost:0},
  {name:"Moonshadow Acolyte",class:"moon",symbol:"🌙",pantheon:"Original",rarity:"Starter",atk:11,def:10,spd:12,cost:0},
  {name:"Warbound Acolyte",class:"war",symbol:"⚔️",pantheon:"Original",rarity:"Starter",atk:16,def:8,spd:7,cost:0},
  {name:"Oceanborn Acolyte",class:"ocean",symbol:"🌊",pantheon:"Original",rarity:"Starter",atk:10,def:15,spd:6,cost:0},
  {name:"Deathbound Acolyte",class:"death",symbol:"💀",pantheon:"Original",rarity:"Starter",atk:13,def:11,spd:8,cost:0}
];

const godPool = [
  {name:"Zeus",class:"storm",pantheon:"Greek",symbol:"⚡",rarity:"Legendary",atk:45,def:32,spd:20,cost:300},
  {name:"Athena",class:"moon",pantheon:"Greek",symbol:"🛡️",rarity:"Epic",atk:30,def:42,spd:18,cost:220},
  {name:"Ares",class:"war",pantheon:"Greek",symbol:"⚔️",rarity:"Epic",atk:42,def:24,spd:21,cost:220},
  {name:"Poseidon",class:"ocean",pantheon:"Greek",symbol:"🌊",rarity:"Epic",atk:35,def:34,spd:17,cost:240},
  {name:"Hades",class:"death",pantheon:"Greek",symbol:"💀",rarity:"Legendary",atk:44,def:38,spd:16,cost:320},
  {name:"Apollo",class:"sun",pantheon:"Greek",symbol:"🏹",rarity:"Epic",atk:38,def:27,spd:24,cost:245},
  {name:"Artemis",class:"moon",pantheon:"Greek",symbol:"🌙",rarity:"Epic",atk:37,def:30,spd:25,cost:245},
  {name:"Hera",class:"nature",pantheon:"Greek",symbol:"👑",rarity:"Epic",atk:29,def:44,spd:16,cost:240},

  {name:"Odin",class:"moon",pantheon:"Norse",symbol:"🪶",rarity:"Legendary",atk:40,def:40,spd:18,cost:300},
  {name:"Thor",class:"storm",pantheon:"Norse",symbol:"🔨",rarity:"Legendary",atk:48,def:34,spd:16,cost:320},
  {name:"Loki",class:"death",pantheon:"Norse",symbol:"🃏",rarity:"Epic",atk:36,def:25,spd:28,cost:230},
  {name:"Freya",class:"nature",pantheon:"Norse",symbol:"✨",rarity:"Epic",atk:32,def:36,spd:21,cost:230},
  {name:"Tyr",class:"war",pantheon:"Norse",symbol:"🗡️",rarity:"Epic",atk:40,def:34,spd:18,cost:250},
  {name:"Heimdall",class:"sun",pantheon:"Norse",symbol:"📯",rarity:"Epic",atk:31,def:43,spd:18,cost:250},

  {name:"Ra",class:"sun",pantheon:"Egyptian",symbol:"☀️",rarity:"Legendary",atk:46,def:30,spd:19,cost:310},
  {name:"Anubis",class:"death",pantheon:"Egyptian",symbol:"☥",rarity:"Epic",atk:34,def:40,spd:17,cost:240},
  {name:"Isis",class:"moon",pantheon:"Egyptian",symbol:"🌙",rarity:"Epic",atk:28,def:42,spd:18,cost:230},
  {name:"Osiris",class:"nature",pantheon:"Egyptian",symbol:"🌿",rarity:"Legendary",atk:38,def:44,spd:16,cost:310},
  {name:"Horus",class:"sun",pantheon:"Egyptian",symbol:"👁️",rarity:"Epic",atk:37,def:33,spd:22,cost:245},
  {name:"Set",class:"war",pantheon:"Egyptian",symbol:"🌪️",rarity:"Epic",atk:43,def:25,spd:23,cost:250},

  {name:"Amaterasu",class:"sun",pantheon:"Japanese",symbol:"🌅",rarity:"Legendary",atk:43,def:39,spd:20,cost:320},
  {name:"Susanoo",class:"storm",pantheon:"Japanese",symbol:"🌪️",rarity:"Epic",atk:40,def:28,spd:22,cost:240},
  {name:"Tsukuyomi",class:"moon",pantheon:"Japanese",symbol:"🌕",rarity:"Epic",atk:35,def:35,spd:23,cost:250},

  {name:"Quetzalcoatl",class:"ocean",pantheon:"Aztec",symbol:"🐍",rarity:"Legendary",atk:44,def:36,spd:22,cost:330},
  {name:"Huitzilopochtli",class:"war",pantheon:"Aztec",symbol:"🦅",rarity:"Legendary",atk:50,def:28,spd:21,cost:340},

  {name:"Cernunnos",class:"nature",pantheon:"Celtic",symbol:"🦌",rarity:"Epic",atk:32,def:38,spd:20,cost:255},
  {name:"The Morrigan",class:"death",pantheon:"Celtic",symbol:"🕊️",rarity:"Legendary",atk:45,def:33,spd:24,cost:335}
];

const relics = [
  {name:"Thunderbolt Relic",bonus:"All gods gain +10% attack.",cost:250,owned:false,type:"atk"},
  {name:"Aegis Shield",bonus:"All gods gain +10% defense.",cost:250,owned:false,type:"def"},
  {name:"Winged Sandals",bonus:"All gods gain +10% speed.",cost:250,owned:false,type:"spd"},
  {name:"Crown of Worship",bonus:"Temple offerings give +25% Faith.",cost:350,owned:false,type:"temple"},
  {name:"Cosmic Rune",bonus:"Battle rewards give +25% Faith.",cost:500,owned:false,type:"battle"},
  {name:"Oracle Mirror",bonus:"Oracle rewards give extra Essence.",cost:650,owned:false,type:"oracle"},
  {name:"Titan Chain",bonus:"Boss fights give extra Favor.",cost:800,owned:false,type:"boss"}
];

const goals = [
  {id:"firstGod",name:"Recruit Your First God",desc:"Own 2 total characters.",reward:{faith:150,essence:5}},
  {id:"firstWin",name:"First Victory",desc:"Win 1 battle.",reward:{faith:200,favor:10}},
  {id:"fiveWins",name:"Rising Pantheon",desc:"Win 5 battles.",reward:{faith:500,essence:25}},
  {id:"tenGods",name:"Collector",desc:"Own 10 gods.",reward:{faith:750,essence:40}},
  {id:"bossWin",name:"Titan Slayer",desc:"Defeat 1 boss.",reward:{faith:1000,favor:50,essence:50}},
  {id:"temple5",name:"Sacred Temple",desc:"Reach Temple Level 5.",reward:{faith:1200,favor:40}}
];

let game = {
  faith: 250,
  favor: 20,
  worshippers: 50,
  essence: 0,
  templeLevel: 1,
  wins: 0,
  losses: 0,
  bossWins: 0,
  lineup: [],
  gods: [],
  claimedGoals: [],
  lastOracle: 0
};

let battleState = {
  active: false,
  hard: false,
  boss: false,
  playerTeam: [],
  enemyTeam: [],
  turn: 0
};

function newGod(base){
  const hp = 100 + base.def * 3;
  return {
    ...base,
    level: 1,
    rank: 0,
    xp: 0,
    hp,
    maxHp: hp
  };
}

function saveGame(showAlert = false){
  localStorage.setItem("realmOfGodsSaveV2", JSON.stringify({game, relics}));
  if(showAlert) alert("Game saved.");
}

function loadGame(){
  const save = localStorage.getItem("realmOfGodsSaveV2");
  if(!save) return;

  try{
    const data = JSON.parse(save);
    if(data.game) game = {...game, ...data.game};
    if(data.relics){
      data.relics.forEach((savedRelic, i) => {
        if(relics[i]) relics[i].owned = savedRelic.owned;
      });
    }
  }catch(e){
    alert("Save data was corrupted. Starting new save.");
  }
}

function resetGame(){
  if(confirm("Reset your Realm of Gods save?")){
    localStorage.removeItem("realmOfGodsSaveV2");
    location.reload();
  }
}

function exportSave(){
  document.getElementById("saveBox").value = btoa(JSON.stringify({game, relics}));
}

function importSave(){
  const box = document.getElementById("saveBox").value.trim();
  if(!box){
    alert("Paste save data first.");
    return;
  }

  try{
    const data = JSON.parse(atob(box));
    game = data.game;
    if(data.relics){
      data.relics.forEach((savedRelic, i) => {
        if(relics[i]) relics[i].owned = savedRelic.owned;
      });
    }
    saveGame();
    render();
    alert("Save imported.");
  }catch(e){
    alert("Invalid save data.");
  }
}

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const screen = document.getElementById(id);
  if(screen) screen.classList.add("active");
  render();
}

function portrait(g, mini = false){
  return `
    <div class="${mini ? "mini" : "portrait"} ${g.class}">
      <div class="symbol">${g.symbol}</div>
      <div class="head"></div>
      <div class="body"></div>
    </div>
  `;
}

function chooseStarter(i){
  game.gods.push(newGod(starters[i]));
  game.lineup = [0];
  saveGame();
  render();
}

function relicOwned(type){
  return relics.some(r => r.type === type && r.owned);
}

function totalPower(){
  const atkB = relicOwned("atk") ? 1.1 : 1;
  const defB = relicOwned("def") ? 1.1 : 1;
  const spdB = relicOwned("spd") ? 1.1 : 1;

  return Math.floor(game.gods.reduce((sum,g)=>{
    return sum + (g.atk * atkB) + (g.def * defB) + (g.spd * spdB) + g.level * 15 + g.rank * 35;
  },0));
}

function godPower(g){
  return g.atk + g.def + g.spd + g.level * 15 + g.rank * 35;
}

function getTrainCost(g){
  return 35 + g.level * 25 + g.rank * 60;
}

function getAscendCost(g){
  return (g.rank + 1) * 50;
}

function summonGod(i){
  const base = godPool[i];

  if(game.gods.length >= 25){
    alert("Roster full. Max 25 gods.");
    return;
  }

  if(game.faith < base.cost){
    alert(`Not enough Faith. Need ${base.cost}.`);
    return;
  }

  game.faith -= base.cost;

  if(game.gods.some(g => g.name === base.name)){
    game.essence += 25;
    alert("Duplicate god converted into 25 Divine Essence.");
  } else {
    game.gods.push(newGod(base));
  }

  saveGame();
  render();
}

function trainGod(i){
  const g = game.gods[i];
  const cost = getTrainCost(g);

  if(game.faith < cost){
    alert(`Not enough Faith. Need ${cost}.`);
    return;
  }

  game.faith -= cost;
  levelGod(g, 1);
  saveGame();
  render();
}

function trainMax(i){
  const g = game.gods[i];
  let trained = 0;

  while(game.faith >= getTrainCost(g) && trained < 20){
    game.faith -= getTrainCost(g);
    levelGod(g, 1);
    trained++;
  }

  if(trained === 0) alert("Not enough Faith.");
  saveGame();
  render();
}

function levelGod(g, amount){
  for(let x=0; x<amount; x++){
    g.level++;
    g.atk += 3;
    g.def += 2;
    g.spd += 1;
    g.maxHp += 12;
    g.hp = g.maxHp;

    if(g.level % 5 === 0 && g.rank < ranks.length - 1){
      g.rank++;
      g.atk += 6;
      g.def += 5;
      g.maxHp += 25;
      g.hp = g.maxHp;
    }
  }
}

function ascendGod(i){
  const g = game.gods[i];
  const cost = getAscendCost(g);

  if(g.rank >= ranks.length - 1){
    alert("This god is already max rank.");
    return;
  }

  if(game.essence < cost){
    alert(`Not enough Essence. Need ${cost}.`);
    return;
  }

  game.essence -= cost;
  g.rank++;
  g.atk += 10;
  g.def += 8;
  g.spd += 3;
  g.maxHp += 50;
  g.hp = g.maxHp;

  saveGame();
  render();
}

function toggleLineup(i){
  if(game.lineup.includes(i)){
    game.lineup = game.lineup.filter(x => x !== i);
  } else {
    if(game.lineup.length >= 3){
      alert("Only 3 gods can fight at once.");
      return;
    }
    game.lineup.push(i);
  }

  saveGame();
  render();
}

function collectOfferings(){
  const bonus = relicOwned("temple") ? 1.25 : 1;
  const faithGain = Math.floor((75 + game.templeLevel * 30 + game.worshippers * 0.15) * bonus);
  const worshipGain = 10 + game.templeLevel * 5;

  game.faith += faithGain;
  game.worshippers += worshipGain;

  alert(`Collected ${faithGain} Faith and ${worshipGain} Worshippers.`);
  saveGame();
  render();
}

function upgradeTemple(){
  const cost = game.templeLevel * 150;

  if(game.faith < cost){
    alert(`Not enough Faith. Need ${cost}.`);
    return;
  }

  game.faith -= cost;
  game.templeLevel++;
  saveGame();
  render();
}

function healAll(){
  const cost = 50 + game.templeLevel * 10;

  if(game.faith < cost){
    alert(`Healing Shrine costs ${cost} Faith.`);
    return;
  }

  game.faith -= cost;
  game.gods.forEach(g => g.hp = g.maxHp);

  saveGame();
  render();
  alert("All gods healed.");
}

function claimOracle(){
  const now = Date.now();
  const oneDay = 86400000;

  if(now - game.lastOracle < oneDay){
    const hours = Math.ceil((oneDay - (now - game.lastOracle)) / 3600000);
    document.getElementById("oracleStatus").innerHTML = `Oracle already claimed. Come back in about ${hours} hour(s).`;
    alert("Oracle reward already claimed today.");
    return;
  }

  const essenceBonus = relicOwned("oracle") ? 15 : 0;

  game.lastOracle = now;
  game.faith += 300;
  game.favor += 25;
  game.essence += 10 + essenceBonus;

  document.getElementById("oracleStatus").innerHTML = "Oracle granted 300 Faith, 25 Favor, and Essence.";
  saveGame();
  render();
}

function buyRelic(i){
  const r = relics[i];

  if(r.owned){
    alert("Already owned.");
    return;
  }

  if(game.faith < r.cost){
    alert(`Not enough Faith. Need ${r.cost}.`);
    return;
  }

  game.faith -= r.cost;
  r.owned = true;

  saveGame();
  render();
}

function prepareBattle(hard){
  if(game.lineup.length < 1){
    alert("Choose at least one god in Lineup.");
    return;
  }

  showScreen("battle");

  battleState = {
    active: false,
    hard,
    boss: false,
    turn: 0,
    playerTeam: game.lineup.map(i => ({
      ...game.gods[i],
      origin: i,
      side: "player",
      hp: game.gods[i].hp,
      maxHp: game.gods[i].maxHp
    })),
    enemyTeam: [...godPool]
      .sort(() => Math.random() - 0.5)
      .slice(0,3)
      .map(g => {
        const boost = hard ? 1.55 + game.wins * 0.03 : 1.05 + game.wins * 0.02;
        return {
          ...g,
          side: "enemy",
          level: game.wins + (hard ? 3 : 1),
          rank: hard ? 1 : 0,
          hp: Math.floor((100 + g.def * 3) * boost),
          maxHp: Math.floor((100 + g.def * 3) * boost),
          atk: Math.floor(g.atk * boost),
          def: Math.floor(g.def * boost),
          spd: Math.floor(g.spd * boost)
        };
      })
  };

  document.getElementById("battleLog").innerHTML = hard
    ? "A stronger rival pantheon appeared."
    : "A rival pantheon appeared.";

  renderBattleTeams();
}

function prepareBoss(name){
  if(game.lineup.length < 1){
    alert("Choose at least one god in Lineup.");
    return;
  }

  showScreen("battle");

  const bosses = {
    Typhon:{name:"Typhon",class:"death",pantheon:"Titan",symbol:"🐉",atk:74,def:52,spd:18},
    Jormungandr:{name:"Jormungandr",class:"ocean",pantheon:"World Serpent",symbol:"🐍",atk:66,def:60,spd:16},
    Apophis:{name:"Apophis",class:"death",pantheon:"Chaos Serpent",symbol:"🌑",atk:80,def:45,spd:21}
  };

  const b = bosses[name] || bosses.Typhon;
  const hp = 700 + game.bossWins * 90 + game.wins * 25;

  battleState = {
    active: false,
    hard: true,
    boss: true,
    turn: 0,
    playerTeam: game.lineup.map(i => ({
      ...game.gods[i],
      origin: i,
      side: "player",
      hp: game.gods[i].hp,
      maxHp: game.gods[i].maxHp
    })),
    enemyTeam: [{
      ...b,
      rarity:"Boss",
      side:"enemy",
      level:game.wins + 5,
      rank:2,
      hp,
      maxHp:hp,
      atk:b.atk + game.bossWins * 6,
      def:b.def + game.bossWins * 4,
      spd:b.spd
    }]
  };

  document.getElementById("battleLog").innerHTML = `${b.name} has entered the realm.`;
  renderBattleTeams();
}

function startBattle(){
  if(battleState.playerTeam.length === 0){
    prepareBattle(false);
  }

  if(battleState.active) return;

  battleState.active = true;
  document.getElementById("battleLog").innerHTML += "<p class='gold'>Battle begins.</p>";
  battleLoop();
}

function living(team){
  return team.filter(g => g.hp > 0);
}

function battleLoop(){
  if(!battleState.active) return;

  const players = living(battleState.playerTeam);
  const enemies = living(battleState.enemyTeam);

  if(players.length === 0){
    finishBattle(false);
    return;
  }

  if(enemies.length === 0){
    finishBattle(true);
    return;
  }

  const all = [...players, ...enemies].sort((a,b) => b.spd - a.spd);
  const attacker = all[battleState.turn % all.length];
  const targets = attacker.side === "player" ? enemies : players;
  const target = targets[Math.floor(Math.random() * targets.length)];

  attack(attacker, target);
  battleState.turn++;

  setTimeout(battleLoop, 750);
}

function attack(a,t){
  const dodgeChance = Math.min(0.22, t.spd / 300);
  const crit = Math.random() < 0.12 + (a.spd / 1000);

  if(Math.random() < dodgeChance){
    log(`<p>${t.name} dodged ${a.name}'s attack.</p>`);
    flashFighter(a, a.side === "player" ? "attack-left" : "attack-right");
    return;
  }

  let damage = Math.max(5, Math.floor(a.atk + Math.random() * 22 - t.def * 0.25));
  if(crit) damage *= 2;

  t.hp = Math.max(0, t.hp - damage);

  const attackerEl = document.getElementById(fighterId(a));
  const targetEl = document.getElementById(fighterId(t));

  if(attackerEl) flashFighter(a, a.side === "player" ? "attack-left" : "attack-right");

  if(targetEl){
    showDamage(targetEl, damage);
    showEffect(targetEl, a.symbol);
  }

  log(`<p>${a.name} hits ${t.name} for <span class="bad">${damage}</span>${crit ? " <span class='gold'>CRIT</span>" : ""}.</p>`);
  renderBattleTeams();
}

function flashFighter(g, cls){
  const el = document.getElementById(fighterId(g));
  if(!el) return;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove("attack-left","attack-right"), 300);
}

function fighterId(g){
  return `${g.side}-${g.name.replaceAll(" ","").replaceAll("'","")}`;
}

function log(html){
  const box = document.getElementById("battleLog");
  box.innerHTML += html;
  box.scrollTop = box.scrollHeight;
}

function finishBattle(won){
  battleState.active = false;

  battleState.playerTeam.forEach(p => {
    if(p.origin !== undefined && game.gods[p.origin]){
      game.gods[p.origin].hp = Math.max(1, Math.floor(p.hp));
    }
  });

  if(won){
    game.wins++;
    if(battleState.boss) game.bossWins++;

    const multiplier = battleState.boss ? 3 : battleState.hard ? 1.8 : 1;
    const rewardBonus = relicOwned("battle") ? 1.25 : 1;
    const bossFavorBonus = relicOwned("boss") && battleState.boss ? 25 : 0;

    const faithReward = Math.floor(130 * multiplier * rewardBonus);
    const worshipReward = Math.floor(25 * multiplier);
    const essenceReward = battleState.boss ? 35 : battleState.hard ? 15 : 5;
    const favorReward = battleState.boss ? 20 + bossFavorBonus : 5;

    game.faith += faithReward;
    game.worshippers += worshipReward;
    game.essence += essenceReward;
    game.favor += favorReward;

    game.lineup.forEach(i => {
      const g = game.gods[i];
      g.xp += battleState.boss ? 75 : battleState.hard ? 40 : 20;

      while(g.xp >= 100){
        g.xp -= 100;
        levelGod(g, 1);
      }
    });

    log(`<p class="good">Victory. Rewards: ${faithReward} Faith, ${worshipReward} Worshippers, ${essenceReward} Essence, ${favorReward} Favor.</p>`);
  } else {
    game.losses++;
    const lost = Math.min(game.faith, battleState.hard ? 90 : 45);
    game.faith -= lost;
    log(`<p class="bad">Defeat. Lost ${lost} Faith. Use the Healing Shrine.</p>`);
  }

  saveGame();
  render();
}

function showDamage(el, amount){
  const arena = document.getElementById("arena");
  const r = el.getBoundingClientRect();
  const ar = arena.getBoundingClientRect();

  const d = document.createElement("div");
  d.className = "damage";
  d.innerText = "-" + amount;
  d.style.left = (r.left - ar.left + r.width / 2) + "px";
  d.style.top = (r.top - ar.top + 15) + "px";

  arena.appendChild(d);
  setTimeout(() => d.remove(), 1000);
}

function showEffect(el, symbol){
  const arena = document.getElementById("arena");
  const r = el.getBoundingClientRect();
  const ar = arena.getBoundingClientRect();

  const e = document.createElement("div");
  e.className = "effect";
  e.innerText = symbol;
  e.style.left = (r.left - ar.left + r.width / 2 - 20) + "px";
  e.style.top = (r.top - ar.top + 35) + "px";

  arena.appendChild(e);
  setTimeout(() => e.remove(), 900);
}

function fighterHTML(g){
  const hp = Math.max(0, Math.floor((g.hp / g.maxHp) * 100));

  return `
    <div class="fighter" id="${fighterId(g)}">
      ${portrait(g,true)}
      <div style="width:100%">
        <h4>${g.name}</h4>
        <p class="muted">${g.pantheon} • Lv ${g.level || 1}</p>
        <div class="hp-bar"><div class="hp-fill" style="width:${hp}%"></div></div>
        <p class="muted">${Math.floor(g.hp)} / ${g.maxHp} HP</p>
      </div>
    </div>
  `;
}

function renderBattleTeams(){
  document.getElementById("playerTeam").innerHTML = battleState.playerTeam.map(fighterHTML).join("");
  document.getElementById("enemyTeam").innerHTML = battleState.enemyTeam.map(fighterHTML).join("");
}

function renderStarters(){
  document.getElementById("starterChoices").innerHTML = starters.map((g,i)=>`
    <div class="card">
      ${portrait(g)}
      <h3>${g.name}</h3>
      <p>Original Starter</p>
      <div class="stats-grid">
        <div>Attack: ${g.atk}</div>
        <div>Defense: ${g.def}</div>
        <div>Speed: ${g.spd}</div>
        <div>Style: ${g.class}</div>
      </div>
      <button onclick="chooseStarter(${i})">Choose Starter</button>
    </div>
  `).join("");
}

function renderSummon(){
  document.getElementById("summonList").innerHTML = godPool.map((g,i)=>`
    <div class="card">
      ${portrait(g)}
      <h3>${g.name}</h3>
      <p>${g.pantheon} • ${g.rarity}</p>
      <div class="stats-grid">
        <div>Attack: ${g.atk}</div>
        <div>Defense: ${g.def}</div>
        <div>Speed: ${g.spd}</div>
        <div>Cost: ${g.cost}</div>
      </div>
      <button onclick="summonGod(${i})">Summon - ${g.cost} Faith</button>
    </div>
  `).join("");
}

function renderOwned(){
  const box = document.getElementById("ownedGods");

  if(game.gods.length === 0){
    box.innerHTML = `<div class="card"><h3>No gods yet.</h3></div>`;
    return;
  }

  box.innerHTML = game.gods.map((g,i)=>`
    <div class="card">
      ${portrait(g)}
      <h3>${g.name}</h3>
      <p>${g.pantheon} • ${g.rarity}</p>
      <p class="rank">${ranks[g.rank]}</p>
      <div class="stats-grid">
        <div>Level: ${g.level}</div>
        <div>XP: ${g.xp}/100</div>
        <div>ATK: ${g.atk}</div>
        <div>DEF: ${g.def}</div>
        <div>SPD: ${g.spd}</div>
        <div>HP: ${Math.floor(g.hp)}/${g.maxHp}</div>
      </div>
      <button onclick="trainGod(${i})">Train - ${getTrainCost(g)} Faith</button>
      <button onclick="ascendGod(${i})">Ascend - ${getAscendCost(g)} Essence</button>
    </div>
  `).join("");
}

function renderTraining(){
  document.getElementById("trainingList").innerHTML = game.gods.map((g,i)=>`
    <div class="card">
      ${portrait(g)}
      <h3>${g.name}</h3>
      <p class="rank">${ranks[g.rank]}</p>
      <p>Training Cost: ${getTrainCost(g)} Faith</p>
      <div class="stats-grid">
        <div>Level: ${g.level}</div>
        <div>Power: ${godPower(g)}</div>
        <div>XP: ${g.xp}/100</div>
        <div>HP: ${g.hp}/${g.maxHp}</div>
      </div>
      <button onclick="trainGod(${i})">Train Once</button>
      <button onclick="trainMax(${i})">Train Max</button>
    </div>
  `).join("");
}

function renderLineup(){
  document.getElementById("lineupList").innerHTML = game.gods.map((g,i)=>`
    <div class="card">
      ${portrait(g)}
      <h3>${g.name}</h3>
      <p>${game.lineup.includes(i) ? "In Lineup" : "Temple Reserve"}</p>
      <p class="muted">Power: ${godPower(g)}</p>
      <button onclick="toggleLineup(${i})">${game.lineup.includes(i) ? "Remove" : "Add to Lineup"}</button>
    </div>
  `).join("");
}

function renderRelics(){
  document.getElementById("relicList").innerHTML = relics.map((r,i)=>`
    <div class="card">
      <h3>${r.name}</h3>
      <p>${r.bonus}</p>
      <p>Cost: ${r.cost} Faith</p>
      <button onclick="buyRelic(${i})">${r.owned ? "Owned" : "Buy Relic"}</button>
    </div>
  `).join("");
}

function goalComplete(goal){
  if(goal.id === "firstGod") return game.gods.length >= 2;
  if(goal.id === "firstWin") return game.wins >= 1;
  if(goal.id === "fiveWins") return game.wins >= 5;
  if(goal.id === "tenGods") return game.gods.length >= 10;
  if(goal.id === "bossWin") return game.bossWins >= 1;
  if(goal.id === "temple5") return game.templeLevel >= 5;
  return false;
}

function claimGoal(id){
  const goal = goals.find(g => g.id === id);
  if(!goal) return;

  if(game.claimedGoals.includes(id)){
    alert("Goal already claimed.");
    return;
  }

  if(!goalComplete(goal)){
    alert("Goal not completed yet.");
    return;
  }

  if(goal.reward.faith) game.faith += goal.reward.faith;
  if(goal.reward.favor) game.favor += goal.reward.favor;
  if(goal.reward.essence) game.essence += goal.reward.essence;

  game.claimedGoals.push(id);
  saveGame();
  render();
}

function renderGoals(){
  document.getElementById("goalList").innerHTML = goals.map(g=>{
    const done = goalComplete(g);
    const claimed = game.claimedGoals.includes(g.id);

    return `
      <div class="card">
        <h3>${g.name}</h3>
        <p>${g.desc}</p>
        <p class="muted">Reward: ${
          Object.entries(g.reward).map(([k,v]) => `${v} ${k}`).join(", ")
        }</p>
        <button onclick="claimGoal('${g.id}')">${claimed ? "Claimed" : done ? "Claim Reward" : "Incomplete"}</button>
      </div>
    `;
  }).join("");
}

function render(){
  document.getElementById("starterOverlay").style.display = game.gods.length ? "none" : "flex";

  document.getElementById("faith").innerText = game.faith;
  document.getElementById("favor").innerText = game.favor;
  document.getElementById("worshippers").innerText = game.worshippers;
  document.getElementById("essence").innerText = game.essence;
  document.getElementById("power").innerText = totalPower();

  document.getElementById("templeLevel").innerText = game.templeLevel;
  document.getElementById("ownedCount").innerText = game.gods.length;
  document.getElementById("wins").innerText = game.wins;
  document.getElementById("losses").innerText = game.losses;

  renderStarters();
  renderSummon();
  renderOwned();
  renderTraining();
  renderLineup();
  renderRelics();
  renderGoals();
}

loadGame();
render();
