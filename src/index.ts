import { Web5 } from "@tbd54566975/web5";

async function main() {
  const { web5, did } = await Web5.connect();
  console.log(did);
}

main();