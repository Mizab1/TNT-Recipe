import { Advancement, advancement, clear, functionCmd, ITEMS, MCFunction, raw, Recipe, say, Selector, SelectorClass } from "sandstone";

function createRecipe(name: string , giveFunctionPath: string, element: ITEMS){
    
    let self: SelectorClass<false, true> = Selector('@a');
    let thisDatapack: string = "tnt_recipes";
    let tntDatapack: string = "mtnt.main";

    MCFunction(name, () => {
        // Takes back the recipe so it can be crafted again
        raw(`recipe take ${self} ${thisDatapack}:${name}_recipe`);
        advancement.revoke(self).only(`${thisDatapack}:${name}_adv`);

        // Give the player TNT
        functionCmd(`${tntDatapack}:${giveFunctionPath}`);

        // Clear the knowledge book from inventory
        clear(self, 'minecraft:knowledge_book');
    });

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
    });

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
    });
}

createRecipe("effect_tnt", "good_effect", "minecraft:glass_bottle"); // ✅
createRecipe("fish_tnt", "fish", "minecraft:tropical_fish"); // ✅
createRecipe("firework_tnt", "missile", "minecraft:firework_rocket"); // ✅
createRecipe("recursion_tnt", "recursion", "minecraft:tnt"); // ✅
createRecipe("sponge_tnt", "sponge", "minecraft:sponge"); // ✅
createRecipe("butcher_tnt", "butcher", "minecraft:fermented_spider_eye"); // ✅
createRecipe("rich_tnt", "rich", "minecraft:emerald"); // ✅
createRecipe("lightning_tnt", "lightning", "minecraft:lightning_rod"); // ✅
createRecipe("hostile_tnt", "hostile", "minecraft:bone"); // ✅
createRecipe("drill_tnt", "drill", "minecraft:iron_pickaxe"); // ✅
createRecipe('tsunami_tnt', "tsunami", "minecraft:water_bucket"); // ✅
createRecipe("wwz_tnt", "wwz", "minecraft:rotten_flesh"); // ✅
createRecipe("inverted_tnt", "inverted", "minecraft:name_tag"); // ✅
createRecipe("farm_tnt", "farm", "minecraft:beef"); // ✅
createRecipe("freeze_tnt", "ice", "minecraft:ice"); // ✅
