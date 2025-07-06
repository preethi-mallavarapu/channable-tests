import { Page } from "@playwright/test";

export const allowAllCookies = async (page: Page) => {
    await page.locator("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click();
}