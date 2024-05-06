import puppeteer from 'puppeteer';

const URL = 'https://www.op.gg/summoners/euw/summoner_name-tagline/ingame';
const REPLAY_BUTTON_XPATH = '::-p-xpath(/html/body/div[1]/div[5]/div/div/div[2]/div/button)';

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


(async () => {
    const browser = await puppeteer.launch({headless:false,ignoreHTTPSErrors:true, args: [`--window-size=${480},${360}`]});
    const page = await browser.newPage();
    await page.goto(URL);


    let keepRunning = true;

    process.on('SIGINT', () => {
        console.log("Received SIGINT. Exiting gracefully...");
        keepRunning = false;
    });


    while (keepRunning) {
        await sleep(5*1000);

        let download_button = await page.$$(REPLAY_BUTTON_XPATH);
        if (download_button.length === 2) {
            await download_button[0].click();
            console.log("Replay downloaded");
        } else if(download_button.length === 1)  {
            console.log("Replay already downloaded");
        }
        else{
            console.log("No Game found");
        }
       await sleep(50*1000);
        await page.reload();
    }

    await browser.close();
    console.log("Browser closed. Exiting program.");
})();