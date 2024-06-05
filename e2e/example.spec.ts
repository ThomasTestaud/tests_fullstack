import { test, expect } from '@playwright/test';

// Récupérer le bouton avec l'id
let button;
let lune;
let terre;
let soleil;

async function setInputs(page) {
  lune = await page.locator("#lune");
  terre = await page.locator("#terre");
  soleil = await page.locator("#soleil");
  button = await page.locator("#calculate");
};

async function testInputs(page, luneValue, terreValue, soleilValue) {
  await lune.fill(luneValue);
  await terre.fill(terreValue);
  await soleil.fill(soleilValue);

  await setInputs(page);

  await button.click();

  return await page.locator("#result").innerText();
}

test.beforeEach(async ({ page }) => {
  // Avant chaque test, on se rend sur la page localhost:5173
  await page.goto('http://localhost:5173/');
  
  await setInputs(page);
});

test('1 1 1 = mortin', async ({ page }) => {
  // Récupérer la valeur du compteur
  const result = await testInputs(page, "1", "1", "1");
  expect(result).toBe("mortin");
});

test('1 1 2 = nuight', async ({ page }) => {
  // Récupérer la valeur du compteur
  const result = await testInputs(page, "1", "1", "2");
  expect(result).toBe("nuight");
});

test('1 2 1 = mortin', async ({ page }) => {
  // Récupérer la valeur du compteur
  const result = await testInputs(page, "1", "2", "1");
  expect(result).toBe("mortin");
});

test('2 1 1 = mortin', async ({ page }) => {
  // Récupérer la valeur du compteur
  const result = await testInputs(page, "2", "1", "1");
  expect(result).toBe("mortin");
});

test('2 2 1 = mortin', async ({ page }) => {
  // Récupérer la valeur du compteur
  const result = await testInputs(page, "2", "2", "1");
  expect(result).toBe("mortin");
});

test('2 2 2 = nuight', async ({ page }) => {
  // Récupérer la valeur du compteur
  const result = await testInputs(page, "2", "2", "2");
  expect(result).toBe("nuight");
});


