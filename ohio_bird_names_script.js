const ohioBirdNames = [
    "Black-bellied Whistling Duck",
    "Fulvous Whistling-Duck",
    "Snow Goose",
    "Ross's Goose",
    "Greater White-fronted Goose",
    "Brant",
    "Barnacle Goose",
    "Cackling Goose",
    "Canada Goose",
    "Mute Swan",
    "Black Swan",
    "Trumpeter Swan",
    "Tundra Swan",
    "Whooper Swan",
    "Egyptian Goose",
    "Ruddy Shelduck",
    "Common Shelduck",
    "Muscovy Duck",
    "Wood Duck",
    "Mandarin Duck",
    "Garganey",
    "Blue-winged Teal",
    "Cinnamon Teal",
    "Northern Shoveler",
    "Gadwall",
    "Falcated Duck",
    "Eurasian Wigeon",
    "American Wigeon",
    "Chiloe Wigeon",
    "Mallard",
    "American Black Duck",
    "White-cheeked Pintail",
    "Northern Pintail",
    "Green-winged Teal",
    "Canvasback",
    "Redhead",
    "Ring-necked Duck",
    "Tufted Duck",
    "Greater Scaup",
    "Lesser Scaup",
    "King Eider",
    "Common Eider",
    "Harlequin Duck",
    "Surf Scoter",
    "White-winged Scoter",
    "Black Scoter",
    "Long-tailed Duck",
    "Bufflehead",
    "Common Goldeneye",
    "Barrow's Goldeneye",
    "Hooded Merganser",
    "Common Merganser",
    "Red-breasted Merganser",
    "Ruddy Duck",
    "Helmeted Guineafowl",
    "Northern Bobwhite",
    "Wild Turkey",
    "Ruffed Grouse",
    "Greater Prairie-Chicken",
    "Gray Partridge",
    "Golden Pheasant",
    "Ring-necked Pheasant",
    "Indian Peafowl",
    "Red Junglefowl",
    "Red-legged Partridge",
    "Chukar",
    "American Flamingo",
    "Pied-billed Grebe",
    "Horned Grebe",
    "Red-necked Grebe",
    "Eared Grebe",
    "Western Grebe",
    "Rock Pigeon",
    "Passenger Pigeon",
    "Eurasian Collared-Dove",
    "African Collared-Dove",
    "Common Ground Dove",
    "White-winged Dove",
    "Mourning Dove",
    "Smooth-billed Ani",
    "Groove-billed Ani",
    "Yellow-billed Cuckoo",
    "Black-billed Cuckoo",
    "Common Nighthawk",
    "Chuck-will's-widow",
    "Eastern Whip-poor-will",
    "Chimney Swift",
    "White-throated Swift",
    "Mexican Violetear",
    "Ruby-throated Hummingbird",
    "Black-chinned Hummingbird",
    "Anna's Hummingbird",
    "Calliope Hummingbird",
    "Rufous Hummingbird",
    "Allen's Hummingbird",
    "Broad-billed Hummingbird",
    "King Rail",
    "Virginia Rail",
    "Sora",
    "Common Gallinule",
    "American Coot",
    "Purple Gallinule",
    "Yellow Rail",
    "Black Rail",
    "Limpkin",
    "Sandhill Crane",
    "Whooping Crane",
    "Black-necked Stilt",
    "American Avocet",
    "Black-bellied Plover",
    "American Golden-Plover",
    "Killdeer",
    "Semipalmated Plover",
    "Piping Plover",
    "Northern Lapwing",
    "Wilson's Plover",
    "Snowy Plover",
    "Upland Sandpiper",
    "Whimbrel",
    "Long-billed Curlew",
    "Hudsonian Godwit",
    "Marbled Godwit",
    "Short-billed Dowitcher",
    "Long-billed Dowitcher",
    "American Woodcock",
    "Eurasian Woodcock",
    "Wilson's Snipe",
    "Wilson's Phalarope",
    "Red Phalarope",
    "Red-necked Phalarope",
    "Spotted Sandpiper",
    "Solitary Sandpiper",
    "Lesser Yellowlegs",
    "Willet",
    "Spotted Redshank",
    "Greater Yellowlegs",
    "Ruddy Turnstone",
    "Red Knot",
    "Ruff",
    "Sharp-tailed Sandpiper",
    "Curlew Sandpiper",
    "Stilt Sandpiper",
    "Red-necked Stint",
    "Buff-breasted Sandpiper",
    "Sanderling",
    "Dunlin",
    "Purple Sandpiper",
    "Baird's Sandpiper",
    "White-rumped Sandpiper",
    "Least Sandpiper",
    "Pectoral Sandpiper",
    "Western Sandpiper",
    "Semipalmated Sandpiper",
    "Long-tailed Jaeger",
    "Parasitic Jaeger",
    "Pomarine Jaeger",
    "Atlantic Puffin",
    "Long-billed Murrelet",
    "Black Guillemot",
    "Thick-billed Murre",
    "Ancient Murrelet",
    "Little Gull",
    "Ross's Gull",
    "Black-legged Kittiwake",
    "Ivory Gull",
    "Sabine's Gull",
    "Bonaparte's Gull",
    "Black-headed Gull",
    "Laughing Gull",
    "Franklin's Gull",
    "Black-tailed Gull",
    "Heermann's Gull",
    "Common Gull",
    "Short-billed Gull",
    "Ring-billed Gull",
    "Kelp Gull",
    "Herring Gull",
    "Great Black-backed Gull",
    "Glaucous Gull",
    "Lesser Black-backed Gull",
    "California Gull",
    "Glaucous-winged Gull",
    "Slaty-backed Gull",
    "Iceland Gull",
    "Sooty Tern",
    "Least Tern",
    "Large-billed Tern",
    "Caspian Tern",
    "Black Tern",
    "Forster's Tern",
    "Arctic Tern",
    "Common Tern",
    "Royal Tern",
    "Red-throated Loon",
    "Arctic Loon",
    "Pacific Loon",
    "Common Loon",
    "Leach's Storm-Petrel",
    "Black-capped Petrel",
    "Wood Stork",
    "Magnificent Frigatebird",
    "Northern Gannet",
    "Brown Booby",
    "Anhinga",
    "Great Cormorant",
    "Double-crested Cormorant",
    "Neotropic Cormorant",
    "American White Pelican",
    "Brown Pelican",
    "American Bittern",
    "Least Bittern",
    "Yellow-crowned Night Heron",
    "Black-crowned Night Heron",
    "Little Blue Heron",
    "Tricolored Heron",
    "Reddish Egret",
    "Snowy Egret",
    "Green Heron",
    "Western Cattle Egret",
    "Great Egret",
    "Great Blue Heron",
    "White Ibis",
    "Glossy Ibis",
    "White-faced Ibis",
    "Roseate Spoonbill",
    "Black Vulture",
    "Turkey Vulture",
    "Osprey",
    "White-tailed Kite",
    "Swallow-tailed Kite",
    "Golden Eagle",
    "Mississippi Kite",
    "Northern Harrier",
    "Sharp-shinned Hawk",
    "Cooper's Hawk",
    "American Goshawk",
    "Bald Eagle",
    "Harris's Hawk",
    "Red-shouldered Hawk",
    "Broad-winged Hawk",
    "Swainson's Hawk",
    "Red-tailed Hawk",
    "Rough-legged Hawk",
    "Ferruginous Hawk",
    "Barn Owl",
    "Eastern Screech-Owl",
    "Snowy Owl",
    "Great Horned Owl",
    "Northern Hawk Owl",
    "Burrowing Owl",
    "Barred Owl",
    "Great Gray Owl",
    "Long-eared Owl",
    "Short-eared Owl",
    "Boreal Owl",
    "Northern Saw-whet Owl",
    "Belted Kingfisher",
    "Yellow-bellied Sapsucker",
    "Red-naped Sapsucker",
    "Red-headed Woodpecker",
    "Red-bellied Woodpecker",
    "Black-backed Woodpecker",
    "Downy Woodpecker",
    "Red-cockaded Woodpecker",
    "Hairy Woodpecker",
    "Pileated Woodpecker",
    "Northern Flicker",
    "Crested Caracara",
    "American Kestrel",
    "Merlin",
    "Gyrfalcon",
    "Peregrine Falcon",
    "Prairie Falcon",
    "Cockatiel",
    "Budgerigar",
    "Monk Parakeet",
    "White-winged Parakeet",
    "Yellow-chevroned Parakeet",
    "Olive-sided Flycatcher",
    "Eastern Wood-Pewee",
    "Yellow-bellied Flycatcher",
    "Acadian Flycatcher",
    "Alder Flycatcher",
    "Willow Flycatcher",
    "Least Flycatcher",
    "Gray Flycatcher",
    "Dusky Flycatcher",
    "Western Flycatcher",
    "Eastern Phoebe",
    "Say's Phoebe",
    "Vermilion Flycatcher",
    "Ash-throated Flycatcher",
    "Great Crested Flycatcher",
    "Tropical Kingbird",
    "Western Kingbird",
    "Eastern Kingbird",
    "Gray Kingbird",
    "Scissor-tailed Flycatcher",
    "White-eyed Vireo",
    "Bell's Vireo",
    "Yellow-throated Vireo",
    "Blue-headed Vireo",
    "Philadelphia Vireo",
    "Warbling Vireo",
    "Red-eyed Vireo",
    "Loggerhead Shrike",
    "Northern Shrike",
    "Blue Jay",
    "Azure-winged Magpie",
    "Black-billed Magpie",
    "American Crow",
    "Fish Crow",
    "Common Raven",
    "Carolina Chickadee",
    "Black-capped Chickadee",
    "Boreal Chickadee",
    "Tufted Titmouse",
    "Horned Lark",
    "Bank Swallow",
    "Tree Swallow",
    "Violet-green Swallow",
    "Purple Martin",
    "Northern Rough-winged Swallow",
    "Barn Swallow",
    "Cliff Swallow",
    "Cave Swallow",
    "Ruby-crowned Kinglet",
    "Golden-crowned Kinglet",
    "White-breasted Nuthatch",
    "Brown-headed Nuthatch",
    "Red-breasted Nuthatch",
    "Brown Creeper",
    "Blue-gray Gnatcatcher",
    "Rock Wren",
    "House Wren",
    "Winter Wren",
    "Sedge Wren",
    "Marsh Wren",
    "Carolina Wren",
    "Bewick's Wren",
    "European Starling",
    "Gray Catbird",
    "Brown Thrasher",
    "Northern Mockingbird",
    "Eastern Bluebird",
    "Mountain Bluebird",
    "Townsend's Solitaire",
    "Varied Thrush",
    "Veery",
    "Gray-cheeked Thrush",
    "Swainson's Thrush",
    "Hermit Thrush",
    "Wood Thrush",
    "American Robin",
    "Northern Wheatear",
    "Bohemian Waxwing",
    "Cedar Waxwing",
    "Northern Red Bishop",
    "Scaly-breasted Munia",
    "House Sparrow",
    "Eurasian Tree Sparrow",
    "American Pipit",
    "Sprague's Pipit",
    "Brambling",
    "Evening Grosbeak",
    "Pine Grosbeak",
    "Gray-crowned Rosy-Finch",
    "House Finch",
    "Purple Finch",
    "European Greenfinch",
    "Yellow-fronted Canary",
    "Common Redpoll",
    "Hoary Redpoll",
    "Red Crossbill",
    "White-winged Crossbill",
    "European Goldfinch",
    "Island Canary",
    "Pine Siskin",
    "American Goldfinch",
    "Lapland Longspur",
    "Chestnut-collared Longspur",
    "Smith's Longspur",
    "Snow Bunting",
    "Cassin's Sparrow",
    "Bachman's Sparrow",
    "Grasshopper Sparrow",
    "Chipping Sparrow",
    "Clay-colored Sparrow",
    "Field Sparrow",
    "Brewer's Sparrow",
    "Black-throated Sparrow",
    "Lark Sparrow",
    "Lark Bunting",
    "American Tree Sparrow",
    "Fox Sparrow",
    "Dark-eyed Junco",
    "White-crowned Sparrow",
    "Golden-crowned Sparrow",
    "Harris's Sparrow",
    "White-throated Sparrow",
    "Vesper Sparrow",
    "LeConte's Sparrow",
    "Nelson's Sparrow",
    "Savannah Sparrow",
    "Baird's Sparrow",
    "Henslow's Sparrow",
    "Song Sparrow",
    "Lincoln's Sparrow",
    "Swamp Sparrow",
    "Green-tailed Towhee",
    "Spotted Towhee",
    "Eastern Towhee",
    "Yellow-breasted Chat",
    "Yellow-headed Blackbird",
    "Bobolink",
    "Western Meadowlark",
    "Eastern Meadowlark",
    "Orchard Oriole",
    "Hooded Oriole",
    "Bullock's Oriole",
    "Baltimore Oriole",
    "Red-winged Blackbird",
    "Brown-headed Cowbird",
    "Rusty Blackbird",
    "Brewer's Blackbird",
    "Common Grackle",
    "Great-tailed Grackle",
    "Ovenbird",
    "Worm-eating Warbler",
    "Louisiana Waterthrush",
    "Northern Waterthrush",
    "Golden-winged Warbler",
    "Blue-winged Warbler",
    "Black-and-white Warbler",
    "Prothonotary Warbler",
    "Swainson's Warbler",
    "Tennessee Warbler",
    "Orange-crowned Warbler",
    "Nashville Warbler",
    "Connecticut Warbler",
    "Mourning Warbler",
    "Kentucky Warbler",
    "Common Yellowthroat",
    "Hooded Warbler",
    "American Redstart",
    "Kirtland's Warbler",
    "Cape May Warbler",
    "Cerulean Warbler",
    "Northern Parula",
    "Magnolia Warbler",
    "Bay-breasted Warbler",
    "Blackburnian Warbler",
    "Yellow Warbler",
    "Chestnut-sided Warbler",
    "Blackpoll Warbler",
    "Black-throated Blue Warbler",
    "Palm Warbler",
    "Pine Warbler",
    "Yellow-rumped Warbler",
    "Yellow-throated Warbler",
    "Prairie Warbler",
    "Black-throated Gray Warbler",
    "Townsend's Warbler",
    "Black-throated Green Warbler",
    "Canada Warbler",
    "Wilson's Warbler",
    "Painted Redstart",
    "Summer Tanager",
    "Scarlet Tanager",
    "Western Tanager",
    "Northern Cardinal",
    "Rose-breasted Grosbeak",
    "Black-headed Grosbeak",
    "Blue Grosbeak",
    "Indigo Bunting",
    "Painted Bunting",
    "Dickcissel"
]