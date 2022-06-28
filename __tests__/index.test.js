const { Builder, Capabilities } = require('selenium-webdriver');
require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { addMovie, watchMovie, deleteMovie } = require('../test-functions/test-functions.js');

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html');
})

afterAll(async () => {
    await driver.quit();
})

// afterEach(async () => {
//     await driver.sleep(3000);
// })

test('Add a movie', async () => {
    await addMovie(driver);
})

test('Watch a movie', async () => {
    await watchMovie(driver);
})

test('Delete a movie', async () => {
    await deleteMovie(driver);
})