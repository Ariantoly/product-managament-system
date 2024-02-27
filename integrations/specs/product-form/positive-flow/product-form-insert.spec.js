const snapshotUtil = require('@blibli/integration-test-tools/lib/utils/snapshot')
const responsiveUtil = require('@blibli/integration-test-tools/lib/utils/responsive')
const networkUtil = require('@blibli/integration-test-tools/lib/utils/network')
const host = require('@blibli/integration-test-tools/lib/utils/host')

/* Scenario:
1. Main page load well
2. Click insert button
3. Fill in the required field
4. Click insert should show toast and back to product list
*/

describe('product form insert', () => {
  
  beforeAll(async () => {
    await responsiveUtil.setDesktop(page)
    await page.goto('http://' + host.name + ':8080')
    await networkUtil.waitForNetworkIdle(page, 3000, 1)
  })

  test('1. Main page load well', async () => {
    await page.waitForTimeout(500)
    await snapshotUtil.assertSnapshot(expect, page)
  })

  test('2. Click insert button', async () => {
    await page.click('#insert-button')
    await page.waitForTimeout(500)
    await snapshotUtil.assertSnapshot(expect, page)
  })

  test('3. Fill in the required field', async () => {
    await page.locator('input#name').fill('Snack')
    await page.locator('input#category').fill('Makanan')
    await page.locator('input#quantity').fill('10')
    await page.locator('input#unit-price').fill('10000')
    await page.waitForTimeout(500)
    await snapshotUtil.assertSnapshot(expect, page)
  })

  test('4. Click insert should show toast and back to product list', async () => {
    await page.click('#submit-button')
    await page.locator('.blu-toast').first().waitFor()
    await page.waitForTimeout(500)
    await snapshotUtil.assertSnapshot(expect, page)
  })
})