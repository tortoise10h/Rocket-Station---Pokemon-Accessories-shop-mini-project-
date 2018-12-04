/**OUR PRODUCT**/
function products(id, name, firstPrice, fixPrice, imgLink, color, alternateText, detail){
    this.id = id;
    this.name = name;
    this.firstPrice = firstPrice;
    this.fixPrice = fixPrice;
    this.imgLink = imgLink;
    this.color = color;
    this.alternateText = alternateText;
    this.detail = detail;
}

let productArr = [];
productArr[0] = new products(
  "hat00",
  "Froakie Poké Plush Hat",
  "285000",
  "165000",
  "img/hat/hat00/hat00_1.jpg",
  "xanh",
  "hat00_1.jpg",
  "<li>One of the most recognizable XY Pokémon</li><li>A Pokémon fan favorite</li>"
);
productArr[1] = new products(
  "hat01",
  "Pokémon: Let's Go Trainer Male Baseball Cap by New Era",
  "250000",
  "185000",
  "img/hat/hat01/hat01_1.jpg",
  "do",
  "hat01_1.jpg",
  "<li>A design that shows you're ready for a Pokémon battle!</li><li>Based on the male player character's hat from Pokémon: Let’s Go, Pikachu! and Pokémon: Let’s Go, Eevee!</li><li>Designed by Pokémon Center, made by New Era</li>"
);
productArr[2] = new products(
  "hat02",
  "Legendary Mewtwo 9FIFTY Baseball Cap by New Era",
  "300000",
  "225000",
  "img/hat/hat02/hat02_1.jpg",
  "tim",
  "hat02_1.jpg",
  "<li>Adjustable snapback closure provides a custom fit</li><li>Part of the Legendary Mewtwo collection</li><li>Designed by Pokémon Center, made by New Era</li>"
);
productArr[3] = new products(
  "hat03",
  "Piplup Bubbly Beach 9FIFTY Baseball Cap by New Era",
  "300000",
  "225000",
  "img/hat/hat03/hat03_1.jpg",
  "xanh",
  "hat03_1.jpg",
  "<li>Adjustable snapback closure provides a custom fit</li><li>Screen printed graphics underneath bill</li><li>Part of the Piplup Bubbly Beach collection</li><li>Designed by Pokémon Center, made by New Era</li>"
);
productArr[4] = new products(
  "hat04",
  "Electric Rock 9FORTY Baseball Cap by New Era",
  "305000",
  "230000",
  "img/hat/hat04/hat04_1.jpg",
  "den",
  "hat04_1.jpg",
  "<li>Snapback closure for a custom fit</li><li>This is the cap for Trainers who rock!</li><li>Part of the Electric Rock collection</li><li>Designed by Pokémon Center, made by New Era</li>"
);
productArr[5] = new products(
  "hat05",
  "Tapu Koko 9FIFTY Baseball Cap by New Era",
  "300000",
  "225000",
  "img/hat/hat05/hat05_1.jpg",
  "cam",
  "hat05_1.jpg",
  "<li>Adjustable snapback closure</li><li>Embroidered and screen printed graphics</li><li>Designed by Pokémon Center, made by New Era</li>"
);
productArr[6] = new products(
  "hat06",
  "Litten's Playhouse 9FIFTY Baseball Cap by New Era",
  "285000",
  "210000",
  "img/hat/hat06/hat06_1.jpg",
  "trang",
  "hat06_1.jpg",
  "<li>This is the cap for Trainers who love Litten!</li><li>Detailed embroidery</li><li>Adjustable snapback closure for the perfect fit</li>"
);
productArr[7] = new products(
  "hat07",
  "Fire Spinner Marowak 9FIFTY Baseball Cap by New Era",
  "285000",
  "210000",
  "img/hat/hat07/hat07_1.jpg",
  "tim",
  "hat07_1.jpg",
  "<li>Green accent trim on interior</li><li>Pokémon Center Original design</li><li>This is the cap for Trainers!</li>"
);
productArr[8] = new products(
  "hat08",
  "Snoozing Snorlax 9FIFTY Baseball Cap by New Era",
  "285000",
  "210000",
  "img/hat/hat08/hat08_1.jpg",
  "xanh",
  "hat08_1.jpg",
  "<li>You are so chill you're almost asleep! Snorlax gonna chillax!</li><li>Pokemon Center Original design</li>"
);
productArr[9] = new products(
  "hat09",
  "Alola Friends 9FIFTY Baseball Cap by New Era",
  "260000",
  "190000",
  "img/hat/hat09/hat09_1.jpg",
  "trang",
  "hat09_1.jpg",
  "<li>Bring the Pokémon of Alola to the mainland!</li><li>Bring the good times to your wardrobe!</li><li>Pokémon Center Original design</li>"
);
productArr[10] = new products(
  "hat10",
  "Bellossom Tropics 9FIFTY Baseball Cap by New Era",
  "310000",
  "285000",
  "img/hat/hat10/hat10_1.jpg",
  "xanh",
  "hat10_1.jpg",
  "<li>Bright tropical Bellossom with leafy background</li><li>High-quality New Era cap</li><li>Leafy pattern underbill</li><li>Snapback closure</li><li>Pokémon Center Original</li>"
);
productArr[11] = new products(
  "hat11",
  "Latios and Latias Eon Edge 9FORTY Baseball Cap by New Era",
  "300000",
  "275000",
  "img/hat/hat11/hat11_1.jpg",
  "trang",
  "hat11_1.jpg",
  "<li>You can get that Eon Edge for a super-sharp look!</li><li>High-quality New Era cap</li><li>Embroidered with a spiky look</li><li>Adjustable straps for a perfect fit</li><li>Pokémon Center Original</li>"
);
productArr[12] = new products(
  "hat12",
  "Pikachu Silhouette Sync 9FIFTY Baseball Cap by New Era",
  "300000",
  "285000",
  "img/hat/hat12/hat12_1.jpg",
  "den",
  "hat12_1.jpg",
  "<li>Pikachu: Thunderbolt!</li><li>High-quality New Era cap</li><li>Circle up Sync!</li><li>Snapback closure</li><li>Pokémon Center Original</li>"
);
productArr[13] = new products(
  "hat13",
  "Mew 9FORTY Baseball Cap by New Era",
  "300000",
  "285000",
  "img/hat/hat13/hat13_1.jpg",
  "xam",
  "hat13_1.jpg",
  "<li>Two-color embroidered Mew is front and center!</li><li>High-quality New Era cap</li><li>Light blue underbill</li><li>Pokémon Center Original</li>"
);
productArr[14] = new products(
  "hat14",
  "Mythical Mania 9FIFTY Baseball Cap by New Era",
  "280000",
  "165000",
  "img/hat/hat14/hat14_1.jpg",
  "xanh",
  "hat14_1.jpg",
  "<li>Mythical Pokémon from Darkrai to Celebi and Jirachi to Mew!</li><li>High-quality New Era cap</li><li>Gray underbill</li><li>Pokémon Center Original</li>"
);
productArr[15] = new products(
  "hat15",
  "Mega Rayquaza Eclipse 9FIFTY Baseball Cap by New Era",
  "300000",
  "285000",
  "img/hat/hat15/hat15_1.jpg",
  "den",
  "hat15_1.jpg",
  "<li>Mega Rayquaza goes all out!</li><li>High-quality New Era cap</li><li>Embroidered with shining green thread!</li><li>Pokémon Center Original</li>"
);
productArr[16] = new products(
  "hat16",
  "Gengar Smirk 9FORTY Baseball Cap by New Era",
  "300000",
  "285000",
  "img/hat/hat16/hat16_1.jpg",
  "tim",
  "hat16.jpg",
  "<li>Gengar has a big grin!</li><li>High-quality New Era cap</li><li>Purple underbill and Gengar outline on the side</li><li>Adjustable straps for a perfect fit</li><li>Pokémon Center Original</li>"
);
productArr[17] = new products(
  "hat17",
  "Chespin Poké Plush Hat",
  "310000",
  "295000",
  "img/hat/hat17/hat17_1.jpg",
  "xanhla",
  "hat17.jpg",
  "<li>A first partner Pokémon from Kalos</li><li>Adjustable strap fits most</li>"
);
productArr[18] = new products(
  "hat18",
  "Fennekin Poké Plush Hat",
  "310000",
  "295000",
  "img/hat/hat18/hat18_1.jpg",
  "cam",
  "hat18.jpg",
  "<li>One of the most recognizable XY Pokémon</li><li>Playful style</li><li>A Pokémon fan favorite</li>"
);
productArr[19] = new products(
  "hat19",
  "Pikachu Poké Plush Hat",
  "310000",
  "295000",
  "img/hat/hat19/hat19_1.jpg",
  "vang",
  "hat19.jpg",
  "<li>World's most famous Pokémon</li><li>Soft</li>"
);
productArr[20] = new products(
  "shi00",
  "Tapu Koko Fitted Crew Neck T-Shirt - Adult S",
  "400000",
  "345000",
  "img/shi/shi00/shi00_1.jpg",
  "den",
  "shi00.jpg",
  "<li>Features a fitted cut that runs smaller than other cuts; please refer to the size chart to determine fit</li><li>Soft, breathable tri-blend fabric</li><li>Legendary Pokémon from Alola in a vintage-style design</li><li>Pokémon Center Original</li>"
);
productArr[21] = new products(
  "shi01",
  "Litten's Playhouse Relaxed Fit Crewneck T-Shirt - Adult S",
  "400000",
  "345000",
  "img/shi/shi01/shi01_1.jpg",
  "xam",
  "shi01.jpg",
  "<li>Purrfect for those who love hanging with furry friends!</li><li>Cotton fabric is breathable and easy to clean</li><li>Pokémon Center Original</li>"
);
productArr[22] = new products(
  "shi02",
  "Flareon, Jolteon & Vaporeon Triple Threat Relaxed Fit Crewneck T-Shirt - Adult S",
  "410000",
  "365000",
  "img/shi/shi02/shi02_1.jpg",
  "den",
  "shi02.jpg",
  "<li>Printed both front and back</li><li>Bold art style</li><li>Pokémon Center Original design</li>"
);
productArr[23] = new products(
  "shi03",
  "First Partner Power Relaxed Fit Crewneck T-Shirt - Adult S",
  "410000",
  "365000",
  "img/shi/shi03/shi03_1.jpg",
  "xanh",
  "shi03.jpg",
  "<li>Awesome Alolan island style</li><li>Pokémon Center Original design</li>"
);
productArr[24] = new products(
  "shi04",
  "Vulpix Frozen Forest Relaxed Fit Crewneck T-Shirt - Adult S",
  "400000",
  "325000",
  "img/shi/shi04/shi04_1.jpg",
  "tim",
  "shi04.jpg",
  "<li>A frosty and fiery Pokémon style!</li><li>Two kinds of Vulpix: from Kanto and Alola!</li><li>Pokémon Center Original design</li>"
);
productArr[25] = new products(
  "shi05",
  "Growlithe and Arcanine Relaxed Fit Crewneck T-Shirt - Adult S",
  "400000",
  "325000",
  "img/shi/shi05/shi05_1.jpg",
  "do",
  "shi05.jpg",
  "<li>Step up to a golden touch!</li><li>Generous cut for an easy fit!</li><li>Arcanine in full roar</li>"
);
productArr[26] = new products(
  "shi06",
  "Mimikyu Relaxed Fit Crewneck T-Shirt - Adult S",
  "380000",
  "325000",
  "img/shi/shi06/shi06_1.jpg",
  "xanh",
  "shi06.jpg",
  "<li>Mimikyu wants to be your friend!</li><li>Is Mimikyu's disguise on right?</li><li>Fun-loving and slightly spooky design</li><li>Pokémon Center Original</li>"
);
productArr[27] = new products(
  "shi07",
  "Charizard Firestorm Men's Fitted Crewneck T-Shirt - S",
  "380000",
  "325000",
  "img/shi/shi07/shi07_1.jpg",
  "cam",
  "shi07.jpg",
  "<li>Burn it up with Charizard!</li><li>Check out the whole Firestorm Collection!</li>"
);
productArr[28] = new products(
  "shi08",
  "Rotom Mystery Room Relaxed Fit Adult Crewneck T-Shirt - S",
  "380000",
  "325000",
  "img/shi/shi08/shi08_1.jpg",
  "den",
  "shi08.jpg",
  "<li>Pokémon Center Original design</li>"
);
productArr[29] = new products(
  "shi09",
  "Pikachu Brushwork Men's Fitted Crewneck T-Shirt - S",
  "385000",
  "345000",
  "img/shi/shi09/shi09_1.jpg",
  "xanhla",
  "shi09.jpg",
  "<li>Bold graffiti-style in a Pokémon shirt!</li><li>Clever Smeargle on the back</li><li>Pokémon Center Original design</li>"
);
productArr[30] = new products(
  "shi10",
  "Solgaleo and Lunala Relaxed Fit Crewneck T-Shirt - Adult",
  "385000",
  "345000",
  "img/shi/shi10/shi10_1.jpg",
  "tim",
  "shi10.jpg",
  "<li>Two Legendary Pokémon in a beautiful design</li><li>Pokémon Center Original</li>"
);
productArr[31] = new products(
  "shi11",
  "Mew Mythical Mania Men's Relaxed Fit Crewneck T-Shirt - Adult S",
  "365000",
  "305000",
  "img/shi/shi11/shi11_1.jpg",
  "hong",
  "shi11.jpg",
  "<li>Bright Mythical Pokémon in a wild pattern!</li><li>Relaxed fit for comfort.</li><li>Pokémon Center Original Design</li>"
);
productArr[32] = new products(
  "shi12",
  "Articuno 151 Cut Adult Crewneck T-Shirt - S",
  "365000",
  "305000",
  "img/shi/shi12/shi12_1.jpg",
  "xanh",
  "shi12.jpg",
  "<li>Articuno in a heraldic style</li><li>POLYGRAPH graphic design</li>"
);
productArr[33] = new products(
  "shi13",
  "Mew 151 Cut Adult Crewneck T-Shirt - S",
  "365000",
  "305000",
  "img/shi/shi13/shi13_1.jpg",
  "den",
  "shi13.jpg",
  "<li>Mysterious Mewtwo in a hypnotic striped pattern!</li><li>POLYGRAPH graphic design</li>"
);
productArr[34] = new products(
  "shi14",
  "Popplio Relaxed Fit Crewneck T-Shirt - Adult S",
  "375000",
  "315000",
  "img/shi/shi14/shi14_1.jpg",
  "xam",
  "shi14.jpg",
  "<li>Ready for an Alolan adventure!</li><li>First partner Pokémon!</li><li>Pokémon Center Original</li>"
);
productArr[35] = new products(
  "shi15",
  "Gengar Smirk Relaxed Fit Crewneck T-Shirt - Adult S",
  "395000",
  "355000",
  "img/shi/shi15/shi15_1.jpg",
  "tim",
  "shi15.jpg",
  "<li>Sneaky Gengar has quite a grin!</li><li>Pokémon Center Original</li>"
);
productArr[36] = new products(
  "shi16",
  "Zygarde Relaxed Fit Crewneck T-Shirt - Youth S",
  "395000",
  "355000",
  "img/shi/shi16/shi16_1.jpg",
  "xanhla",
  "shi16.jpg",
  "<li>Comfortable relaxed fit T-shirt</li><li>Zygarde 50% Forme design</li><li>Printed on both sides</li><li>Pokémon Center Original</li>"
);
productArr[37] = new products(
  "shi17",
  "Hoopa Unbound Adult Relaxed Fit Crewneck T-Shirt - S",
  "400000",
  "355000",
  "img/shi/shi17/shi17_1.jpg",
  "hong",
  "shi17.jpg",
  "<li>Hoopa Unbound!</li><li>Relaxed fit crewneck looks good!</li><li>Pokémon Center Original</li>"
);
productArr[38] = new products(
  "shi18",
  "Plusle and Minun Relaxed Fit Crewneck T-Shirt - Youth XS",
  "385000",
  "365000",
  "img/shi/shi18/shi18_1.jpg",
  "xam",
  "shi18.jpg",
  "<li>Official Pokémon T-shirt</li><li>Relaxed fit crewneck looks good!</li><li>Plusle and Minun are super energetic!</li><li>A Pokémon Center Original</li>"
);
productArr[39] = new products(
  "shi19",
  "Mega Diancie Relaxed Fit Crewneck T-Shirt - Youth XS",
  "385000",
  "365000",
  "img/shi/shi19/shi19_1.jpg",
  "hong",
  "shi19.jpg",
  "<li>Relaxed fit crewneck</li><li>Mega Diancie is Mega fun!</li><li>Sparkles on the shirt give you a shine</li><li>A Pokémon Center Original</li>"
);
productArr[40] = new products(
  "fig00",
  "Pikachu, Bulbasaur, Charmander & Squirtle",
  "400000",
  "365000",
  "img/fig/fig00/fig00_1.jpg",
  "vang",
  "fig00.jpg",
  "<li>Includes figures of Bulbasaur, Charmander, and Squirtle, plus a Pokémon Center-exclusive Pikachu</li><li>Included face plates let you change Red's expression between a quiet, confident look and a dynamic, battling look</li><li>Also comes with a backpack, Poké Ball, and articulated figma stand</li><li>Features smooth yet posable joints, plus flexible plastic that retains its proportions</li>"
);
productArr[41] = new products(
  "fig01",
  "Pokémon Gallery Figure DX: Mewtwo-Psystrike",
  "400000",
  "385000",
  "img/fig/fig01/fig01_1.jpg",
  "hong",
  "fig01.jpg",
  "<li>Measures about 5 1/2 inches tall—larger than standard Pokémon Gallery Figures</li><li>Includes Mewtwo figure with attached base (other pictured items not included)</li><li>Watch out for that Psystrike attack!</li><li>Pokémon Center Original</li>"
);
productArr[42] = new products(
  "fig02",
  "Pokémon Figure DX: Charizard-Blast Burn",
  "400000",
  "385000",
  "img/fig/fig02/fig02_1.jpg",
  "cam",
  "fig02.jpg",
  "<li>Measures about 4 1/2 inches tall and 7 1/4 inches long—larger than standard Pokémon Gallery Figures</li><li>Includes Charizard figure with attached base (other pictured items not included)</li><li>Blast it all and seize the day, Charizard!</li><li>Pokémon Center Original</li>"
);
productArr[43] = new products(
  "fig03",
  "Pokémon Gallery Figure: Umbreon—Dark Pulse",
  "400000",
  "385000",
  "img/fig/fig03/fig03_1.jpg",
  "tim",
  "fig03.jpg",
  "<li>Umbreon in the midst of its Dark Pulse power!</li><li>Part of the Gallery Figure line</li>"
);
productArr[44] = new products(
  "fig04",
  "Pokémon Gallery Figure: Espeon—Light Screen",
  "380000",
  "365000",
  "img/fig/fig04/fig04_1.jpg",
  "trang",
  "fig04.jpg",
  "<li>Espeon caught in mid-leap!</li><li>Part of the Gallery Figure line</li>"
);
productArr[45] = new products(
  "fig05",
  "Pokémon Gallery Figure: Mew—Psychic",
  "380000",
  "365000",
  "img/fig/fig05/fig05_1.jpg",
  "hong",
  "fig05.jpg",
  "<li>Amazing battle pose!</li><li>Pokémon Center original</li>"
);
productArr[46] = new products(
  "fig06",
  "Pokémon Figure: Pikachu—Thunderbolt",
  "400000",
  "385000",
  "img/fig/fig06/fig06_1.jpg",
  "vang",
  "fig06.jpg",
  "<li>Amazing battle pose!</li><li>Pokémon Center original</li>"
);
productArr[47] = new products(
  "fig07",
  "Pokémon Gallery Figure: Absol-Perish Song",
  "390000",
  "365000",
  "img/fig/fig07/fig07_1.jpg",
  "cam",
  "fig07.jpg",
  "<li>Translucent orange and purple effects catch the light to help set a scene</li><li>Part of the Pokémon Gallery Figures collection</li><li>Pokémon Center Original</li>"
);
productArr[48] = new products(
  "fig08",
  "Pokémon Gallery Figure DX: Gengar-Shadow Ball",
  "390000",
  "365000",
  "img/fig/fig08/fig08_1.jpg",
  "tim",
  "fig08.jpg",
  "<li>Measures about 6 inches tall—larger than standard Pokémon Gallery Figures</li><li>Includes Gengar figure with attached base (other pictured items not included)</li><li>A figure full of ghostly fun!</li><li>Pokémon Center Original</li>"
);
productArr[49] = new products(
  "fig09",
  "Pokémon Gallery Figure: Vulpix—Fire Spin",
  "390000",
  "365000",
  "img/fig/fig09/fig09_1.jpg",
  "cam",
  "fig09.jpg",
  "<li>Vulpix leaping through transparent flames!</li><li>Part of the Gallery Figure line</li>"
);
productArr[50] = new products(
  "fig10",
  "Pokémon Gallery Figure: Psyduck—Confusion",
  "380000",
  "365000",
  "img/fig/fig10/fig10_1.jpg",
  "vang",
  "fig10.jpg",
  "<li>Psyduck shows off a bit of psychic power!</li><li>Part of the Gallery Figure line</li>"
);
productArr[51] = new products(
  "fig11",
  "Pokémon Gallery Figure: Magikarp—Splash",
  "350000",
  "315000",
  "img/fig/fig11/fig11_1.jpg",
  "xanh",
  "fig11.jpg",
  "<li>Amazing battle pose!</li><li>Pokémon Center original</li>"
);
productArr[52] = new products(
  "fig12",
  "Pokémon Gallery Figure: Eevee—Swift",
  "370000",
  "333000",
  "img/fig/fig12/fig12_1.jpg",
  "nau",
  "fig12.jpg",
  "<li>Amazing battle pose!</li><li>Pokémon Center original</li>"
);
productArr[53] = new products(
  "fig13",
  "Pokémon Gallery Figure: Cubone—Bone Club",
  "370000",
  "345000",
  "img/fig/fig13/fig13_1.jpg",
  "xam",
  "fig13.jpg",
  "<li>Cubone's skull and bone look amazing!</li><li>Part of the Gallery Figure line</li>"
);
productArr[54] = new products(
  "fig14",
  "Pokémon Gallery Figure: Delibird-Present",
  "385000",
  "365000",
  "img/fig/fig14/fig14_1.jpg",
  "do",
  "fig14.jpg",
  "<li>Stars, clouds, and one big Present!</li><li>Part of the Pokémon Gallery Figures collection</li><li>Pokémon Center Original</li>"
);
productArr[55] = new products(
  "fig15",
  "Pokémon Gallery Figure: Litten—Ember",
  "385000",
  "365000",
  "img/fig/fig15/fig15_1.jpg",
  "cam",
  "fig15.jpg",
  "<li>Litten on the prowl!</li><li>Alolan first partner Pokémon</li><li>Pokémon Center Original design</li>"
);
productArr[56] = new products(
  "fig16",
  "Nendoroid: Red Posable Figure",
  "400000",
  "385000",
  "img/fig/fig16/fig16_1.jpg",
  "xanh",
  "fig16.jpg",
  "<li>The spirit of the Pokémon Trainer in a posable figure!</li><li>Nendoroid collectible figure</li><li>Comes with three unique expressions and three Pokémon friends!</li><li>Includes a body and three legs with six arms and hands plus hair and hat</li>"
);
productArr[57] = new products(
  "fig17",
  "Nendoroid: Lana Posable Figure",
  "400000",
  "390000",
  "img/fig/fig17/fig17_1.jpg",
  "trang",
  "fig17.jpg",
  "<li>Pose her with the adorable Wishiwashi (Solo Form) or awesome Wishiwashi (School Form)</li><li>Pokémon Center purchases include an exclusive Dive Ball accessory</li>"
);
productArr[58] = new products(
  "fig18",
  "Nendoroid: N Posable Figure",
  "400000",
  "370000",
  "img/fig/fig18/fig18_1.jpg",
  "xanhla",
  "fig18.jpg",
  "<li>Nendoroid collectible figure</li><li>A famous figure from the Pokémon world in Nendoroid style!</li><li>Nendoroid and Pokémon quality</li><li>N figure is hand-painted. There may be slight variations between products.</li><li>Includes Reshiram Pokémon figure</li>"
);
productArr[59] = new products(
  "fig19",
  "Nendoroid: Cynthia Posable Figure",
  "400000",
  "370000",
  "img/fig/fig19/fig19_1.jpg",
  "vang",
  "fig19.jpg",
  "<li>Nendoroid collectible figure</li><li>A famous figure from the Pokémon world in Nendoroid style!</li><li>Cynthia figure is hand-painted. There may be slight variations between products.</li><li>Comes with two unique expressions plus a Garchomp friend!</li><li>Change pose and details so Cynthia is just right!</li>"
);
productArr[60] = new products(
  "plu00",
  "Pikachu in Team Magma Costume Poké Plush (Standard Size) - 8 In.",
  "450000",
  "395000",
  "img/plu/plu00/plu00_1.jpg",
  "do",
  "plu00.jpg",
  "<li>Team Magma logo on Pikachu's outfit and belt pouch</li><li>Hood can be removed to free up Pikachu's ears</li><li>Pokémon Center Original design</li><li>This Pikachu plush is shown here with other Pikachu plush for display purposes only—other plush sold separately. </li>"
);
productArr[61] = new products(
  "plu01",
  "Pikachu Eerie Delights Poké Plush - 9 1/4 In.",
  "450000",
  "395000",
  "img/plu/plu01/plu01_1.jpg",
  "vang",
  "plu01.jpg",
  "<li>Hat and cape are sewn on</li><li>Includes Pikachu plush (other pictured items not included)</li><li>Part of the Eerie Delights collection</li><li>Pokémon Center Original</li>"
);
productArr[62] = new products(
  "plu02",
  "Alolan Vulpix Pokémon Dolls Plush - 6 In.",
  "40000",
  "365000",
  "img/plu/plu02/plu02_1.jpg",
  "trang",
  "plu02.jpg",
  "<li>Huge embroidered eyes</li><li>Pokémon Center Original</li>"
);
productArr[63] = new products(
  "plu03",
  "Vaporeon Pokémon Dolls Plush - 7 In.",
  "450000",
  "395000",
  "img/plu/plu03/plu03_1.jpg",
  "xanh",
  "plu03.jpg",
  "<li>Scalloped edges and fins everywhere!</li><li>Pokémon Center Original design</li>"
);
productArr[64] = new products(
  "plu04",
  "Jolteon Pokémon Dolls Plush - 6.5 In.",
  "430000",
  "375000",
  "img/plu/plu04/plu04_1.jpg",
  "vang",
  "plu04.jpg",
  "<li>Lightning zigzags and a white ruff!</li><li>Pokémon Center Original design</li>"
);
productArr[65] = new products(
  "plu05",
  "Hyhy Suffed Chuchu's",
  "440000",
  "395000",
  "img/plu/plu05/plu05_1.jpg",
  "cam",
  "plu05.jpg",
  "<li>Held in March, this special day revolves around displaying beautiful dolls in the court dress of the Heian period in Japan.</li><li>These two Pikachu are dressed up as the Emperor and Empress!</li><li>Silky robes printed with floral and leaf patterns</li><li>Part of the Paired Pikachu Celebrations line</li>"
);
productArr[66] = new products(
  "plu06",
  "Espeon Pokémon Dolls Plush - 6 In.",
  "440000",
  "395000",
  "img/plu/plu06/plu06_1.jpg",
  "tim",
  "plu06.jpg",
  "<li>Embroidered red dot and split tail!</li><li>Pokémon Center Original</li>"
);
productArr[67] = new products(
  "plu07",
  "Umbreon Pokémon Dolls Plush - 6 1/2 In.",
  "450000",
  "395000",
  "img/plu/plu07/plu07_1.jpg",
  "den",
  "plu07.jpg",
  "<li>Fierce red eyes!</li><li>Pokémon Center Original</li>"
);
productArr[68] = new products(
  "plu08",
  "Leafeon Pokémon Dolls Plush - 7 In.",
  "450000",
  "395000",
  "img/plu/plu08/plu08_1.jpg",
  "vang",
  "plu08.jpg",
  "<li>Four-color ears!</li><li>Pokémon Center Original design</li>"
);
productArr[69] = new products(
  "plu09",
  "Glaceon Pokémon Dolls Plush - 7 In.",
  "450000",
  "395000",
  "img/plu/plu09/plu09_1.jpg",
  "xanh",
  "plu09.jpg",
  "<li>Embroidered blue eyes!</li><li>Pokémon Center Original design</li>"
);
productArr[70] = new products(
  "plu11",
  "Pikachu Pokémon Holiday Extravaganza Poké Plush - 9 1/2 In.",
  "480000",
  "450000",
  "img/plu/plu11/plu11_1.jpg",
  "do",
  "plu11.jpg",
  "<li>Pikachu's looking jolly and bright!</li><li>A fun, festive plush to celebrate the season (other pictured items not included)</li><li>Part of the Pokémon Holiday Extravaganza collection</li><li>Pokémon Center Original</li>"
);
productArr[71] = new products(
  "plu12",
  "Eevee Pokémon Holiday Extravaganza Poké Plush - 9 1/2 In.",
  "480000",
  "450000",
  "img/plu/plu12/plu12_1.jpg",
  "cam",
  "plu12.jpg",
  "<li>Epaulets and a cape give Eevee a formal holiday look</li><li>A fun, festive plush to celebrate the season (other pictured items not included)</li><li>Part of the Pokémon Holiday Extravaganza collection</li><li>Pokémon Center Original</li>"
);
productArr[72] = new products(
  "plu13",
  "Mimikyu Eerie Delights Poké Plush - 9 1/2 In.",
  "480000",
  "450000",
  "img/plu/plu13/plu13_1.jpg",
  "tim",
  "plu13.jpg",
  "<li>Noibat mask is sewn on</li><li>Includes Mimikyu plush (other pictured items not included)</li><li>Part of the Eerie Delights collection</li><li>Pokémon Center Original</li>"
);
productArr[73] = new products(
  "plu14",
  "Victini Cape Pikachu Poké Plush - 8 1/2 In.",
  "485000",
  "457000",
  "img/plu/plu14/plu14_1.jpg",
  "vang",
  "plu14.jpg",
  "<li>Big ears stand up tall!</li><li>Pokémon Center Original</li>"
);
productArr[74] = new products(
  "plu15",
  "Rowlet Cape Pikachu Poké Plush - 7 In.",
  "485000",
  "457000",
  "img/plu/plu15/plu15_1.jpg",
  "xanhla",
  "plu15.jpg",
  "<li>Super-cute cape with green bow tie!</li><li>Pokémon Center Original</li>"
);
productArr[75] = new products(
  "plu16",
  "Holiday Rockruff Poké Plush - 7 1/2 In.",
  "485000",
  "457000",
  "img/plu/plu16/plu16_1.jpg",
  "do",
  "plu16.jpg",
  "<li>Plaid lining inside its cape!</li><li>Pokémon Center Original design</li>"
);
productArr[76] = new products(
  "plu17",
  "Flareon Pokémon Dolls Plush - 6 In.",
  "485000",
  "457000",
  "img/plu/plu17/plu17_1.jpg",
  "cam",
  "plu17.jpg",
  "<li>Extra fluffy ruff and top!</li><li>Pokémon Center Original design</li>"
);
productArr[77] = new products(
  "plu18",
  "Vulpix Cape Pikachu Poké Plush (Standard) - 8.5 In.",
  "485000",
  "457000",
  "img/plu/plu18/plu18_1.jpg",
  "cam",
  "plu18.jpg",
  "<li>Hood partly removable</li><li>Pokémon Center Original design</li>"
);
productArr[78] = new products(
  "plu19",
  "Paired Pikachu Celebrations: Doll Festival Pikachu Plush - 8 1/2 In.",
  "500000",
  "457000",
  "img/plu/plu19/plu19_1.jpg",
  "vang",
  "plu19.jpg",
  "<li>Held in March, this special day revolves around displaying beautiful dolls in the court dress of the Heian period in Japan.</li><li>These two Pikachu are dressed up as the Emperor and Empress!</li><li>Silky robes printed with floral and leaf patterns</li><li>Part of the Paired Pikachu Celebrations line</li>"
);



//Find figure products in products list
//find hat prodcuts in products list
let hatList = [];
let hatIndex = 0;
for(let i = 0; i < productArr.length; i++){
    let hatFilter = productArr[i].id.substr(0,3);
    if(hatFilter == "hat"){
        hatList[hatIndex] = productArr[i];
        hatIndex++;
    }
}
//find shirt prodcuts in products list
let shirtList = [];
let shirtIndex = 0;
for(let i = 0; i < productArr.length; i++){
    let shirtFilter = productArr[i].id.substr(0,3);
    if(shirtFilter == "shi"){
        shirtList[shirtIndex] = productArr[i];
        shirtIndex++;
    }
}
//find plush prodcuts in products list
let plushList = [];
let plushIndex = 0;
for(let i = 0; i < productArr.length; i++){
    let plushFilter = productArr[i].id.substr(0,3);
    if(plushFilter == "plu"){
        plushList[plushIndex] = productArr[i];
        plushIndex++;
    }
}
//find figure prodcuts in products list
let figureList = [];
let figureIndex = 0;
for(let i = 0; i < productArr.length; i++){
    let figureFilter = productArr[i].id.substr(0,3);
    if(figureFilter == "fig"){
        figureList[figureIndex] = productArr[i];
        figureIndex++;
    }
}
//find best sale products
//sort by fix price ascending
function sortByFixPrice(){
    let tempArr = productArr;
    for(let i = 0; i < tempArr.length-1; i++){
        for(let j = i+1; j < tempArr.length; j++){
            if(tempArr[i].fixPrice > tempArr[j].fixPrice){
               let temp = tempArr[i];
               tempArr[i] = tempArr[j];
               tempArr[j] = temp;
           }
       }
   }
   return tempArr;
}
let bestSaleArr = [];
function findBestSale(){
    let tempBestSale = sortByFixPrice();
    for(let i = 0; i < 10; i++){
        bestSaleArr[i] = tempBestSale[i];
    }
}
findBestSale();
//Find best seller products
let bestSellerArr = [];
bestSellerArr.push(productArr[0]);
bestSellerArr.push(productArr[7]);
bestSellerArr.push(productArr[23]);
bestSellerArr.push(productArr[35]);
bestSellerArr.push(productArr[42]);
bestSellerArr.push(productArr[20]);
bestSellerArr.push(productArr[72]);
bestSellerArr.push(productArr[76]);
bestSellerArr.push(productArr[33]);
bestSellerArr.push(productArr[15]);

