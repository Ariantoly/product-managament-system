const snapshotUtil = require('@blibli/integration-test-tools/lib/utils/snapshot')
const responsiveUtil = require('@blibli/integration-test-tools/lib/utils/responsive')
const networkUtil = require('@blibli/integration-test-tools/lib/utils/network')
const host = require('@blibli/integration-test-tools/lib/utils/host')

/* Scenario:
1. Main page load well
2. Delete first product
3. Click confirm
*/

describe('product list', () => {
  beforeAll(async () => {
    await responsiveUtil.setDesktop(page)
    await page.goto('http://' + host.name + ':8080')
    await networkUtil.waitForNetworkIdle(page, 3000, 1)
  })

  test('1. Main page load well', async () => {
    await page.waitForTimeout(500)
    await snapshotUtil.assertSnapshot(expect, page)
  })

  test('2. Delete first product', async () => {
    await page.click('#delete-button-0')
    await page.waitForTimeout(500)
    await snapshotUtil.assertSnapshot(expect, page)
  })

  test('3. Click confirm', async () => {
    await page.click('#confirm-button')
    await page.locator('.blu-toast').first().waitFor()
    await page.waitForTimeout(500)
    await snapshotUtil.assertSnapshot(expect, page)
  })
})