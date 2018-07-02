/* Weaver Class */

var iFileName = "Weaver.js";
RequiredSheetVersion(12.999);

//sourceList["AN:WV"] = {
//    name : "adn0v: Weaver Class",
//    abbreviation : "an:wv",
//    group : "adn0v Homebrew",
//    url : "https://www.gmbinder.com/share/-LEHdRqAQc4x9T0zgUNT",
//    date : "2018/6/8"
//};

/* missing:
- source [an:wv]
- abilitySaveAlt [1]
*/

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
        [true, true, false, false],
        [true, true, false, false]
    ],
    weapons : [
        [true, false, ["shortsword","scimitar","longsword"] ],
        [true, false, ["shortsword","scimitar","longsword"] ]
    ],
    equipment : "Weaver starting equipment:\n \u2022 Leather Armor;\n \u2022 A martial weapon -or- a simple weapon;\n \u2022 A longbow and 20 arrows -or- a martial melee weapon;\n \u2022 An explorer's pack.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Weaver Path", ["weaver-guardian", "weaver-sage", "weaver-sentinel"]],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    spellcastingFactor : "weaver1",
    spellcastingTable : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl  0   Spell Points:
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl  1   -------------
        [3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl  2    6
        [3, 1, 0, 0, 0, 0, 0, 0, 0], //lvl  3    9
        [4, 1, 0, 0, 0, 0, 0, 0, 0], //lvl  4   11
        [4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl  5   14
        [4, 2, 1, 0, 0, 0, 0, 0, 0], //lvl  6   19
        [4, 3, 1, 0, 0, 0, 0, 0, 0], //lvl  7   22
        [4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl  8   27
        [4, 3, 2, 1, 0, 0, 0, 0, 0], //lvl  9   33
        [4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl 10   38
        [4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl 11   44
        [4, 3, 3, 2, 1, 0, 0, 0, 0], //lvl 12   51
        [4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl 13   57
        [4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl 14   64
        [4, 3, 3, 3, 2, 1, 0, 0, 0], //lvl 15   73
        [4, 3, 3, 3, 3, 1, 0, 0, 0], //lvl 16   80
        [4, 3, 3, 3, 3, 2, 0, 0, 0], //lvl 17   89
        [4, 3, 3, 3, 3, 2, 0, 0, 0], //lvl 18   89
        [4, 3, 3, 3, 3, 2, 0, 0, 0], //lvl 19   89
        [4, 3, 3, 3, 3, 2, 0, 0, 0]  //lvl 20   89
    ],
    spellcastingKnown : {
        cantrips : levels.map(function (n) { return n < 2 ? 0 : 2; }),
        spells : [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]
    },
    features : {
        "parry" : {
            name : "Parry",
            minlevel : 1,
            description : "\n   " + "While I am holding a Dagger, Scimitar, Shortsword, or Longsword, as a reaction I add my proficiency bonus to my AC to possibly deflect one incoming weapon attack",
            action : ["reaction"," (add Proficiency Bonus to AC)"]
        },
        "cantrips" : {
            name : "Cantrips",
            minlevel : 1,
            description : "\n   " + "I learn 2 cantrips from the Weaver spell list"
        },
        "spellcasting" : {
            name : "Spellcasting",
            minlevel : 2,
            description : "\n   " + "I can cast Weaver spells that I know, using Wisdom as my spellcasting ability",
            additional : ["", 
                          "2 spells known", 
                          "3 spells known", 
                          "4 spells known", 
                          "5 spells known", 
                          "6 spells known", 
                          "7 spells known", 
                          "8 spells known", 
                          "9 spells known", 
                          "10 spells known", 
                          "11 spells known", 
                          "11 spells known", 
                          "12 spells known", 
                          "12 spells known", 
                          "13 spells known", 
                          "13 spells known", 
                          "14 spells known", 
                          "14 spells known", 
                          "15 spells known", 
                          "15 spells known"]
        },
        "spell-points" : {
            name : "Spell Points",
            minlevel : 2,
            description : "\n   " + "I use spell points to cast spells",
            usages : levels.map(function (n) { 
                return n <  3 ?  6 : n <  4 ?  9 : n <  5 ? 11 : n <  6 ? 14 : n <  7 ? 19 :
                       n <  8 ? 22 : n <  9 ? 27 : n < 10 ? 33 : n < 11 ? 38 : n < 12 ? 44 :
                       n < 13 ? 51 : n < 14 ? 57 : n < 15 ? 64 : n < 16 : 73 : n < 17 ? 80 : 89; }),
            recovery : "long rest"
        },
        "weave-powers" : {
            name : "Weave Powers",
            minlevel : 2,
            description : "\n   " + "I can use Weave points to use spell-like abilities",
            additional : ["", "1 weave power known", "1 weave power known", "1 weave power known", 
                              "2 weave powers known", "2 weave powers known", "2 weave powers known", 
                              "3 weave powers known", "3 weave powers known", "3 weave powers known", 
                              "4 weave powers known", "4 weave powers known", "4 weave powers known", 
                              "5 weave powers known", "5 weave powers known", "5 weave powers known", 
                              "6 weave powers known", "6 weave powers known", "6 weave powers known", 
                              "7 weave powers known"],
            extraname : "Weave Power",
            extrachoices : ["Danger Sense",
                            "Event Focus",
                            "Focus Skill",
                            "Helping Hand",
                            "Mind Meld",
                            "Past Sense",
                            "Strong Strike",
                            "Brain Teasing",
                            "Deflect Weapons",
                            "Patient Defense",
                            "Resist Environment",
                            "Sense Emotion",
                            "Battle Meditation",
                            "End Affliction",
                            "Manipulate Emotion",
                            "Mind Probe",
                            "Transfer Emotion",
                            "Improve Ability",
                            "Turn Good or Evil",
                            "Brutal Strike",
                            "Destructive Burst",
                            "Induce Trance",
                            "Protect Thoughts",
                            "Resting Alertness",
                            "Stun",
                            "Bloodlust",
                            "Resist Trauma",
                            "Break Connection",
                            "Blindsight",
                            "Probe Darkness",
                            "Clear Mind"],
            "danger sense" : {
                name : "Danger Sense",
                description : "\n   " + "(1 point) When I would have to make a dexterity saving throw, I can gain advantage on that saving throw."
            },
            "event focus" : {
                name : "Event Focus",
                description : "\n   " + "(1 point) By concentrating for 10 minutes, you open your senses to you surroundings. While concentrating, you can find any event occurring within 1 mile of your position. For every additional 2 points you spend on this ability you can double the range."
            },
            "focus skill" : {
                name : "Focus Skill",
                description : "\n   " + "(1 point) I gain advantage on my next ability or skill check"
            },
            "helping hand" : {
                name : "Helping Hand",
                description : "\n   " + "(1 point) I can use the help action as a bonus action to aid an ally within 30 feet",
                action : ["bonus action", " (30 feet)"]
            },
            "mind meld" : {
                name : "Mind Meld",
                description : "\n   " + "(1 point) As a bonus action, you can communicate telepathically with one willing creature you can see within 120 feet of you. The target must have an    Intelligence of at least 2,    otherwise this ability fails and the action is wasted. This communication can occur until the end of the current turn. You don’t need to share a language with the target for it to understand your telepathic utterances, and it understands you even if it lacks a language. You also gain access to one memory of the target’s choice, gaining perfect recall of one thing it saw or did.",
                action : ["bonus action", " (120 feet)"]
            },
            "past sense" : {
                name : "Past Sense",
                description : "\n   " + "(1 point) By focusing for 1 minute at a location, you can gain an accurate understanding of any events that occurred at that spot within the past day. For every additional 2 points you spend on this ability you can double the time."
            },
            "strong strike" : {
                name : "Strong Strike",
                description : "\n   " + "(1 point) Gain proficiency in unarmed strikes for this turn, your damage dice for your unarmed strikes and weapon attacks depends on your proficiency bonus (+2 use d4, +3 use d6, +4 use d8, +5 use d10, +6 use d12).",
                additional : levels.map(function(n) {
                    if (n < 5) return "1d4";
                    if (n < 9) return "1d6";
                    if (n < 13) return "1d8";
                    if (n < 17) return "1d10";
                    return "1d12";}
                )
            },
            "brain teasing" : {
                name : "Brain Teasing",
                description : "\n   " + "(2 points) Target creature must make a wisdom save, taking 3d6 psychic damage on a failure, half on a success. It also becomes frightened if it fails.",
                action : ["action"," (10 feet)"]
            },
            "deflect weapons" : {
                name : "Deflect Weapons",
                description : "\n   " + "(2 points) When hit by a weapon attack, you can reduce damage by 1d10 + WIS + Weaver Level. Then if that damage is reduced to zero I can make one melee attack at that enemy",
                action : ["reaction",""]
            },
            "patient defense" : {
                name : "Patient Defense",
                description : "\n   " + "(2 points) I can take the Dodge action as a bonus action.",
                action : ["bonus action",""]
            },
            "resist environment" : {
                name : "Resist Environment",
                description : "\n   " + "(2 points) You become immune to the adverse effects of harsh weather for 1 hour. Additionally if you spend an extra 5 pts. you become immune to exhaustion for the next 8 hours."
            },
            "sense emotion" : {
                name : "Sense Emotion",
                description : "\n   " + "(2 points) You attune your senses to pick up the emotions of others for 10 minutes, with concentration. As your action, and as a bonus action on each turn for the duration, you can focus your senses on one humanoid you can see within 30 feet of you. You instantly learn the target’s prevailing emotion, whether it’s love, anger, pain, fear, calm, or something else. If the target isn’t actually humanoid or it is immune to being charmed, you sense that it is calm."
            },
            "battle meditation" : {
                name : "Battle Meditation",
                description : "\n   " + "(3 points) As a bonus action, you can grant yourself advantage on your next weapon attack.",
                action : ["bonus action",""]
            },
            "end affliction" : {
                name : "End Affliction",
                description : "\n   " + "(3 points) End a fear effect on yourself",
                action : ["bonus action",""]
            },
            "manipulate emotion" : {
                name : "Manipulate Emotion",
                description : "\n   " + "(3 points) As an action, you can choose 1 target you can see within 30 feet. You can attempt to change their emotional state. The creature can attempt a Wisdom saving throw to resist the effect. For every extra point you use towards this ability, you can attempt to use this ability on one additional creature within range. You can make the target creature(s) frightened, or you can make it friendly towards you and/or hostile towards their allies.",
                action : ["action"," (30 feet)"]
            },
            "mind probe" : {
                name : "Mind Probe",
                description : "\n   " + "(3 points) Touch an unwilling creature, which must make a Wisdom saving throw to avoid the effect. Gain access to one memory of the your choice, gaining perfect recall of one thing it saw or did. Also read its thougts",
                action : ["action"," (touch)"]
            },
            "transfer emotion" : {
                name : "Transfer Emotion",
                description : "\n   " + "(3 points) If a spell or ability puts you or an ally under the effect of an emotional condition such as fear, being charmed, etc, you can use this ability to cancel the effect on yourself or ally and redirect it at the hostile creature, which must make a Wisdom save.",
                action : ["action"," (60 feet)"]
            },
            "improve ability" : {
                name : "Improve Ability",
                description : "\n   " + "(4 points) You can treat one of your ability scores as if it were increased by 2 (+1) for all ability and skill checks for 1 hour."
            },
            "turn good or evil" : {
                name : "Turn Good or Evil",
                description : "\n   " + "(4 points) Target Good/Evil aligned creature within 60 feet that you can see must pass a Wisdom saving throw or it has disadvantage on all attack rolls and saving throws for up to 1 minute, and can repeat the save after each of its turns. You can't use Turn Evil if you are Evil aligned, and can't sue Turn Good if you are Good aligned.",
                action : ["action"," (60 feet)"]
            },
            "brutal strike" : {
                name : "Brutal Strike",
                description : "\n   " + "(5 points) As a bonus action before you attack, you can double the damage dice of your weapon attacks this turn.",
                action : ["bonus action"," (before attack)"]
            },
            "destructive burst" : {
                name : "Destructive Burst",
                description : "\n   " + "(5 points) Choose a point within 60 feet of yourself. Each creature in a 10 foot radius of that point must make a Strength saving throw. On a failure a creature takes 4d6 Thunder damage and is pushed 10 feet away from the point. A creature that succeeds takes half damage and isn't pushed back. If the spell is centered on a creature, that creature has to make a Constitution saving throw or take an additional 2d8 bludgeoning damage, which is considered magical.",
                action : ["action",""]
            },
            "induce trance" : {
                name : "Induce Trance",
                description : "\n   " + "(5 points) You can touch a creature and impose a Wisdom saving throw. That creature falls into a deep trance and cannot be awakened unless they take damage or until 1 minute has passed. The creature is considered incapacitated.",
                action : ["action"," (touch)"]
            },
            "protect thoughts" : {
                name : "Protect Thoughts",
                description : "\n   " + "(5 points) You become immune to scrying and to any effect that would sense your emotions, read your thoughts, or detect your location for 8 hours."
            },
            "resting alertness" : {
                name : "Resting Alertness",
                description : "\n   " + "(5 points) You become hyper aware of your surroundings, even while asleep. You have advantage on all perception checks, even while unconscious, and keep all bonuses to your perception and initiative. If you are asleep, you can wake yourself up at will. This does not extend to magical sleep."
            },
            "stun" : {
                name : "Stun",
                description : "\n   " + "(5 points) As part of a melee attack you can attempt to stun. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.",
                action : ["action", " (with attack)"]
            },
            "bloodlust" : {
                name : "Bloodlust",
                description : "\n   " + "(6 points) You can enter a state similar to the Barbarian's rage. This state lasts for a minute and requires concentration, and ends if you lose concentation or go for 1 round without making an attack. While in this state you add half your proficiency bonus to your weapon attack damage rolls, and you resist nonmagical bludgeoning, piercing, and slashing damage.",
                action : ["bonus action", ""]
            },
            "resist trauma" : {
                name : "Resist Trauma",
                description : "\n   " + "(6 points) As a reaction, when you would have to make an Intelligence, Wisdom, or Charisma saving throw against an illusion or an effect that would frighten you, you have advantage on that saving throw. If you pass the save, you are immune to illusion and fear for the next hour.",
                action : ["reaction", ""]
            },
            "break connection" : {
                name : "Break Connection",
                description : "\n   " + "(7 points) Target must make a Wisdom saving throw. On a failure, the target cannot cast spells or use spell-like abilities for one minute. At the end of each of the the creature's turns it can attempt to make the save again.",
                action : ["action", " (60 feet)"]
            },
            "blindsight" : {
                name : "Blindsight",
                description : "\n   " + "(8 points) You gain Blindsight to a distance of 120 feet for 1 hour."
            },
            "probe darkness" : {
                name : "Probe Darkness",
                description : "\n   " + "(8 points) A stronger version of detect thoughts, you are able to go deep into the subconscious of your victim to release some of their deepest fears and trauma. Target must make a Wisdom saving throw. On a failure they take 10d8 psychic damage, half on a success. If they fail you learn one fear/trauma of the target. Subsequent psychic attacks do an extra 2d8 damage on the target. Target is immune to this ability for the next 24 hours, and if a target is affected by this again, you learn no new information and the damage is only 8d6.",
                action : ["action", " (30 feet)"]
            },
            "clear mind" : {
                name : "Clear Mind",
                description : "\n   " + "(9 points) You automatically succeed any Intelligence, Wisdom, or Charisma saving throw for the next 8 hours."
            }
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
        },
        "power-beyond" : {
            name : "Power Beyond",
            minlevel : 20,
            description : "\n   " + "You learn 4 6th level spells. You can cast one of them once between long rests.",
            spellcastingExtra : ["chain lightning","mass suggestion","tenser's transformation","true seeing"]
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
    spellcastingKnown : {
        cantrips : levels.map(function (n) { return n < 2 ? 0 : n < 3 ? 2 : 3; }),
        spells : [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]
    },
    features : {
        "subclassfeature3" : {
            name : "Extra Cantrip",
            minlevel : 3,
            description : "\n   " + "I learn a 3rd cantrip",
        },
        "subclassfeature6" : {
            name : "Mana Recovery",
            minlevel : 6,
            description : "\n   " + "During a short rest, I can recover a number mana points equal to half my weaver level (rounded up) + WIS modifier",
            additional : levels.map(function (n) {
                return (Math.ceil(n / 2)) + " + WIS mana points";
            })
        },
        "subclassfeature10" : {
            name : "Enhanced Magic",
            minlevel : 10,
            description : "\n   " + "I can add my Wisdom modifier to the damage roll of any spell or weave ability I use"
        },
        "subclassfeature14" : {
            name : "Force of Will",
            minlevel : 14,
            description : "\n   " + "I gain proficiency in INT and CHA saves",
            saves : ["Str", "Int", "Wis", "Cha"]
        },
        "subclassfeature18" : {
            name : "Unlimited Power!",
            minlevel : 18,
            description : "\n   " + "At 18th level, Weave powers I know that normally cost 2 or fewer weave points to use, do not cost any points to use"
        }
    }
}

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
        return ((subclass == ClassSubList["weaver-sage"]) && (level > 9));
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
        "true seeing"
    ];
    for (var a = 0; a < wvSp.length; a++) {
        if (SpellsList[wvSp[a]]) SpellsList[wvSp[a]].classes.push("weaver");
    };
}();
