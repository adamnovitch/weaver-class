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
	spellcastingFactor : 2,
	spellcastingKnown : {
		cantrips : levels.map(function (n) { return n < 2 ? 0 : 2; }),
		spells : [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11]
	},
	features : {
		"sword-training" : {
			name : "Sword Training",
			minlevel : 1,
			description : "\n   " + "While I am holding a Dagger, Scimitar, Shortsword, or Longsword, as a reaction I add 2 to my AC to possibly deflect one incoming weapon attack",
			action : ["reaction",""]
		},
		"cantrips" : {
			name : "Cantrip",
			minlevel : 1,
			description : "\n   " + "I learn 2 cantrips from the Weaver spell list"
		},
		"spellcasting" : {
			name : "Spellcasting",
			minlevel : 2,
			description : "\n   " + "I can cast Weaver spells that I know, using Wisdom as my spellcasting ability",
			additional : ["", "2 spells known", "3 spells known", "3 spells known", "4 spells known", "4 spells known", "5 spells known", "5 spells known", "6 spells known", "6 spells known", "7 spells known", "7 spells known", "8 spells known", "8 spells known", "9 spells known", "9 spells known", "10 spells known", "10 spells known", "11 spells known", "11 spells known"]
		},
		"path-selection" : {
			name : "Weaver Path",
			minlevel : 3,
			description : "\n   " + "Choose a Weaver Path and put it in the \"Class\" field, choices are: Guardian, Sage, or Sentinel"
		},
		"x-attack" : {
			name : "Extra Attack",
			minlevel : 5,
			description : "\n   " + "I make 2 attacks with my attack action"
		}
	}	
};

ClassSubList["weaver-guardian"] = {
	regExpSearch : /uardian/i,
	subname : "Path of the Guardian",
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
	features : {
		"subclassfeature3" : {
			name : "Fighting Style",
			minlevel : 3,
			description : "\n   " + "Choose a Fighting Style for the fighter using the \"Choose Feature\" button above",
			choices : ["Defense", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
			"defense" : FightingStyles.defense,
			"dueling" : FightingStyles.dueling,
			"great weapon fighting" : FightingStyles.great_weapon,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"subclassfeature3.1" : {
			name : "Armor Training",
			//source : ["AN:WV",1],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with heavy armor",
			armor : [true, true, true, false]
		},
		"subclassfeature6" : {
			name : "Action Surge",
			minlevel : 6,
			description : "\n   " + "I can take one additional action on my turn on top of my normally allowed actions",
			usages : [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Indomitable",
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
			description : "\n   " + "I make 3 attacks with my attack action"
		}
	}
};

ClassSubList["weaver-sage"] = {
	regExpSearch : /age/i,
	subname : "Path of the Sage",
	features : {
		"subclassfeature3" : {
			name : "Mana Recovery",
			minlevel : 3,
			description : "\n   " + "During a short rest, I can recover a number mana points equal to half my weaver level (rounded up) + WIS modifier",
			additional : levels.map(function (n) {
				return (Math.ceil(n / 2)) + " + WIS mana points";
			})
		},
		"subclassfeature6" : {
			name : "Enhanced Magic",
			minlevel : 6,
			description : "\n   " + "I can add my Wisdom modifier to the damage roll of any spell or weave ability I use"
		},
		},
		"subclassfeature10" : {
			name : "Undecided",
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
			name : "Undecided",
			minlevel : 18,
			description : "\n   " + "Undecided"
		}
	}
};

ClassSubList["weaver-sentinel"] = {
	regExpSearch : /entinel/i,
	subname : "Path of the Sentinel",
	features : {
		"subclassfeature3" : {
			name : "Jack of All Trades",
			minlevel : 3,
			description : "\n   " + "I can add half my proficiency bonus to any ability check that doesn't already include it",
			eval : "Checkbox('Jack of All Trades', true);",
			removeeval : "Checkbox('Jack of All Trades', false);"
		},
		"subclassfeature6" : {
			name : "Expertise",
			minlevel : 6,
			description : "\n   " + "I gain expertise with two skills I am proficient with",
		},
		"subclassfeature10" : {
			name : "Reliable Talent",
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

WeaponsList["force blast"] = {
	regExpSearch : /^(?=.*\bforce)(?=.*(blast)\b).*$/i,
	name : "Force Blast",
	ability : 5,
	type : "Simple",
	damage : [2, 6, "force"],
	range : "60 ft",
	description : "No disadv for melee range. STR save or 5 ft push. Extra 1d6 per pt spent. Extra 5 ft pushback per 2 pts spent.",
	abilitytodamage : function () {
		return (subclass == ClassSubList["weaver-sage"]) && (level > 5);
	},
};

//Weaver Spell List
var SetWeaverSpells = function() {
	var wvSp = [
		//Cantrip
		"mage hand",
		"guidance",
		"resistance",
		"friends",
		"message",
		"spare the dying",
		//Level 1
		"absorb elements",
		"animal friendship",
		"bless",
		"catapult",
		"charm person",
		"command",
		"compelled duel",
		"cure wounds",
		"detect evil and good",
		"detect magic",
		"disguise self",
		"divine favor",
		"expeditious retreat",
		"feather fall",
		"healing word",
		"jump",
		"longstrider",
		"sanctuary",
		"shield",
		"shield of faith",
		"thunderwave",
		"witch bolt",
		"zephyr strike",
		//Level 2
		"aid",
		"blindness/deafness",
		"blur",
		"detect thoughts",
		"enhance ability",
		"enlarge",
		"hold person",
		"knock",
		"lesser restoration",
		"magic weapon",
		"mind spike",
		"pass without a trace",
		"purify food and drink",
		"silence",
		"suggestion",
		"zone of truth",
		//Level 3
		"blink",
		"haste",
		"lightningbolt",
		"life transferrence",
		"mass healing word",
		"nondetection",
		"revivify",
		"tongues",
		//Level 4
		"charm monster",
		"confusion",
		"death ward",
		"divination",
		"dominate beast",
		"locate creature",
		"freedom of movement",
		//Level 5
		"greater restoration",
		"hold monster",
		"mass cure wounds",
		"mislead",
		"scrying",
		"steel wind strike",
		"telekinesis",
		//Level 6
		"chain lightning",
		"mass suggestion",
		"tenser's transformation",
		"true seeing",
	];
	for (var a = 0; a < wvSp.length; a++) {
		if (SpellsList[wvSp[a]]) SpellsList[wvSp[a]].classes.push("weaver");
	};
}();
