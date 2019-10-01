/* Child of the Weave Sorcerous Origin */

var iFileName = "weave-child.js";
//RequiredSheetVersion(12.999);

AddSubClass("sorcerer", "weave child", {
    regExpSearch : /weave/i,
    subname : "Child of the Weave",
    attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features : {
        "bonus spells" : {
            name : "Bonus Spells",
            minlevel : 1,
            description : "\n   " + "I learn additional spells that count as sorcerer spells, do not count against my spells known, and I cannot forget them.",
            spellcastingExtra : ["zephyr strike", "magic weapon", "haste", "divination", "steel wind strike"]
        },
        "martial proficiency" : {
            name : "Martial Proficiency",
            minlevel : 1,
            description : "\n   " + "I gain proficiency with light and medium armor, simple weapons, shorswords, scimitars, rapiers, and longswords",
            armor : [true, true, false, false],
            weapons : [
                [true, false, ["shortsword","scimitar","longsword","rapier"] ]
            ]
        },
        "enhanced vitality" : {
            minlevel : 1,
            name : "Enhanced Vitality",
            description : "\n   " + "I gain an extra 1 HP per sorcerer level (Not implemented!)"
        },
        "unarmored defense" : {
            minlevel : 1,
            name : "Unarmored Defense",
            description : "\n   " + "While I am not wearing armor, by AC is 10 + My Dexterity Modifier + My Charisma Modifier (Not implemented!)"
        },
        "extra attack" : {
            name : "Extra Attack",
            minlevel : 6,
            description : "\n   " + "I make 2 attacks with my attack action"
        },
        "staggering strike" : {
            name : "Staggering Strike",
            minlevel : 14,
            description : "\n   " + "If I hit, as a bonus action I can spend 2 sorcery points to inflict 2d12 + CHA force damage",
            action : ["bonus action", " (if an attack hits)"]
        },
        "break connection" : {
            name : "Break Connection",
            minlevel : 18,
            description : "\n   " + "I can spend 5 sorcery points to make a Charisma check against a target's spellcasting or psionic ability within 30 feet and if I win the check, the target cannot use spells, spell-like abilities, or psionics for 1 minute and the target's concentration is broken",
            action : ["action", ""]
        }
    }
});

SpellsList["Repulsor"] = {
    name : "Repulsor",
    classes : ["sorcerer", "wizard"],
    level : 0,
    school : "Evoc",
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Instantaneous",
    description : "Spell atk 1d6 Force dmg; +1d6 at CL 5, 11, and 17; no disadv for enemy in 5 ft. pushes back 5 ft."
};