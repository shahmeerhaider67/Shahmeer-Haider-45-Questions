//#Q42
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
  
  let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  
  const greatMagicianNames: string[] = makeGreat(magicianNames);
  
  
  showMagicians(greatMagicianNames);
  
