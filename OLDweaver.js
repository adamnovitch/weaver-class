/* Weaver Class */

var iFileName = "Weaver.js";
RequiredSheetVersion(12.999);

//sourceList["AN:WV"] = {
//	name : "adn0v: Weaver Class",
//	abbreviation : "an:wv",
//	group : "adn0v Homebrew",
//	url : "https://www.gmbinder.com/share/-LEHdRqAQc4x9T0zgUNT",
//	date : "2018/6/8"
//};


ClassList.weaver = {
	regExpSearch : /eaver/i,
	name : "Weaver",
	//source : ["AN:WV",1],
	primaryAbility : "\n \u2022 Weaver: Strength or Dexterity, and Wisdom;",
	abilitySave : 5,
	prereqs : "\n \u2022 Weaver: Wisdom 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Str", "Wis"],
	skills : ["\n\n" + toUni("Weaver") + ": Choose two from Acrobatics, Arcana, Athletics, Religion, and Perception."],
	toolProfs : {
		primary : [["One Artisan's Tool of you choice",1]]
	},
	armor : [
		[true, true, false, false]
	],
	weapons : [
		[true, false, ["shortsword","scimitar","longsword","longbow"] ]
	],
	equipment : "Weaver starting equipment:\n \u2022 Leather Armor;\n \u2022 A martial weapon -or- a simple weapon;\n \u2022 A longbow and 20 arrows -or- a martial melee weapon;\n \u2022 An explorer's pack.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Weaver Path", ["weaver-guardian", "weaver-sage", "weaver-sentinel"]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor : ["psionics0",1],
	spellcastingKnown : {
		cantrips : levels.map(function (n) { return n < 3 ? 1 : n < 7 ? 2 : n < 9 ? 3 : n < 11 ? 4 : 5; }),
		spells : levels.map(function (n) { return n < 3 ? 1 : n < 7 ? 2 : n < 12 ? 3 : n < 17 ? 4 : 5; })
	},
	features : {
		"mana points" : {
			name : "Mana Points",
			minlevel : 1,
			description : desc([
				"I use mana points to cast spells and perform magical abilities, up to my mana limit"
			]),
			usages : levels.map(function (n) {
				return n < 3 ? 4 : n < 5 ? 6 : n < 7 ? 14 : n < 9 ? 17 :
				n < 11 ? 27 : n < 13 ? 32 : n < 15 ? 38 : n < 17 ? 44 : n < 19 ? 57 : 64;
			}),
			recovery : "long rest",
			additional : levels.map(function (n) {
				return (n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 5 : n < 9 ? 6 : n < 11 ? 7 : n < 13 ? 9 : n < 15 ? 10 : n < 17 ? 11 : 13) + " mana limit";
			})
		},
		"mana recovery" : {
			name : "Mana Recovery",
			minlevel : 1,
			description : "\n   " + "During a short rest, I can recover a number mana points equal to half my weaver level (rounded up) + WIS modifier",
			additional : levels.map(function (n) {
				return (Math.ceil(n / 2)) + " + WIS mana points";
			})
		},
		"force hand" : {
			name : "Force Hand",
			minlevel : 1,
			description : "\n   " + "You can create an invisible hand for simple tasks or carry up to 10 lb. You can take an action to control it, and can't have more than one in effect at once.",
			additional : levels.map(function (n) {
				return (Math.ceil(n / 2)) + " + WIS mana points";
			})
		},
		"path-selection" : {
			name : "Weaver Path",
			minlevel : 2,
			description : "\n   " + "Choose a Weaver Path and put it in the \"Class\" field" + "\n   " + "Choose either Guardian, Sage, or Sentinel"
		},
	}	
};

ClassSubList["weaver-guardian"] = {
	regExpSearch : /uardian/i,
	subname : "Path of the Guardian",
	//source : ["AN:WV",1],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
	features : {
		"subclassfeature2" : {
			name : "Fighting Style",
			//source : [["SRD", 24], ["P", 72]],
			minlevel : 2,
			description : "\n   " + "Choose a Fighting Style for the fighter using the \"Choose Feature\" button above",
			choices : ["Defense", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
			"defense" : FightingStyles.defense,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"subclassfeature2.1" : {
			name : "Armor Training",
			//source : ["AN:WV",1],
			minlevel : 2,
			description : "\n   " + "I gain proficiency with heavy armor",
			armor : [true, true, true, false]
		},
		"subclassfeature6" : {
			name : "Action Surge",
			//source : [["SRD", 25], ["P", 72]],
			minlevel : 6,
			description : "\n   " + "I can take one additional action on my turn on top of my normally allowed actions",
			usages : [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Indomitable",
			//source : [["SRD", 25], ["P", 72]],
			minlevel : 10,
			description : "\n   " + "I can reroll a failed saving throw, but must keep the new result",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Supreme Fortitude",
			minlevel : 14,
			description : "\n   " + "I gain proficiency in CON saves",
			saves : ["Str", "Con", "Wis"]
		},
		"subclassfeature18" : {
			name : "Flurry Attack",
			minlevel : 18,
			description : "\n   " + "I can attack 3 times in an action"
		}
	}
};

ClassSubList["weaver-sage"] = {
	regExpSearch : /age/i,
	subname : "Path of the Sage",
	//source : ["AN:WV",1],
	features : {
		"subclassfeature2" : {
			name : "Undecided",
			//source : ["AN:WV",1],
			minlevel : 2,
			description : "\n   " + "I can add my Wisdom modifier to the damage roll of any spell or weave ability I use"
		},
		"subclassfeature6" : {
			name : "Undecided",
			//source : ["AN:WV",1],
			minlevel : 6,
			description : "\n   " + "Undecided"
		},
		"subclassfeature10" : {
			name : "Undecided",
			//source : ["AN:WV",1],
			minlevel : 10,
			description : "\n   " + "Undecided"
		},
		"subclassfeature14" : {
			name : "Force of Will",
			minlevel : 14,
			description : "\n   " + "I gain proficiency in INT and CHA saves",
			saves : ["Str", "Int", "Wis", "Cha"]
		},
		"subclassfeature18" : {
			name : "Supreme Attunement",
			minlevel : 18,
			description : "\n   " + "Any weave ability that would cost 2 or fewer points to use now do not cost any points to use. I still use mana points to cast 1st level spells, and if an ability would have me spend additional points, I still must spend all of those points."
		}
	}
};

ClassSubList["weaver-sentinel"] = {
	regExpSearch : /entinel/i,
	subname : "Path of the Sentinel",
	//source : ["AN:WV",1],
	features : {
		"subclassfeature2" : {
			name : "Jack of All Trades",
			//source : [["SRD", 12], ["P", 54]],
			minlevel : 2,
			description : "\n   " + "I can add half my proficiency bonus to any ability check that doesn't already include it",
			eval : "Checkbox('Jack of All Trades', true);",
			removeeval : "Checkbox('Jack of All Trades', false);"
		},
		"subclassfeature6" : {
			name : "Expertise",
			//source : [["SRD", 13], ["P", 54]],
			minlevel : 6,
			description : "\n   " + "I gain expertise with two skills I am proficient with",
		},
		"subclassfeature10" : {
			name : "Reliable Talent",
			//source : [["SRD", 40], ["P", 96]],
			minlevel : 10,
			description : "\n   " + "If I make an ability check where I add my proficiency bonus, rolls of 9 or lower are 10"
		},
		"subclassfeature14" : {
			name : "Evasiveness",
			minlevel : 14,
			description : "\n   " + "I gain proficiency in DEX saves",
			saves : ["Str", "Dex", "Wis"],
		},
		"subclassfeature18" : {
			name : "Master of All",
			minlevel : 18,
			description : "\n   " + "I gain proficiency in all skills and add my proficiency bonus to all ability checks",
			eval : "Checkbox('Jack of All Trades', false);"
		}
	}
};


//Weave Abilities
//Mage Hand
PsionicsList["w-mage hand"] = {
	name : "Force Hand",
	classes : ["weaver"],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 min (D)",
	description : "Create invisible hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple instances"
};
//Force Blast
PsionicsList["force blast"] = {
	name : "Force Blast",
	classes : ["weaver"],
	psionic : true,
	level : 0,
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Str",
	description : "No disadv for melee range. STR save or 5 ft push. Extra 1d6 per pt spent. Extra 5 ft pushback per 2 pts spent.",
};
//Dreadnaught
PsionicsList["dreadnaught"] = {
	name : "Dreadnaught",
	classes : ["weaver"],
	//source : ["AN:WV",1],
	psionic : true,
	level : 1,
	school : "Dread",
	firstCol : "checkbox",
	description : "Destructive Combat Magic",
	dependencies : ["w-blade ward", "w-danger-sense", "w-mage armor", "w-shield", "w-deflect", "w-summon-weapon", "w-stun", "w-tenser's transformation"]
};
PsionicsList["w-danger-sense"] = {
	name : "Danger Sense",
	//source : ["AN:WV",1],
	psionic : true,
	//level : 1,
	school : "Dread",
	range : "Self",
	duration : "Instantaneous",
	description : "You get advantage on the next Dexterity saving throw",
	firstCol : 1
};
PsionicsList["w-deflect"] = {
	name : "Deflect Weapons",
	//source : ["AN:WV",1],
	psionic : true,
	//level : 1,
	school : "Dread",
	duration : "Instantaneous",
	description : "When you are hit by a weapon attack, you can reduce the damage by 1d8 + Weaver level",
	firstCol : 2
};
PsionicsList["w-stun"] = {
	name : "Stun",
	//source : ["AN:WV",1],
	psionic : true,
	//level : 1,
	school : "Dread",
	duration : "Instantaneous",
	save : "Con",
	description : "As part of a melee attack you can attempt to stun the target",
	firstCol : 5
};
PsionicsList["w-summon-weapon"] = {
	name : "Summon Weapon",
	//source : ["AN:WV",1],
	psionic : true,
	//level : 1,
	school : "Dread",
	time : "1 b",
	range : "Self",
	duration : "Conc, 1 m",
	description : "Create magical sword, 1d8+STR/DEX, can be thrown (20/40), recall as bonus, +1d8 per 2 pts.",
	firstCol : 2
};
PsionicsList["w-mage armor"] = {
	name : "Mage Armor",
	classes : ["weaver"],
	source : [["SRD", 160], ["P", 256]],
	//level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A piece of cured leather",
	duration : "8 h (D)",
	description : "1 crea that isn't wearing armor has AC 13 + Dex modifier for the duration; spell ends if it dons armor",
	firstCol : 2
};
PsionicsList["w-blade ward"] = {
	name : "Blade Ward",
	classes : ["weaver"],
	source : ["P", 218],
	//level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	description : "Until the end of your next turn, Bludgeoning, Piercing, and Slashing dmg resist. vs. weapons",
	firstCol : "0"
};
PsionicsList["w-shield"] = {
	name : "Shield",
	classes : ["weaver"],
	source : [["SRD", 179], ["P", 275]],
	//level : 1,
	school : "Abjur",
	time : "1 rea",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	description : "If hit by attack +5 AC until start of next turn; or stop Magic Missile spell from doing any dmg to you",
	firstCol : 2
};
PsionicsList["w-tenser's transformation"] = {
	name : "Tenser's Transformation",
	classes : ["weaver"],
	source : ["X", 168],
	ritual : false,
	//level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A few hairs from a bull",
	duration : "Conc, 10 min",
	description : "50 temp HP; prof Str/Con save, all wea/arm; extra atk; adv., +1d12 Force dmg on wea atks; no spellc.",
	firstCol : 9
};
//end Dreadnaught
//Empath
PsionicsList["empath"] = {
	name : "Empath",
	classes : ["weaver"],
	//source : ["AN:WV",1],
	psionic : true,
	level : 1,
	school : "Empath",
	firstCol : "checkbox",
	description : "Connect through Feelings",
	dependencies : ["w-friends", "w-animal friendship", "w-tongues"]
};
PsionicsList["w-danger-sense"] = {
	name : "Danger Sense",
	//source : ["AN:WV",1],
	psionic : true,
	//level : 1,
	school : "Dread",
	range : "Self",
	duration : "Instantaneous",
	description : "You get advantage on the next Dexterity saving throw",
	firstCol : 1
};
PsionicsList["w-deflect"] = {
	name : "Deflect Weapons",
	//source : ["AN:WV",1],
	psionic : true,
	//level : 1,
	school : "Dread",
	duration : "Instantaneous",
	description : "When you are hit by a weapon attack, you can reduce the damage by 1d8 + Weaver level",
	firstCol : 2
};
PsionicsList["w-stun"] = {
	name : "Stun",
	//source : ["AN:WV",1],
	psionic : true,
	//level : 1,
	school : "Dread",
	duration : "Instantaneous",
	save : "Con",
	description : "As part of a melee attack you can attempt to stun the target",
	firstCol : 5
};
PsionicsList["w-summon-weapon"] = {
	name : "Summon Weapon",
	//source : ["AN:WV",1],
	psionic : true,
	//level : 1,
	school : "Dread",
	time : "1 b",
	range : "Self",
	duration : "Conc, 1 m",
	description : "Create magical sword, 1d8+STR/DEX, can be thrown (20/40), recall as bonus, +1d8 per 2 pts.",
	firstCol : 2
};
PsionicsList["w-mage armor"] = {
	name : "Mage Armor",
	classes : ["weaver"],
	source : [["SRD", 160], ["P", 256]],
	//level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A piece of cured leather",
	duration : "8 h (D)",
	description : "1 crea that isn't wearing armor has AC 13 + Dex modifier for the duration; spell ends if it dons armor",
	firstCol : 2
};
PsionicsList["w-blade ward"] = {
	name : "Blade Ward",
	classes : ["weaver"],
	source : ["P", 218],
	//level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	description : "Until the end of your next turn, Bludgeoning, Piercing, and Slashing dmg resist. vs. weapons",
	firstCol : "0"
};
PsionicsList["w-shield"] = {
	name : "Shield",
	classes : ["weaver"],
	source : [["SRD", 179], ["P", 275]],
	//level : 1,
	school : "Abjur",
	time : "1 rea",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	description : "If hit by attack +5 AC until start of next turn; or stop Magic Missile spell from doing any dmg to you",
	firstCol : 2
};
PsionicsList["w-tenser's transformation"] = {
	name : "Tenser's Transformation",
	classes : ["weaver"],
	source : ["X", 168],
	ritual : false,
	//level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A few hairs from a bull",
	duration : "Conc, 10 min",
	description : "50 temp HP; prof Str/Con save, all wea/arm; extra atk; adv., +1d12 Force dmg on wea atks; no spellc.",
	firstCol : 9
};
//end Empath
WeaponsList["summon weapon"] = {
	regExpSearch : /^(?=.*\bsummon)(?=.*(weapon)\b).*$/i,
	name : "Summon Weapon",
	//source : ["AN:WV",1],
	ability : 1,
	type : "Simple",
	damage : [1, 8, "force"],
	range : "Melee",
	description : "Finesse, light. Extra 1d8 per 2 pts spent.",
	abilitytodamage : true
};

WeaponsList["force blast"] = {
	regExpSearch : /^(?=.*\bforce)(?=.*(blast)\b).*$/i,
	name : "Force Blast",
	//source : ["AN:WV",1],
	ability : 5,
	type : "Simple",
	damage : [2, 6, "force"],
	range : "60 ft",
	description : "No disadv for melee range. STR save or 5 ft push. Extra 1d6 per pt spent. Extra 5 ft pushback per 2 pts spent.",
	abilitytodamage : function () {
		return subclass == ClassSubList["weaver-sage"];
	},
};
