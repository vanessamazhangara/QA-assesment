
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"
import { decodedTextSpanIntersectsWith } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('test should check draw button displays choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const display = await draw.isDisplayed()
    expect(display).toBe(true)
})

test('“Add to Duo” button should to display the div with id = “player-id”', async () => {
    const duoBtn = await driver.findElement(By.id('player-id'))
    const display = await duoBtn.isDisplayed()
    expect(display).toBe(true)
})