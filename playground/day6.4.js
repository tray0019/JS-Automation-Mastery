import { $, browser} from '@wdio/globals';

describe("Parallel wait test", () => {
    it("should compare sequential vs parallel waits", async () => {
        await browser.url("https://www.example.com")

        
        await $(`#item1`).waitForDisplayed();
        await $(`#item2`).waitForDisplayed();
        await $(`#item3`).waitForDisplayed();
        console.timeEnd("Sequential");
        

        console.log();
        console.log("--- Parallel ---");

        await Promise.all([
            $(`#item1`).waitForDisplayed(),
            $(`#item2`).waitForDisplayed(),
            $(`#item3`).waitForDisplayed(),
        ]);

        console.timeEnd("Parallel");
        

    });
});