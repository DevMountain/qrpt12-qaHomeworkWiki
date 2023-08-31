import {Google} from './googlePage'
const page = new Google()
const fs = require('fs')

test('do a search', async () => {
    await page.navigate(); 
    await page.search('Chicago Cubs'); 
    let text = await page.getResults();
    expect(text).toContain('Chicago Cubs'); 
    await fs.writeFile(`${__dirname}/cub.png`, 
    await page.driver.takeScreenshot(), 'base64', 
    (e) => {
        if (e) console.error(e)
        else console.log('good job')
    })
    await page.driver.quit()
})