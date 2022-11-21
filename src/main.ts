import { Advancement, advancement, clear, functionCmd, ITEMS, MCFunction, raw, Recipe, say, Selector, SelectorClass } from "sandstone";

let self: SelectorClass<false, true> = Selector('@a');
function createRecipe(name: string , giveFunctionPath: string, element: ITEMS){
    
    let thisDatapack: string = "tnt_recipes";
    let tntDatapack: string = "mtnt.main";

    MCFunction(name, () => {
        // Takes back the recipe so it can be crafted again
        say('hiicfg')
        raw(`recipe take ${self} ${thisDatapack}:${name}_recipe`);
        advancement.revoke(self).only(`${thisDatapack}:${name}_adv`);

        // Give the player TNT
        functionCmd(`${tntDatapack}:${giveFunctionPath}`);

        // Clear the knowledge book from inventory
        clear(self, 'minecraft:knowledge_book');
    })

    // advancment for the recipe unlock, give the TNT to the owner
    Advancement(`${name}_adv`, {
        "criteria": {
            "Unlocked": {
                "trigger": "minecraft:recipe_unlocked",
                "conditions": {
                    "recipe": `${thisDatapack}:${name}_recipe`
                }
            }
        },
        "rewards": {
            "function": `${thisDatapack}:${name}`
        }
    })

    // custom recipe for the TNT
    Recipe(`tnt_recipes:${name}_recipe`, {
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "gsg",
            "ses",
            "gsg"
        ],
        "key": {
            "s": {
                "item": "minecraft:sand"
            },
            "g": {
                "item": "minecraft:gunpowder"
            },
            "e": {
                "item": element
            }
        },
        "result": {
            "item": "minecraft:knowledge_book",
            "count": 1
        }
    })
}

createRecipe("effect_tnt", "good_effect", "minecraft:glass_bottle");