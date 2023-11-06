//#Q43
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
      greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
  }
  

  const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  const greatMagicianNames: string[] = makeGreat([...magicianNames]); // Using the spread operator to create a copy
  
  console.log("Original Magicians:");
  showMagicians(magicianNames);
  
  console.log("\nMagicians with 'the Great':");
  showMagicians(greatMagicianNames);
