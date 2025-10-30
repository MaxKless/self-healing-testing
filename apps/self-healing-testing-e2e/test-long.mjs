import { setTimeout } from "timers/promises";

await setTimeout(10 * 60 * 1000); // 10 minutes
console.log("Done");
test()

function test() {
    // todo: make this not error anymore once testing is done
    process.exit(1)
}