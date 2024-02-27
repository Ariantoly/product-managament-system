const snapshotUtil = require('@blibli/integration-test-tools/lib/utils/snapshot')
const responsiveUtil = require('@blibli/integration-test-tools/lib/utils/responsive')
const networkUtil = require('@blibli/integration-test-tools/lib/utils/network')
const host = require('@blibli/integration-test-tools/lib/utils/host')

/* Scenario:
1. Main page load well
2. Click insert button
3. Click insert should show error toast
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

  test('3. Click insert should show error toast', async () => {
    await page.click('#submit-button')
    await page.locator('.blu-toast').first().waitFor()
    await page.waitForTimeout(500)
    await snapshotUtil.assertSnapshot(expect, page)
  })
})