/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { test, expect } from '@playwright/test';
import {ScreenShotter} from "../../../../tools/test/screenshoter/screenshoter";



// See here how to get started:
// https://playwright.dev/docs/intro




test('Test1', async ({ page },testInfo) => {
  let screenShotter = new ScreenShotter(testInfo);
  await screenShotter.startStopWatch(page)
  await page.goto('/');

  await screenShotter.takeScreenshot(page,'before_click',false);
  await page.locator("#animationstart").click();
  await screenShotter.takeScreenshot(page,'after_click',false);
  await screenShotter.makeCuePoint(page,'after_click',
    'a Cue living a long time ago form start',
    {
      x:20,
      y:20,
      w:100,
      h:100,
      margin:20
    })
  await page.waitForTimeout(3000);
  await screenShotter.takeScreenshot(page,'after_animation',false);
  await screenShotter.makeCuePoint(page,'my_secCuePoint2')
  await screenShotter.makeCuePoint(page,'my_terCuePoint3')
  await page.locator("#animationstop").click();
  await screenShotter.takeScreenshot(page,'after_click2',false);
  await page.waitForTimeout(3000);
  await screenShotter.takeScreenshot(page,'after_stop',false);
  await screenShotter.generateJsonSummery(page);
  await expect(page.locator('#w5')).not.toBeInViewport();
})

