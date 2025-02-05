export const rooms = {
    redRoom: {
      name: "The Red Room",
      image: "/images/RedRoom.png",
      door: "/images/RedDoor.jpg",
      color: "#d52210",
      description: "A dense study, lined with books of all kinds in grand cabinets, a large desk with a lamp and typewriter, and scattered papers across the desk and floor.",
      aiContext: "You are a detective assistant helping solve Isabelle DeFleur's murder. You're in her study, which contains crucial documents, medical records, and personal papers. While there's evidence about iris poisoning, pay attention to other details that might reveal the true cause of death.",
      clues: {
        clue1: {
          item: "Partially Burned Letter",
          description: "Charred remains of a letter visible behind the fireplace grate. Most of the text is burned away, but some fragments are still readable.",
          investigation: "Upon closer inspection, the readable portions mention a secret meeting and suspicious financial transactions. The letter appears to be correspondence between Victoria (Isabelle's sister) and James (the groundskeeper), though the context seems to reference a different matter entirely.",
          image: "/images/sprites/redroom/burntLetter.png"
        },
        clue2: {
          item: "Estate Financial Ledger",
          description: "A leather-bound book containing detailed financial records of the estate, hidden in a desk drawer with a false bottom.",
          investigation: "The ledger reveals systematic discrepancies in the estate's finances over the past year. Several large sums of money have been redirected through clever accounting tricks. Recent entries show that these discrepancies were beginning to be noticed by Isabelle.",
          image: "/images/sprites/redroom/estateLedger.png"
        },
        clue3: {
          item: "Medical Record",
          description: "Recent medical records showing Isabelle's heart condition and prescribed medication routine, tucked away among tax documents.",
          investigation: "The dosage instructions are very specific. A note from her doctor warns about the importance of taking the exact prescribed amount - no more, no less. Records show she had been managing her condition successfully for years.",
          image: "/images/sprites/redroom/medicalRecord.png"
        },
        clue4: {
          item: "Threatening Note",
          description: "A crumpled note wedged between the typewriter keys, written in cut-out letters from magazines.",
          investigation: "The note reads: 'I know what you put in the tea.' It appears to be a warning or threat, and initial evidence suggests it came from the maid - there are traces of cleaning powder on the paper. However, this may be intentionally misleading.",
          image: "/images/sprites/redroom/threateningNote.png"
        },
        clue5: {
          item: "Crystal Reference Book",
          description: "An old reference book on decorative crystals and lighting fixtures, with one section carefully bookmarked.",
          investigation: "The chapter discusses the composition of fine crystal chandeliers. A paragraph about the toxic properties of lead crystal has been subtly underlined. The book appears to have been recently consulted.",
          image: "/images/sprites/redroom/crystalBook.png"
        }
      }
    },
    
    blueRoom: {
      name: "The Blue Room",
      image: "/images/BlueRoom.png",
      door: "/images/BlueDoor.jpg",
      color: "#1e90ff",
      description: "A stunning botanical room filled with lush plants and exotic specimens. A small ornate fountain provides a peaceful backdrop of trickling water, and glass walls allow natural light to flood the space.",
      aiContext: "You are in the greenhouse where Isabelle cultivated her plants. While there's significant evidence about poisonous irises, there are also maintenance records and notes about the mansion's fixtures, including the chandeliers.",
      clues: {
        clue1: {
          item: "Rare Iris Plant",
          description: "An elegant iris plant partially hidden behind larger tropical specimens. Several flowers appear to have been recently cut.",
          investigation: "This particular iris variety is known to contain potent toxins. The clean, angular cuts on the stems suggest the flowers were harvested with precision. One remaining flower matches the one found on Isabelle's body.",
          image: "/images/sprites/blueroom/rareIris.png"
        },
        clue2: {
          item: "Garden Tools",
          description: "A locked cabinet containing specialized botanical tools, including pruning shears, specimen collectors, and extraction equipment.",
          investigation: "Chemical analysis of the tools reveals trace amounts of iris-based toxins. Curiously, the fingerprints on the tools belong to the maid, though she claims to never enter this room. The prints appear deliberately placed.",
          image: "/images/sprites/blueroom/gardenTools.png"
        },
        clue3: {
          item: "Soil Sample",
          description: "A distinct patch of soil beneath an empty planter, showing signs of recent disturbance.",
          investigation: "The soil contains unusual chemical compounds consistent with concentrated plant toxins. When cross-referenced with the groundskeeper's notes, it becomes clear this planter was used to dispose of extraction byproducts.",
          image: "/images/sprites/blueroom/soilSample.png"
        },
        clue4: {
          item: "Maintenance Logs",
          description: "A waterproof notebook hidden inside a container by the fountain, containing detailed plant care and mansion maintenance records.",
          investigation: "Recent entries show James was asked by Victoria to clean the violet room chandelier, but oddly, there's no record of any cleaning supplies being used that day. Several pages appear to have been removed.",
          images: "/images/sprites/blueroom/maintenanceJournal.png"
        },
        clue5: {
          item: "Victoria's Notebook",
          description: "A small notebook fallen behind a planter, containing various notes about the mansion's maintenance and decoration.",
          investigation: "Includes detailed drawings of the violet room chandelier and what appears to be calculations of crystal sizes. Several pages show studies of light refraction through crystal prisms.",
          image: "/images/sprites/blueroom/victoriaJournal.png"
        }
      }
    },
    
    violetRoom: {
      name: "The Violet Room",
      image: "/images/VioletRoom.png",
      door: "/images/VioletDoor.png",
      color: "#8a2be2",
      description: "Isabelle's ornate bedroom, dominated by a magnificent canopy bed and crystal chandelier. A luxurious vanity, elegant dressers, and ornate shelving complete the sophisticated space.",
      aiContext: "You're in Isabelle's bedroom, where she was found dead. The room contains both her personal effects and the grand chandelier. While evidence suggests poison, pay close attention to the details of the room's fixtures and Isabelle's personal items.",
      clues: {
        clue1: {
          item: "Chemical Analysis Kit",
          description: "An elaborate kit containing various tools for mixing perfumes and medicines, hidden in a vanity compartment.",
          investigation: "While seemingly used for perfume, some tools show traces of crushed crystal rather than botanical extracts. A pestle shows unusual scratch marks, inconsistent with grinding soft plant materials.",
          image: "/images/sprites/violetroom/checmicalAnalysisKit.png"
        },
        clue2: {
          item: "Chandelier Irregularity",
          description: "A subtle gap in the chandelier's crystal pattern, only visible when light hits at certain angles.",
          investigation: "One crystal appears to have been carefully removed rather than fallen. The mounting hardware shows signs of deliberate removal rather than accident. The missing piece would have been about the size of a medicine capsule.",
          image: "/images/sprites/violetroom/crystalChandelier.png"
        },
        clue3: {
          item: "Medication Box",
          description: "A decorative box containing daily medication doses, positioned prominently on the bedside table.",
          investigation: "The powder in unused doses appears slightly sparkly compared to a reference photo of the proper medication. A note from her pharmacy shows she had just refilled her prescription, but several doses are missing.",
          image: "/images/sprites/violetroom/medicationBox.png"
        },
        clue4: {
          item: "Antique Tea Set",
          description: "A personal tea service set in a bedside drawer, including two cups showing signs of recent use.",
          investigation: "Chemical analysis of the dried residue shows traces of iris extract, but in non-lethal quantities. The positioning of the cups suggests Isabelle served tea to someone recently.",
          image: "/images/sprites/violetroom/teaSet.png"
        },
        clue5: {
          item: "Modified Will",
          description: "A legal document carefully sewn into the bed canopy fabric, recently modified.",
          investigation: "The will shows recent changes to inheritance distribution, apparently leaving everything to Victoria. However, close inspection reveals these changes were made under suspicious circumstances. A draft of an actual new will, hidden nearby, shows Isabelle planned to disinherit Victoria completely.",
          image: "/images/sprites/violetroom/modifiedWill.png"
        }
      }
    },
  
    yellowRoom: {
      name: "The Yellow Room",
      image: "/images/YellowRoom.png",
      door: "/images/YellowDoor.jpg",
      color: "#ffd700",
      description: "A grand living room featuring elegant furniture, antique rugs, and a magnificent fireplace. An imposing oil painting of Isabelle DeFleur hangs above the ornate mantle.",
      aiContext: "You're in the main living room where Isabelle entertained guests. While there's evidence of the iris poison plot, pay attention to details about the mansion's fixtures and recent maintenance work.",
      clues: {
        clue1: {
          item: "Family Portrait",
          description: "A large oil painting of the DeFleur family, whose subtle details become visible only when viewed in a specific mirror's reflection.",
          investigation: "When viewed through the mirror at the correct angle, the painting reveals hidden tensions - Isabelle's hand positioned possessively on inheritance papers, Victoria's subtle expression of contempt, and James the groundskeeper barely visible in the background, watching intently.",
          image: "/images/sprites/yellowroom/familyPortrait"
        },
        clue2: {
          item: "Chandelier Receipt",
          description: "An old receipt for the violet room chandelier, carefully hidden behind the fireplace mantle.",
          investigation: "The receipt emphasizes the chandelier's pure lead crystal composition, a sign of its quality. A newspaper clipping about lead poisoning is folded within it, with certain passages underlined.",
          image: "/images/sprites/yellowroom/chandelierReceipt.png"
        },
        clue3: {
          item: "Vacuum Cleaner Bag",
          description: "A used vacuum bag from recent cleaning, tucked behind a curtain.",
          investigation: "Contains traces of fine crystal dust, suggesting someone cleaned up crushed crystal. The amount of dust seems excessive for normal chandelier maintenance. The bag has been carefully hidden.",
          image: "/images/sprites/yellowroom/vacuumBag.png"
        },
        clue4: {
          item: "Meeting Notes",
          description: "A small notebook concealed in a false-bottom vase, containing hastily written plans and figures.",
          investigation: "The notes detail a complex plan between Victoria and James, written in deliberately messy handwriting to obscure its authors. It includes timing for tea service and references to cleaning schedules.",
          image: "/images/sprites/yellowroom/meetingNotes.png"
        },
        clue5: {
          item: "Doctor's Letter",
          description: "A recent letter from Isabelle's doctor found among correspondence on a side table.",
          investigation: "Notes confusion about symptoms that don't quite match expected poisoning patterns. Mentions unusual sparkly residue in fatal dose, but attributed it to normal medication binding agents. The doctor's confusion appears genuine.",
          image: "/images/sprites/yellowroom/doctorLetter.png"
        }
      }
    }
};
  
 